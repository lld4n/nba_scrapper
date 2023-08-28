import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { utilsalphabets } from '../../utils';
import { dataPlayersAlphabetType } from '../../@types/data';
import { PlayersAlphabetBodyType } from '../../@types/playersalphabet';
export async function playersalphabet(alphabet: string) {
  const response: responseType = {
    OK: true,
  };
  if (!utilsalphabets.includes(alphabet.toUpperCase())) {
    response.OK = false;
    return response;
  }
  const html = await axios.get('https://www.basketball-reference.com/players/' + alphabet);
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataPlayersAlphabetType = {
    headers: [],
    body: [],
  };
  $('#players thead th').each((_, element) => {
    data.headers.push({
      text: $(element).text().trim(),
      tip: $(element).attr('data-tip') || null,
    });
  });
  $('#players tbody tr').each((_, element) => {
    if (!$(element).hasClass('thead')) {
      const dataRow: PlayersAlphabetBodyType[] = [];
      $('th, td', element).each((_, elem) => {
        dataRow.push({
          type: $('a', elem).html() ? 'link' : 'text',
          hall: $(elem).text().includes('*'),
          active: Boolean($('strong', elem).html()),
          text: $(elem).text().replace('*', '').trim(),
          href: $('a', elem).attr('href') || null,
        });
      });
      data.body.push(dataRow);
    }
  });
  response.data = data;
  return response;
}

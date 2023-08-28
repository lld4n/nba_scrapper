import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataPlayersListType } from '../../@types/data';
import { PlayersListElement } from '../../@types/playerslist';

export async function playerslist() {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/players');
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataPlayersListType = [];
  $('.page_index li').each((_, element) => {
    const dataRow: PlayersListElement[] = [];
    $('div', element)
      .contents()
      .each((_, elem) => {
        if ($(elem).is('a')) {
          dataRow.push({
            type: 'simple',
            href: $(elem).attr('href'),
            text: $(elem).text().trim(),
          });
        } else if ($(elem).text().includes('*')) {
          dataRow.at(-1).type = 'hall';
        }
        if ($('strong', elem).html()) {
          dataRow.at(-1).type = 'active';
        }
      });
    data.push({
      alphabet: $('a', element).eq(0).text().trim() || $(element).text().trim(),
      href: $('a', element).eq(0).attr('href') || null,
      elements: dataRow,
    });
  });
  response.data = data;
  return response;
}

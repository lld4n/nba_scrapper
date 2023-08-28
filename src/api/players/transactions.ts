import cheerio from 'cheerio';
import axios from 'axios';
import { utilsalphabets, utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataPlayersTransactionsType } from '../../@types/data';

export async function playerstransactions(alphabet: string, path: string) {
  const response: responseType = {
    OK: true,
  };
  if (!utilsalphabets.includes(alphabet.toUpperCase())) {
    response.OK = false;
    return response;
  }
  const html = await axios.get(
    'https://www.basketball-reference.com/players/' + alphabet + '/' + path,
  );
  const $ = cheerio.load(utilsreformat(html.data));
  if (!$('#div_transactions').html()) {
    response.OK = false;
    return response;
  }
  const data: dataPlayersTransactionsType = [];
  $('#div_transactions p').each((_, element) => {
    $(element)
      .contents()
      .each((_, elem) => {
        data.push({
          bold: $(elem).is('strong'),
          text: $(elem).text().replace(':', '').trim(),
          href: $(elem).attr('href') || null,
        });
      });
  });
  response.data = data;
  return response;
}

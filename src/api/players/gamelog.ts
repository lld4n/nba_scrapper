import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { masalphabet } from '../../mas';
import { responseType } from '../../@types/response';
import { dataPlayersGamelogType } from '../../@types/data';

export async function playersgamelog(alphabet: string, path: string, key: string) {
  const response: responseType = {
    OK: true,
  };
  if (!masalphabet.includes(alphabet.toUpperCase())) {
    response.OK = false;
    return response;
  }
  const gamelogplayoffs =
    key === 'playoffs' ? '/gamelog-playoffs-advanced/' : '/gamelog-advanced/' + key;

  const html = await axios.get(
    'https://www.basketball-reference.com/players/' +
      alphabet +
      '/' +
      path.replace('.html', '') +
      gamelogplayoffs,
  );
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataPlayersGamelogType = {
    regular: null,
    playoffs: null,
  };
  $('#pgl_advanced').each(async (_, element) => {
    data.regular = await utilstablesscrapper($, element);
    data.regular.caption = $('caption', element).text().replace('Table', '').trim();
  });
  $('#pgl_advanced_playoffs').each(async (_, element) => {
    data.playoffs = await utilstablesscrapper($, element);
    data.playoffs.caption = $('caption', element).text().replace('Table', '').trim();
  });
  response.data = data;
  return response;
}

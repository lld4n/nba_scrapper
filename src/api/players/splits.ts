import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { masalphabet } from '../../mas';
import { responseType } from '../../@types/response';
import { dataPlayersSplitsType } from '../../@types/data';

export async function playerssplits(alphabet: string, path: string, key: string) {
  const response: responseType = {
    OK: true,
  };
  if (!masalphabet.includes(alphabet.toUpperCase())) {
    response.OK = false;
    return response;
  }
  const html = await axios.get(
    'https://www.basketball-reference.com/players/' +
      alphabet +
      '/' +
      path.replace('.html', '') +
      '/splits/' +
      key.replace('empty', ''),
  );
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataPlayersSplitsType = {
    heading: [],
    table: null,
  };
  $('#splits').each(async (_, element) => {
    data.table = await utilstablesscrapper($, element);
    data.table.caption = $('#splits_sh h2').text().trim();
    data.heading = $('#splits_sh .section_heading_text')
      .text()
      .split('·')
      .map((el) => el.trim());
  });
  response.data = data;
  return response;
}

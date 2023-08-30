import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { masalphabet } from '../../mas';
import { dataTableType } from '../../@types/data';
export async function playersalphabet(alphabet: string) {
  const response: responseType = {
    OK: true,
  };
  if (!masalphabet.includes(alphabet.toUpperCase())) {
    response.OK = false;
    return response;
  }
  const html = await axios.get('https://www.basketball-reference.com/players/' + alphabet);
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataTableType = {
    heading: null,
    table: null,
  };
  $('#players').each(async (_, element) => {
    data.table = await utilstablesscrapper($, element);
    data.table.caption = $('caption', element).text().replace('Table', '').trim();
  });
  response.data = data;
  return response;
}

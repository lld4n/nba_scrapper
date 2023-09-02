import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { dataTableType } from '../../@types/data';

export async function playoffslist() {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/playoffs/series.html');
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataTableType = {
    heading: '',
    table: null,
  };
  $('#playoffs_series').each(async (_, element) => {
    data.table = await utilstablesscrapper($, element);
  });
  response.data = data;
  return response;
}

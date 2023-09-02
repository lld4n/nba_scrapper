import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { dataTableType } from '../../@types/data';

export async function draftpages(path: string) {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/draft/' + path);
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataTableType = {
    heading: 'Показатели приведены за карьеру игрока в НБА',
    table: null,
  };
  $('#stats').each(async (_, element) => {
    data.table = await utilstablesscrapper($, element);
  });
  response.data = data;
  return response;
}

import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { dataTableMasType } from '../../@types/data';

export async function allstarinfo(path: string) {
  const response: responseType = {
    OK: true,
  };

  const html = await axios.get('https://www.basketball-reference.com/allstar/' + path);
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataTableMasType = [];
  $('.table_wrapper table').each(async (_, element) => {
    data.push(await utilstablesscrapper($, element));
  });
  response.data = data;
  return response;
}

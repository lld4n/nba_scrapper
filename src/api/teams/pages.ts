import cheerio from 'cheerio';
import axios from 'axios';
import { utilsgridscrapper, utilsreformat, utilstablesscrapper } from '../../utils';
import { masteamspages } from '../../mas';
import { responseType } from '../../@types/response';
import { dataGridType, dataTableType } from '../../@types/data';

export async function teamspages(key: string, path: string) {
  const response: responseType = {
    OK: true,
  };
  const element = masteamspages.find((el) => el.link === path);
  if (!element) {
    response.OK = false;
    return response;
  }
  const html = await axios.get('https://www.basketball-reference.com/teams/' + key + '/' + path);
  const $ = cheerio.load(utilsreformat(html.data));
  if (element.type === 'table') {
    const data: dataTableType = {
      heading: element.heading,
      table: null,
    };
    $('#' + element.id).each(async (_, elem) => {
      data.table = await utilstablesscrapper($, elem);
      data.table.caption = $('caption', elem).text().replace('Table', '').trim();
    });
    response.data = data;
  } else {
    const data: dataGridType = {
      grid: null,
      caption: element.heading,
    };
    $('#' + element.id).each(async (_, elem) => {
      data.grid = await utilsgridscrapper($, elem);
    });
    response.data = data;
  }
  return response;
}

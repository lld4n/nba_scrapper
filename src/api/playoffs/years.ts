import cheerio from 'cheerio';
import axios from 'axios';
import { utilsgridscrapper, utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { masplayoffsyears } from '../../mas/masplayoffsyears';
import { dataGridType, dataTableType } from '../../@types/data';

export async function playoffsyears(year: string, path: string) {
  const response: responseType = {
    OK: true,
  };
  const telement = masplayoffsyears.find((el) => el.id + '_' + el.link === path);
  if (!telement) {
    response.OK = false;
    return response;
  }
  const html = await axios.get(
    'https://www.basketball-reference.com/playoffs/' + year + telement.link,
  );
  const $ = cheerio.load(utilsreformat(html.data));
  if (telement.type === 'table') {
    const data: dataTableType = {
      heading: '',
      table: null,
    };
    $('#' + telement.id).each(async (_, element) => {
      data.table = await utilstablesscrapper($, element);
    });
    response.data = data;
  } else if (telement.type === 'grid') {
    const data: dataGridType = {
      caption: telement.name,
      grid: null,
    };
    $('#' + telement.id).each(async (_, element) => {
      data.grid = await utilsgridscrapper($, element);
    });
    response.data = data;
  }

  return response;
}

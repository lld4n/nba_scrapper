import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { dataTeamsListType } from '../../@types/data';

export async function teamslist() {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/teams/');
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataTeamsListType = {
    active: {
      table: null,
    },
    defunct: {
      table: null,
    },
  };
  $('#teams_active').each(async (_, element) => {
    data.active.table = await utilstablesscrapper($, element);
    data.active.table.caption = $('caption', element).text().replace('Table', '').trim();
  });
  $('#teams_defunct').each(async (_, element) => {
    data.defunct.table = await utilstablesscrapper($, element);
    data.defunct.table.caption = $('caption', element).text().replace('Table', '').trim();
  });
  response.data = data;
  return response;
}

import cheerio from 'cheerio';
import axios from 'axios';
import { utilsgridscrapper, utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import {
  dataGridType,
  dataLeaguesScheduleType,
  dataLeaguesTablePType,
  dataTableType,
  dataTransactionsType,
} from '../../@types/data';
import { masleaguesyears } from '../../mas';

export async function leaguesyears(year: string, path: string) {
  const response: responseType = {
    OK: true,
  };
  const telement = masleaguesyears.find((el) => el.id + '_' + el.link === path);
  if (!telement) {
    response.OK = false;
    return response;
  }
  const html = await axios.get(
    'https://www.basketball-reference.com/leagues/' + year + telement.link,
  );
  const $ = cheerio.load(utilsreformat(html.data));
  // return utilsreformat(html.data);
  if (telement.type === 'table') {
    const data: dataTableType = {
      heading: telement.name,
      table: null,
    };
    $('#' + telement.id).each(async (_, element) => {
      data.table = await utilstablesscrapper($, element);
      data.table.caption = telement.name;
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
  } else if (telement.type === 'transactions') {
    const data: dataTransactionsType = [];
    $('.page_index li').each((_, element) => {
      $(element)
        .contents()
        .each((_, elem) => {
          if ($(elem).is('span')) {
            data.push({
              span: true,
              href: null,
              text: $(elem).text().trim(),
            });
          } else {
            $(elem)
              .contents()
              .each((_, el) => {
                data.push({
                  span: false,
                  href: $(el).attr('href') || null,
                  text: $(el).text().trim(),
                });
              });
          }
        });
    });
    response.data = data;
  } else if (telement.type === 'schedule') {
    const data: dataLeaguesScheduleType = {
      hrefs: [],
      table: null,
    };
    $('#' + telement.id).each(async (_, element) => {
      data.table = await utilstablesscrapper($, element);
    });
    $('.filter a').each((i, element) => {
      data.hrefs.push({
        href: $(element).attr('href'),
        text: $(element).text().trim(),
      });
    });
    response.data = data;
  } else if (telement.type === 'tablep') {
    const data: dataLeaguesTablePType = { list: [], caption: '' };
    data.caption = telement.name;
    $('#' + telement.id + ' p').each((_, element) => {
      data.list.push({
        href: $('a', element).attr('href'),
        text: $(element).text().trim(),
      });
    });
    response.data = data;
  }
  return response;
}

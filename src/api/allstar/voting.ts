import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { dataTableMasType } from '../../@types/data';

export async function allstarvoting(path: string) {
  const response: responseType = {
    OK: true,
  };
  const year = path.match(/[0-9]+/g)[0];
  if (!year) {
    response.OK = false;
    return response;
  }

  if (Number(year) > 2016) {
    const data: dataTableMasType = [];
    const html = await axios.get(
      'https://www.basketball-reference.com/allstar/' +
        path.replace('.html', '') +
        '_voting-backcourt-western-conference.html',
    );
    const $ = cheerio.load(utilsreformat(html.data));
    $('.table_wrapper table').each(async (_, element) => {
      data.push(await utilstablesscrapper($, element));
    });

    const html2 = await axios.get(
      'https://www.basketball-reference.com/allstar/' +
        path.replace('.html', '') +
        '_voting-backcourt-eastern-conference.html',
    );
    const $2 = cheerio.load(utilsreformat(html2.data));
    $('.table_wrapper table').each(async (_, element) => {
      data.push(await utilstablesscrapper($2, element));
    });

    const html3 = await axios.get(
      'https://www.basketball-reference.com/allstar/' +
        path.replace('.html', '') +
        '_voting-frontcourt-western-conference.html',
    );
    const $3 = cheerio.load(utilsreformat(html3.data));
    $('.table_wrapper table').each(async (_, element) => {
      data.push(await utilstablesscrapper($3, element));
    });

    const html4 = await axios.get(
      'https://www.basketball-reference.com/allstar/' +
        path.replace('.html', '') +
        '_voting-frontcourt-eastern-conference.html',
    );
    const $4 = cheerio.load(utilsreformat(html4.data));
    $('.table_wrapper table').each(async (_, element) => {
      data.push(await utilstablesscrapper($4, element));
    });
    response.data = data;
  } else {
    const data: dataTableMasType = [];
    const html = await axios.get(
      'https://www.basketball-reference.com/allstar/' + path.replace('.html', '') + '_voting.html',
    );
    const $ = cheerio.load(utilsreformat(html.data));
    $('.data_grid_box table').each(async (_, element) => {
      data.push(await utilstablesscrapper($, element));
    });
    response.data = data;
  }
  return response;
}

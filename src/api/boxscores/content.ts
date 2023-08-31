import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { dataBoxscoresContentType } from '../../@types/data';

export async function boxscorescontent(path: string) {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/boxscores/' + path);
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataBoxscoresContentType = [];
  $('#line_score').each(async (_, element) => {
    data.push(await utilstablesscrapper($, element));
    data.at(-1).caption = $('caption', element).text().replace('Table', '').trim();
  });
  $('#four_factors').each(async (_, element) => {
    data.push(await utilstablesscrapper($, element));
    data.at(-1).caption = $('caption', element).text().replace('Table', '').trim();
  });
  $('.section_wrapper table').each(async (i, element) => {
    if (!$(element).attr('data-tip')) {
      data.push(await utilstablesscrapper($, element));
    }
  });
  response.data = data;
  return response;
}

import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataSearchType } from '../../@types/data';

export async function othersearch(key: string) {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get(
    `https://www.basketball-reference.com/search/search.fcgi?search=${key}-`,
  );
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataSearchType = [];
  $('.search-item a').each((_, element) => {
    data.push({
      type: 'link',
      href: $(element).attr('href'),
      text: $(element).text().trim(),
    });
  });
  response.data = data;
  return response;
}

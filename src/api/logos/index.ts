import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataLogosType } from '../../@types/data';

export async function logos(key: string) {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.sportslogos.net' + key.replace(/\$/g, '/'));
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataLogosType = {
    src: $('#mainLogo img').attr('src') || null,
    name: $('.logoName').text().trim(),
    desc: [],
  };
  $('.logoDescription p').each((_, element) => {
    if ($(element).text().trim().length > 0) {
      data.desc.push($(element).text().trim());
    }
  });
  response.data = data;
  return response;
}

import axios from 'axios';
import cheerio from 'cheerio';
import { utilsreformat } from '../../utils';

export async function getImages(key: string) {
  const html2 = await axios.get(`https://www.bing.com/images/search?q=${key}`);
  const $2 = cheerio.load(utilsreformat(html2.data));
  const images: string[] = [];
  $2('.iusc').each(async (i, element) => {
    images.push(JSON.parse($2(element).attr('m'))['murl']);
  });
  return images;
}

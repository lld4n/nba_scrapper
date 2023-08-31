import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataLeaguesType } from '../../@types/data';
import { LeaguesType } from '../../@types/leagues';

export async function leagueslist() {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/leagues/');
  const $ = cheerio.load(utilsreformat(html.data));
  // return utilsreformat(html.data);
  const data: dataLeaguesType = [];
  $('#stats tbody tr').each((_, element) => {
    if (!$(element).hasClass('thead')) {
      const dataBuf: LeaguesType[] = [];
      $('th, td', element).each((i, elem) => {
        if (i === 0) {
          dataBuf.push({
            type: 'season',
            text: $(elem).text().trim() || null,
            href: $('a', elem).attr('href') || null,
            num: null,
          });
        } else if (i === 2) {
          dataBuf.push({
            type: 'champ',
            text: $(elem).text().trim() || null,
            href: $('a', elem).attr('href') || null,
            num: null,
          });
        } else if (i === 3) {
          dataBuf.push({
            type: 'mvp',
            text: $(elem).text().trim() || null,
            href: $('a', elem).attr('href') || null,
            num: null,
          });
        } else if (i === 4) {
          dataBuf.push({
            type: 'rookie',
            text: $(elem).text().trim() || null,
            href: $('a', elem).attr('href') || null,
            num: null,
          });
        } else if (i === 5) {
          dataBuf.push({
            type: 'points',
            text:
              $(elem)
                .text()
                .replace(/\([0-9\.]*\)/g, '')
                .trim() || null,
            href: $('a', elem).attr('href') || null,
            num:
              Number(
                $(elem)
                  .text()
                  .trim()
                  .match(/\([0-9\.]*\)/g)?.[0]
                  .replace(/\(/g, '')
                  .replace(/\)/g, ''),
              ) || null,
          });
        } else if (i === 6) {
          dataBuf.push({
            type: 'rebounds',
            text:
              $(elem)
                .text()
                .replace(/\([0-9\.]*\)/g, '')
                .trim() || null,
            href: $('a', elem).attr('href') || null,
            num:
              Number(
                $(elem)
                  .text()
                  .trim()
                  .match(/\([0-9\.]*\)/g)?.[0]
                  .replace(/\(/g, '')
                  .replace(/\)/g, ''),
              ) || null,
          });
        } else if (i === 7) {
          dataBuf.push({
            type: 'assists',
            text:
              $(elem)
                .text()
                .replace(/\([0-9\.]*\)/g, '')
                .trim() || null,
            href: $('a', elem).attr('href') || null,
            num:
              Number(
                $(elem)
                  .text()
                  .trim()
                  .match(/\([0-9\.]*\)/g)?.[0]
                  .replace(/\(/g, '')
                  .replace(/\)/g, ''),
              ) || null,
          });
        } else if (i === 8) {
          dataBuf.push({
            type: 'shares',
            text:
              $(elem)
                .text()
                .replace(/\([0-9\.]*\)/g, '')
                .trim() || null,
            href: $('a', elem).attr('href') || null,
            num:
              Number(
                $(elem)
                  .text()
                  .trim()
                  .match(/\([0-9\.]*\)/g)?.[0]
                  .replace(/\(/g, '')
                  .replace(/\)/g, ''),
              ) || null,
          });
        }
      });
      data.push(dataBuf);
    }
  });
  response.data = data;
  return response;
}

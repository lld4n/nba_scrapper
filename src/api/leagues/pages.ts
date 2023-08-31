import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { dataLeaguesRecordType, dataTableType } from '../../@types/data';
import { masleaguespages } from '../../mas';
import { LeaguesRecordType } from '../../@types/leaguesrecord';

export async function leaguespages(path: string) {
  const response: responseType = {
    OK: true,
  };
  const telement = masleaguespages.find((el) => el.link === path);
  if (!telement) {
    response.OK = false;
    return response;
  }
  const html = await axios.get('https://www.basketball-reference.com/leagues/' + path);
  const $ = cheerio.load(utilsreformat(html.data));
  // return utilsreformat(html.data);
  if (telement.type === 'table') {
    const data: dataTableType = {
      heading: null,
      table: null,
    };
    $('#' + telement.id).each(async (_, element) => {
      data.table = await utilstablesscrapper($, element);
      data.table.caption = telement.name;
    });
    response.data = data;
  } else if (telement.type === 'record') {
    const data: dataLeaguesRecordType = [];
    $('#' + telement.id + ' tbody tr').each((_, element) => {
      const dataBuf: LeaguesRecordType[] = [];
      $('th, td', element).each((i, elem) => {
        if (i === 0) {
          dataBuf.push({
            type: 'hashtag',
            text: $(elem).text().trim(),
            hrefs: null,
          });
        } else if (i === 1) {
          dataBuf.push({
            type: 'wins',
            text: $(elem).text().trim(),
            hrefs: null,
          });
        } else if (i === 2) {
          dataBuf.push({
            type: 'loses',
            text: $(elem).text().trim(),
            hrefs: null,
          });
        } else if (i === 3) {
          const hrefs: {
            href: string;
            text: string;
          }[] = [];
          $('a', elem).each((_, e) => {
            hrefs.push({
              href: $(e).attr('href'),
              text: $(e).text().trim(),
            });
          });
          dataBuf.push({
            type: 'teams',
            text: $(elem).text().trim().includes('Record') ? $(elem).text().trim() : null,
            hrefs: hrefs.length > 0 ? hrefs : null,
          });
        }
      });
      data.push(dataBuf);
    });
    response.data = data;
  }
  return response;
}

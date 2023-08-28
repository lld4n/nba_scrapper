import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataActualSeasonType } from '../../@types/data';
import { ActualSeasonConferenceType } from '../../@types/actualseason';

export async function otheractualseason() {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/');
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataActualSeasonType = {
    east: [],
    west: [],
  };
  $('#confs_standings_E tbody tr').each((_, element) => {
    const dataRow: ActualSeasonConferenceType[] = [];
    $('th, td', element).each((index, elem) => {
      if (index === 0) {
        dataRow.push({
          type: 'link',
          href: null,
          text: $(elem).text().trim(),
        });
      } else if (index === 1) {
        dataRow[0].href = $('a', elem).attr('href');
      } else if (index === 3) {
        dataRow.push({
          type: 'wins',
          href: null,
          text: $(elem).text().trim(),
        });
      } else if (index === 4) {
        dataRow.push({
          type: 'loses',
          href: null,
          text: $(elem).text().trim(),
        });
      }
    });
    data.east.push(dataRow);
  });
  $('#confs_standings_W tbody tr').each((_, element) => {
    const dataRow: ActualSeasonConferenceType[] = [];
    $('th, td', element).each((index, elem) => {
      if (index === 0) {
        dataRow.push({
          type: 'link',
          href: null,
          text: $(elem).text().trim(),
        });
      } else if (index === 1) {
        dataRow[0].href = $('a', elem).attr('href');
      } else if (index === 3) {
        dataRow.push({
          type: 'wins',
          href: null,
          text: $(elem).text().trim(),
        });
      } else if (index === 4) {
        dataRow.push({
          type: 'loses',
          href: null,
          text: $(elem).text().trim(),
        });
      }
    });
    data.west.push(dataRow);
  });
  response.data = data;
  return response;
}

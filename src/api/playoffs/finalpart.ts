import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataPlayoffsFinalPartType } from '../../@types/data';

export async function playoffsfinalpart() {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/playoffs/');
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataPlayoffsFinalPartType = [];
  $('#champions_index tbody tr').each((_, element) => {
    if (!$(element).hasClass('thead')) {
      const re: string[] = [];
      $('th, td', element).each((i, elem) => {
        if (i === 0) {
          re.push($(elem).text().trim());
        } else if (i === 2) {
          re.push($(elem).text().trim());
        } else if (i === 3) {
          re.push($(elem).text().trim());
        }
      });
      const f1 = data.findIndex((el) => el.team === re[1]);
      const f2 = data.findIndex((el) => el.team === re[2]);
      if (f1 === -1) {
        data.push({
          team: re[1],
          win: [Number(re[0])],
          lose: [],
        });
      } else {
        data[f1].win.push(Number(re[0]));
      }
      if (f2 === -1) {
        data.push({
          team: re[2],
          win: [],
          lose: [Number(re[0])],
        });
      } else {
        data[f2].lose.push(Number(re[0]));
      }
    }
  });
  response.data = data;
  return response;
}

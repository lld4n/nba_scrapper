import cheerio from 'cheerio';
import axios from 'axios';
import { utilsalphabets, utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataPlayersShootingType } from '../../@types/data';
import { utilstablesscrapper } from '../../utils/utilstablesscrapper';
import { TableHeadersType } from '../../@types/table';
import { utilsdatems } from '../../utils/utilsdatems';

const headersbuffer: TableHeadersType[] = [
  { text: 'Split', tip: null, colspan: null },
  { text: 'Value', tip: null, colspan: null },
  { text: 'FG', tip: 'Field Goals', colspan: null },
  { text: 'FGA', tip: 'Field Goal Attempts', colspan: null },
  { text: 'FG%', tip: 'Field Goal Percentage', colspan: null },
  { text: '3P', tip: '3-Point Field Goals', colspan: null },
  { text: '3PA', tip: '3-Point Field Goal Attempts', colspan: null },
  { text: '3P%', tip: '3-Point Field Goal Percentage', colspan: null },
  {
    text: 'eFG%',
    tip: '<strong>Effective Field Goal Percentage</strong><br>This statistic adjusts for the fact that a 3-point field goal is worth one more point than a 2-point field goal.',
    colspan: null,
  },
  { text: `Ast'd`, tip: 'Assisted field goals', colspan: null },
  { text: `%Ast'd`, tip: 'Percentage of field goals that were assisted', colspan: null },
];

export async function playersshooting(alphabet: string, path: string, key: string) {
  const response: responseType = {
    OK: true,
  };
  let url = 'https://www.basketball-reference.com/players/';
  if (alphabet.includes('shooting')) {
    url += alphabet.replace('$', '?');
  } else {
    if (!utilsalphabets.includes(alphabet.toUpperCase())) {
      response.OK = false;
      return response;
    } else {
      url += alphabet + '/' + path.replace('.html', '') + '/shooting/' + key;
    }
  }

  const html = await axios.get(url);
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataPlayersShootingType = {
    table: null,
    chart: [],
    text: null,
  };
  // return utilsreformat(html.data);
  $('#shooting').each(async (_, element) => {
    data.table = await utilstablesscrapper($, element);
    data.table.caption = $('caption', element).text().replace('Table', '').trim();
    if (!data.table.headers) {
      data.table.headers = [headersbuffer];
    }
  });
  $('#shot-wrapper .shot-area div').each((_, element) => {
    const tip = $(element).attr('tip');
    let coor: {
      left: number;
      top: number;
    } = JSON.parse(
      '{' +
        $(element)
          .attr('style')
          .split(';')
          .splice(0, 2)
          .map((el) => {
            let bufff = el.split(':');
            bufff[0] = `"` + bufff[0] + `"`;
            bufff[1] = bufff[1].replace('px', '');
            return bufff.join(':');
          })
          .join(',') +
        '}',
    );
    data.chart.push({
      xpercent: Math.floor(((coor.left + 6) / 500) * 100),
      ypercent: Math.floor(((coor.top + 6) / 472) * 100),
      tip,
      type: $(element).hasClass('make') ? 'make' : 'miss',
      date: utilsdatems(
        tip.split('<br>')[0].split(', ')[0].split(' ')[0],
        tip.split('<br>')[0].split(', ')[0].split(' ')[1],
        tip.split('<br>')[0].split(', ')[1],
      ),
      vs: tip.split('<br>')[0].split(',')[2].trim(),
      time: tip.split('<br>')[1].trim(),
      info: tip.split('<br>')[2].trim(),
      check: tip.split('<br>')[3].trim(),
    });
    data.chart.sort((a, b) => a.date - b.date);
  });
  data.text = $('#content strong')
    .eq(0)
    .text()
    .replace('(Reset all: [X])', '')
    .replace(/\[X\]/g, '')
    .replace(/ ,/g, ',')
    .trim();
  response.data = data;
  return response;
}

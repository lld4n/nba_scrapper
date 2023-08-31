import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { dataBoxscoresShotChartType } from '../../@types/data';
import { TableHeadersType } from '../../@types/table';
import { ShotChartType } from '../../@types/shotchart';

const header: TableHeadersType[][] = [
  [
    { text: 'Qtr', tip: null, colspan: null },
    { text: 'FG', tip: null, colspan: null },
    { text: 'FGA', tip: null, colspan: null },
    { text: 'FG%', tip: null, colspan: null },
    { text: '2P', tip: null, colspan: null },
    { text: '2PA', tip: null, colspan: null },
    { text: '2P%', tip: null, colspan: null },
    { text: '3P', tip: null, colspan: null },
    { text: '3PA', tip: null, colspan: null },
    { text: '3P%', tip: null, colspan: null },
    { text: 'eFG%', tip: null, colspan: null },
    { text: `Ast'd`, tip: null, colspan: null },
    { text: `%Ast'd`, tip: null, colspan: null },
  ],
];

export async function boxscoresshotchart(path: string) {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/boxscores/shot-chart/' + path);
  const $ = cheerio.load(utilsreformat(html.data));
  // return utilsreformat(html.data);
  const data: dataBoxscoresShotChartType = [];
  $('.stats_table').each(async (index, element) => {
    let shotchart: ShotChartType = {
      table: null,
      chart: [],
    };
    shotchart.table = await utilstablesscrapper($, element);
    shotchart.table.headers = header;
    $('.shot-area').each((i, element) => {
      if (i === index) {
        $('div', element).each((_, elem) => {
          const tip = $(elem).attr('tip');
          const coor = JSON.parse(
            '{' +
              $(elem)
                .attr('style')
                .replace(/\;/g, ',')
                .replace(/px/g, '')
                .replace(`top`, `"top"`)
                .replace(`left`, `"left"`) +
              `"q": 0}`,
          );
          shotchart.chart.push({
            xpercent: Math.floor(((coor.left + 6) / 500) * 100),
            ypercent: Math.floor(((coor.top + 6) / 472) * 100),
            tip,
            type: $(elem).hasClass('make') ? 'make' : 'miss',
            quarter: tip.split('<br>')[0].split(',')[0],
            player: tip.split('<br>')[1].split(' ')[0] + ' ' + tip.split('<br>')[1].split(' ')[1],
            time: tip.split('<br>')[0],
            res: tip.split('<br>')[1],
            command: tip.split('<br>')[2],
          });
        });
      }
    });
    data.push(shotchart);
  });

  response.data = data;
  return response;
}

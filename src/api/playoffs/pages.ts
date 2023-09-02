import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { dataPlayoffsPagesType } from '../../@types/data';
import { masplayoffsfinals } from '../../mas';

export async function playoffspages(path: string) {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/playoffs/' + path);
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataPlayoffsPagesType = {
    finalimg: null,
    gamesmini: [],
    tables: [],
  };

  masplayoffsfinals.map((el) => {
    if ($('h1').text().trim().includes(el.title)) {
      data.finalimg = el.link;
    }
  });
  if (!data.finalimg && $('h1').text().trim().includes('Finals')) {
    data.finalimg =
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/NBA_Finals_logo_%282022%29.svg/1200px-NBA_Finals_logo_%282022%29.svg.png';
  } else if (!$('h1').text().trim().includes('Finals')) {
    data.finalimg = null;
  }
  $('.game_summary').each((_, element) => {
    let href = '';
    $('a', element).each((_, e) => {
      if ($(e).attr('href').includes('boxscores')) {
        href = $(e).attr('href');
      }
    });
    data.gamesmini.push({
      loser: {
        teamhref: $('.loser a', element).eq(0).attr('href'),
        teamtext: $('.loser td', element).eq(0).text().trim(),
        score: $('.loser td', element).eq(1).text().trim(),
      },
      winner: {
        teamhref: $('.winner a', element).eq(0).attr('href'),
        teamtext: $('.winner td', element).eq(0).text().trim(),
        score: $('.winner td', element).eq(1).text().trim(),
      },
      hrefboxscores: href,
      date: $('.teams .date', element).text().trim(),
      current: false,
    });
  });
  $('.stats_table').each(async (_, element) => {
    if ($(element).attr('id') !== 'all_playoffs') {
      data.tables.push(await utilstablesscrapper($, element));
    }
  });
  response.data = data;
  return response;
}

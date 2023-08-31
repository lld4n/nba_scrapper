import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { dataBoxscoresInfoType } from '../../@types/data';
import { GamesType } from '../../@types/games';

export async function boxscoresinfo(path: string) {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get(
    'https://www.basketball-reference.com/boxscores/?' + path.replace(/\$/g, '&'),
  );
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataBoxscoresInfoType = {
    games: [],
    curdate: $('h1').text().replace('NBA Games Played on ', '').trim(),
    prev: {
      href: $('.prevnext a')
        .eq(0)
        .attr('href')
        .replace('/boxscores/?', '/boxscores/info/')
        .replace(/\&/g, '$'),
      text: $('.prevnext a').eq(0).text().trim(),
    },
    next: {
      href: $('.prevnext a')
        .eq(1)
        .attr('href')
        .replace('/boxscores/?', '/boxscores/info/')
        .replace(/\&/g, '$'),
      text: $('.prevnext a').eq(1).text().trim(),
    },
    east: {
      table: null,
    },
    west: {
      table: null,
    },
  };
  $('#confs_standings_E').each(async (_, element) => {
    data.east.table = await utilstablesscrapper($, element);
    data.east.table.caption = 'Восточная конференция';
  });
  $('#confs_standings_W').each(async (_, element) => {
    data.west.table = await utilstablesscrapper($, element);
    data.west.table.caption = 'Западная конференция';
  });
  $('.game_summary').each((_, element) => {
    let buf: string = '';
    $('a', element).each((_, elem) => {
      buf += $(elem).attr('href');
    });
    const dataGame: GamesType = {
      loser: {
        teamhref: $('.loser td a', element).eq(0).attr('href'),
        teamtext: $('.loser td a', element).eq(0).text().trim(),
        score: $('.loser td', element).eq(1).text().trim(),
      },
      winner: {
        teamhref: $('.winner td a', element).eq(0).attr('href'),
        teamtext: $('.winner td a', element).eq(0).text().trim(),
        score: $('.winner td', element).eq(1).text().trim(),
      },
      hrefboxscores: buf.match(/\/boxscores\/[a-zA-Z0-9]*\.html/g)[0],
      table: null,
    };
    $('table', element).each(async (i, e) => {
      if (i === 1) {
        dataGame.table = await utilstablesscrapper($, e);
        dataGame.table.caption = 'Результаты по четвертям';
      }
    });
    data.games.push(dataGame);
  });
  response.data = data;
  return response;
}

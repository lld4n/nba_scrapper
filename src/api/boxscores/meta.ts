import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataBoxscoresMetaType } from '../../@types/data';

export async function boxscoresmeta(path: string) {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/boxscores/' + path);
  const $ = cheerio.load(utilsreformat(html.data));
  // return utilsreformat(html.data);
  const data: dataBoxscoresMetaType = {
    hrefs: [],
    gamesmini: [],
    gamestitle: $('#div_other_scores h2').text().replace('Series Summary', '').trim(),
    date: [
      $('.scorebox .scorebox_meta div').eq(0).text().trim().split(',')[1],
      $('.scorebox .scorebox_meta div').eq(0).text().trim().split(',')[2],
    ]
      .join(',')
      .trim(),
    arena: $('.scorebox .scorebox_meta div').eq(1).text().trim(),
    exactdate: $('.scorebox .scorebox_meta div').eq(0).text().trim(),
    opponents: [],
  };
  $('.game_summary').each((_, element) => {
    let buf = '';
    $('a', element).each((_, elem) => {
      buf += $(elem).attr('href');
    });
    data.gamesmini.push({
      loser: {
        teamhref: $('.loser td a', element).eq(0).attr('href'),
        teamtext: $('.loser td', element).eq(0).text().trim(),
        score: $('.loser td', element).eq(1).text().trim(),
      },
      winner: {
        teamhref: $('.winner td a', element).eq(0).attr('href'),
        teamtext: $('.winner td', element).eq(0).text().trim(),
        score: $('.winner td', element).eq(1).text().trim(),
      },
      hrefboxscores: buf.match(/\/boxscores\/[a-zA-Z0-9]*\.html/g)[0],
      date: $('.date').text().trim() || null,
      current: $(element).hasClass('current'),
    });
  });
  $('.scorebox')
    .eq(0)
    .contents()
    .each((i, el) => {
      if (i === 1 || i === 3) {
        data.opponents.push({
          imgbuf: $('img', el).attr('src'),
          href: $('strong a', el).attr('href'),
          command: $('strong a', el).text().trim(),
          score: $('.scores', el).text().trim(),
          hrefprev: $('.prev', el).eq(0).attr('href') || null,
          hrefnext: $('.next', el).eq(0).attr('href') || null,
        });
      }
    });
  $('.filter a').each((_, element) => {
    if ($(element).attr('href')) {
      data.hrefs.push($(element).attr('href'));
    }
  });
  response.data = data;
  return response;
}

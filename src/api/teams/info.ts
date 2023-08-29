import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { dataTeamsInfoType } from '../../@types/data';

export async function teamsinfo(key: string) {
  const response: responseType = {
    OK: true,
  };

  const html = await axios.get('https://www.basketball-reference.com/teams/' + key);
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataTeamsInfoType = {
    title: $('h1').text().trim(),
    key,
    imgbuffer: $('.teamlogo').attr('src'),
    bio: [],
    players: [],
    table: null,
    links: [],
  };
  $('#' + key).each(async (_, element) => {
    data.table = await utilstablesscrapper($, element);
    data.table.caption = key;
  });
  $('#div_teams_ws_images a').each(async (_, element) => {
    const tip = $('img', element).attr('data-tip').split(' ');
    data.players.push({
      name: [tip[1], tip[2]].join(' '),
      ws: [tip[3], tip[4]].join(' '),
      imgbuffer: $('img', element).attr('src'),
      href: $(element).attr('href'),
      image: null,
    });
  });
  $('#meta div')
    .eq(1)
    .each((_, element) => {
      $('p', element)
        .contents()
        .each((_, elem) => {
          if ($(elem).text().trim()) {
            data.bio.push({
              type: $(elem).is('strong') ? 'bold' : 'text',
              text: $(elem).text().replace(':', '').trim(),
            });
          }
        });
    });
  $('#bottom_nav li').each((_, element) => {
    data.links.push($('a', element).attr('href'));
  });
  response.data = data;
  return response;
}

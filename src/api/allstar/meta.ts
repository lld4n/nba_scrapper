import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataAllStarMetaType } from '../../@types/data';
import { masallstarlogos } from '../../mas';

export async function allstarmeta(path: string) {
  const response: responseType = {
    OK: true,
  };
  const year = path.match(/[0-9]+/g)[0];
  if (!year) {
    response.OK = false;
    return response;
  }
  const logo = masallstarlogos.find((el) => el.title === year);
  const html = await axios.get('https://www.basketball-reference.com/allstar/' + path);
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataAllStarMetaType = {
    img: logo
      ? logo.link
      : 'https://content.sportslogos.net/logos/6/980/full/4585__nba_all-star_game-secondary-2021.png',
    year,
    content: [],
  };
  $('#meta p').each((_, element) => {
    $(element)
      .contents()
      .each((_, elem) => {
        data.content.push({
          text: $(elem).text().replace(':', '').trim(),
          href: $(elem).attr('href') || null,
          bold: $(elem).is('strong'),
        });
      });
  });
  response.data = data;
  return response;
}

import cheerio from 'cheerio';
import axios from 'axios';
import { utilsalphabets, utilsplayerstables, utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataPlayersInfoType } from '../../@types/data';

export async function playersinfo(alphabet: string, path: string) {
  const response: responseType = {
    OK: true,
  };
  if (!utilsalphabets.includes(alphabet.toUpperCase())) {
    response.OK = false;
    return response;
  }
  const html = await axios.get(
    'https://www.basketball-reference.com/players/' + alphabet + '/' + path,
  );
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataPlayersInfoType = {
    title: $('h1').text().trim(),
    stats: [],
    images: [],
    jersies: [],
    socials: [],
    bio: [],
    keys: [],
  };
  $('.stats_pullout div div').each((_, element) => {
    const statsColumn: string[] = [];
    $(element)
      .contents()
      .each((_, elem) => {
        if ($(elem).text().trim().length > 0) {
          statsColumn.push($(elem).text().trim());
        }
      });
    data.stats.push(statsColumn);
  });
  $('.uni_holder a').each((_, element) => {
    data.jersies.push({
      number: $(element).text().trim(),
      command: $(element).attr('data-tip')?.split(',')[0].trim(),
      date: $(element).attr('data-tip')?.split(',')[1].trim(),
    });
  });
  $('#meta p').each((_, element) => {
    $(element)
      .contents()
      .each((_, elem) => {
        if ($(elem).is('a')) {
          if ($(elem).attr('href').includes('twitter.com')) {
            data.socials.push({
              type: 'twitter',
              href: $(elem).attr('href'),
            });
          } else if ($(elem).attr('href').includes('instagram.com')) {
            data.socials.push({
              type: 'instagram',
              href: $(elem).attr('href'),
            });
          } else {
            if (!$(elem).text().includes('Twitter')) {
              data.bio.push({
                type: 'text',
                text: $(elem).text().replace('▪', '').replace(':', '').replace(',', '').trim(),
              });
            }
          }
        } else if (
          $(elem).text().replace('▪', '').replace(':', '').replace(',', '').trim().length > 0 &&
          !$(elem).hasClass('f-i')
        ) {
          data.bio.push({
            type: $(elem).is('strong') ? 'bold' : 'text',
            text: $(elem).text().replace('▪', '').replace(':', '').replace(',', '').trim(),
          });
        }
      });
  });
  utilsplayerstables.map((el) => {
    if ($('#' + el.id).html()) {
      data.keys.push(el);
    }
  });

  const html2 = await axios.get(
    `https://www.bing.com/images/search?q=${data.title.split(' ').join('+')}`,
  );
  const $2 = cheerio.load(utilsreformat(html2.data));
  $2('.iusc').each(async (i, element) => {
    data.images.push(JSON.parse($(element).attr('m'))['murl']);
  });

  const html3 = await axios.get(
    `https://en.wikipedia.org/w/index.php?fulltext=1&search=${data.title
      .split(' ')
      .join('+')}&ns0=1`,
  );
  const $3 = cheerio.load(utilsreformat(html3.data));
  const url = $3('.mw-search-result-heading a').eq(0).attr('href');
  data.socials.push({
    type: 'wikipedia',
    href: `https://en.wikipedia.org${url}`,
  });

  response.data = data;
  return response;
}

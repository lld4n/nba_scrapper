import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataPlayoffsMetaType } from '../../@types/data';

export async function playoffsmeta(path: string) {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/playoffs/' + path + '.html');
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataPlayoffsMetaType = {
    heading: $('h1').text().trim(),
    content: [],
  };
  $('#meta div')
    .eq(1)
    .each((_, element) => {
      $('p', element).each((_, elem) => {
        $(elem)
          .contents()
          .each((_, el) => {
            if ($(el).text().replace(':', '').trim()) {
              data.content.push({
                text: $(el).text().replace(':', '').trim(),
                href: $(el).attr('href') || null,
                bold: $(el).is('strong'),
              });
            }
          });
      });
    });
  response.data = data;
  return response;
}

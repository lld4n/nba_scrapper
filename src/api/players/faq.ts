import cheerio from 'cheerio';
import axios from 'axios';
import { utilsalphabets, utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataPlayersContractType, dataPlayersFAQType } from '../../@types/data';

export async function playersfaq(alphabet: string, path: string) {
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
  if (!$('#div_faq').html()) {
    response.OK = false;
    return response;
  }
  const data: dataPlayersFAQType = [];
  $('#div_faq')
    .contents()
    .each((_, element) => {
      if ($(element).is('h3')) {
        data.push({
          type: 'h3',
          text: $(element).text().trim(),
          href: null,
        });
      } else {
        $(element)
          .contents()
          .each((_, elem) => {
            data.push({
              type: 'text',
              text: $(elem).text().trim(),
              href: $(elem).attr('href') || null,
            });
          });
      }
    });
  response.data = data;
  return response;
}

import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat } from '../../utils';
import { mascommands } from '../../mas';
import { responseType } from '../../@types/response';
import { dataTeamsLogosType } from '../../@types/data';
import { TeamsLogosElementType } from '../../@types/logos';

export async function teamslogos(key: string) {
  const response: responseType = {
    OK: true,
  };
  if (!mascommands.find((el) => el.id === key)) {
    response.OK = false;
    return response;
  }
  const html = await axios.get(mascommands.find((el) => el.id === key).urllogo);
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataTeamsLogosType = [];
  $('.content .section').each((_, element) => {
    let dataElement: TeamsLogosElementType = {
      title: $('.browseHeading', element).text().trim(),
      elements: [],
    };
    $('a', element).each(async (_, elem) => {
      dataElement.elements.push({
        link: $(elem).attr('href')?.replace(/\//g, '$'),
        caption: $(elem).text().trim(),
        imagebuf: $('img', elem).attr('src'),
      });
    });
    data.push(dataElement);
  });
  response.data = data;
  return response;
}

import cheerio from 'cheerio';
import axios from 'axios';
import { utilsalphabets, utilsplayerstables, utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataPlayersPagesType } from '../../@types/data';
import { utilstablesscrapper } from '../../utils/utilstablesscrapper';

export async function playerspages(alphabet: string, path: string, key: string) {
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
  if (!$('#' + key).html()) {
    response.OK = false;
    return response;
  }
  const data: dataPlayersPagesType = {
    table: {
      caption: '',
      headers: [],
      body: [],
      foot: [],
    },
  };
  $('#' + key).each(async (_, element) => {
    data.table = await utilstablesscrapper($, element);
    data.table.caption = utilsplayerstables.find((el) => el.id === key).text;
  });
  response.data = data;
  return response;
}

import cheerio from 'cheerio';
import axios from 'axios';
import { utilsalphabets, utilsgridscrapper, utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataGridType } from '../../@types/data';

export async function playersawards(alphabet: string, path: string) {
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
  if (!$('#div_leaderboard').html()) {
    response.OK = false;
    return response;
  }
  const data: dataGridType = { caption: '', grid: null };
  $('#div_leaderboard').each(async (_, element) => {
    data.grid = await utilsgridscrapper($, element);
    data.caption = 'Появление в списках лидеров, награды и почетные звания';
  });
  response.data = data;
  return response;
}

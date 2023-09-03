import cheerio from 'cheerio';
import axios from 'axios';
import { utilsgridscrapper, utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataGridType } from '../../@types/data';

export async function allstarleadersingle() {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/allstar/leaders_game.html');
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataGridType = {
    grid: null,
    caption: 'Лидеры по количеству игр',
  };
  $('#div_single-game-leaders').each(async (_, element) => {
    data.grid = await utilsgridscrapper($, element);
  });
  response.data = data;
  return response;
}

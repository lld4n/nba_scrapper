import cheerio from 'cheerio';
import axios from 'axios';
import { utilsalphabets, utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataPlayersAwardsType } from '../../@types/data';
import { PlayersAwardsType } from '../../@types/playersawards';

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
  const data: dataPlayersAwardsType = [];
  $('#div_leaderboard div').each((_, element) => {
    const dataBuf: {
      caption: string;
      rows: PlayersAwardsType[][];
    } = {
      caption: $('caption', element).text().trim(),
      rows: [],
    };
    $('td', element).each((_, elem) => {
      const dataBuf2: PlayersAwardsType[] = [];
      const bold = Boolean($('strong', elem).html());
      $(elem)
        .contents()
        .each((_, e) => {
          dataBuf2.push({
            bold,
            text: $(e).text().trim(),
            href: $(e).attr('href') || null,
          });
        });
      $('strong', elem)
        .contents()
        .each((_, e) => {
          dataBuf2.push({
            bold,
            text: $(e).text().trim(),
            href: $(e).attr('href') || null,
          });
        });
      dataBuf.rows.push(dataBuf2);
    });
    data.push(dataBuf);
  });

  response.data = data;
  return response;
}

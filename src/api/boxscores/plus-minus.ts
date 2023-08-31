import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataBoxscoresPlusMinusType } from '../../@types/data';
import { PlusMinusRowType, PlusMinusType } from '../../@types/plusminus';

export async function boxscoresplusminus(path: string) {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/boxscores/plus-minus/' + path);
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataBoxscoresPlusMinusType = {
    header: [],
    opponents: [],
  };
  $('.plusminus .header')
    .eq(0)
    .contents()
    .each((_, element) => {
      if ($(element).text().trim()) {
        data.header.push({
          text: $(element).text().trim(),
          widthper: Math.floor(
            (Number(
              $(element)
                .attr('style')
                ?.match(/[0-9]+/g)[0],
            ) /
              1000) *
              100,
          ),
        });
      }
    });
  $('.plusminus div div').each((_, element) => {
    if ($('h3', element).text().trim()) {
      let dataBuf: PlusMinusType = {
        heading: $('h3', element).text().trim(),
        list: [],
      };
      $('div', element).each((_, elem) => {
        if ($(elem).hasClass('player-plusminus')) {
          const dataBuf2: PlusMinusRowType = {
            type: 'plusminus',
            row: [],
            text: null,
          };
          $(elem)
            .contents()
            .each((_, el) => {
              if (
                Math.floor(
                  (Number(
                    $(el)
                      .attr('style')
                      ?.match(/[0-9]+/g)[0],
                  ) /
                    1000) *
                    100,
                )
              ) {
                dataBuf2.row.push({
                  type: $(el).hasClass('plus')
                    ? 'plus'
                    : $(el).hasClass('minus')
                    ? 'minus'
                    : 'even',
                  text: $(el).text().trim(),
                  widthper: Math.floor(
                    (Number(
                      $(el)
                        .attr('style')
                        ?.match(/[0-9]+/g)[0],
                    ) /
                      1000) *
                      100,
                  ),
                });
              }
            });
          dataBuf.list.push(dataBuf2);
        } else if ($(elem).hasClass('player')) {
          const dataBuf2: PlusMinusRowType = {
            type: 'player',
            row: null,
            text: $(elem).text().trim(),
          };
          dataBuf.list.push(dataBuf2);
        }
      });
      data.opponents.push(dataBuf);
    }
  });
  response.data = data;
  return response;
}

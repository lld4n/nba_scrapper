import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { dataBoxscoresPBPType } from '../../@types/data';
import { PBPELementType, PBPElementContentsType, PBPRowType } from '../../@types/pbp';

export async function boxscorespbp(path: string) {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get('https://www.basketball-reference.com/boxscores/pbp/' + path);
  const $ = cheerio.load(utilsreformat(html.data));
  const data: dataBoxscoresPBPType = {
    summary: [],
    pbp: [],
  };
  $('.stats_table').each(async (_, element) => {
    data.summary.push(await utilstablesscrapper($, element));
    data.summary.at(-1).caption = $('.thead', element).text().trim();
  });
  $('#pbp tr').each((_, element) => {
    const pbpRow: PBPRowType = {
      row: [],
      thead: $(element).hasClass('thead'),
    };
    $('th, td', element).each((_, elem) => {
      const pbpElement: PBPELementType = {
        contents: [],
        colspan: $(elem).attr('colspan') || null,
        scorebool: $(elem).hasClass('bbr-play-score'),
        tiebool: $(elem).hasClass('bbr-play-tie'),
        leadchangebool: $(elem).hasClass('bbr-play-leadchange'),
      };
      $(elem)
        .contents()
        .each((_, el) => {
          const pbpElementContents: PBPElementContentsType[] = [];
          pbpElementContents.push({
            text: $(el).text().trim(),
            href: $(el).attr('href') || null,
          });
          pbpElement.contents = pbpElementContents;
        });
      pbpRow.row.push(pbpElement);
    });
    data.pbp.push(pbpRow);
  });
  response.data = data;
  return response;
}

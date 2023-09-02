import cheerio from 'cheerio';
import axios from 'axios';
import { utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { dataCoachesTableType, dataTableType } from '../../@types/data';

export async function coacheslist(path: string) {
  const response: responseType = {
    OK: true,
  };
  const html = await axios.get(
    'https://www.basketball-reference.com/coaches/' + path.replace('$', ''),
  );
  const $ = cheerio.load(utilsreformat(html.data));

  if ($('#coaches').html()) {
    const data: dataTableType = {
      heading: '',
      table: null,
    };
    $('#coaches').each(async (_, element) => {
      data.table = await utilstablesscrapper($, element);
    });
    response.data = data;
  } else {
    const data: dataCoachesTableType = {
      tables: [],
      transactions: [],
    };
    $('#coach-stats').each(async (_, element) => {
      data.tables.push(await utilstablesscrapper($, element));
    });
    $('#coach-awards').each(async (_, element) => {
      data.tables.push(await utilstablesscrapper($, element));
    });
    $('#coach-of-the-year-voting').each(async (_, element) => {
      data.tables.push(await utilstablesscrapper($, element));
    });
    $('#div_coach-transactions p').each((_, element) => {
      $(element)
        .contents()
        .each((_, elem) => {
          data.transactions.push({
            text: $(elem).text().replace(':', '').trim(),
            href: $(elem).attr('href') || null,
            bold: $(elem).is('strong'),
          });
        });
    });
    response.data = data;
  }

  return response;
}

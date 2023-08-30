import cheerio from 'cheerio';
import axios from 'axios';
import { utilsgridscrapper, utilsreformat, utilstablesscrapper } from '../../utils';
import { masalphabet } from '../../mas';
import { responseType } from '../../@types/response';
import {
  dataGridType,
  dataPlayersContractType,
  dataPlayersFAQType,
  dataPlayersTransactionsType,
  dataTableType,
} from '../../@types/data';
import { masplayers } from '../../mas';

export async function playerspages(alphabet: string, path: string, key: string) {
  const response: responseType = {
    OK: true,
  };
  if (!masalphabet.includes(alphabet.toUpperCase())) {
    response.OK = false;
    return response;
  }
  const html = await axios.get(
    'https://www.basketball-reference.com/players/' + alphabet + '/' + path,
  );
  const $ = cheerio.load(utilsreformat(html.data));
  const e = masplayers.find((el) => el.link === key);
  if (!$('#' + e.id).html()) {
    response.OK = false;
    return response;
  }
  if (e.type === 'table') {
    const data: dataTableType = {
      heading: e.heading,
      table: null,
    };
    $('#' + e.id).each(async (_, element) => {
      data.table = await utilstablesscrapper($, element);
      data.table.caption = e.name;
    });
    response.data = data;
  } else if (e.type === 'grid') {
    const data: dataGridType = {
      grid: null,
      caption: e.name,
    };
    $('#' + e.id).each(async (_, element) => {
      data.grid = await utilsgridscrapper($, element);
    });
    response.data = data;
  } else if (e.type === 'transactions') {
    const data: dataPlayersTransactionsType = [];
    $('#div_transactions p').each((_, element) => {
      $(element)
        .contents()
        .each((_, elem) => {
          data.push({
            bold: $(elem).is('strong'),
            text: $(elem).text().replace(':', '').trim(),
            href: $(elem).attr('href') || null,
          });
        });
    });
    response.data = data;
  } else if (e.type === 'contract') {
    const data: dataPlayersContractType = {
      contracts: [],
      bullets: [],
    };
    $('#div_contract .thead th').each((i, element) => {
      data.contracts.push({
        key: $(element).text().trim(),
        value: '',
      });
    });
    $('#div_contract tbody td').each((i, element) => {
      data.contracts[i].value = $(element).text().trim();
    });
    $('#div_contract .bullets li').each((_, element) => {
      data.bullets.push($(element).text().trim());
    });
    response.data = data;
  } else if (e.type === 'faq') {
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
  }
  return response;
}

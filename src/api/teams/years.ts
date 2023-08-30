import cheerio from 'cheerio';
import axios from 'axios';
import { utilsgridscrapper, utilsreformat, utilstablesscrapper } from '../../utils';
import { responseType } from '../../@types/response';
import { masteamsyears } from '../../mas';
import {
  dataGridType,
  dataPlayersFAQType,
  dataTableType,
  dataTeamsResultType,
  dataTeamsTransactionsType,
} from '../../@types/data';
import { TeamsResultType } from '../../@types/teamsresult';

export async function teamsyears(key: string, year: string, path: string) {
  const response: responseType = {
    OK: true,
  };
  const telement = masteamsyears.find((el) => el.id === path);
  if (!telement) {
    response.OK = false;
    return response;
  }
  const html = await axios.get(
    'https://www.basketball-reference.com/teams/' + key + '/' + year + telement.link,
  );
  const $ = cheerio.load(utilsreformat(html.data));
  if (telement.type === 'table') {
    const data: dataTableType = {
      heading: telement.heading,
      table: null,
    };
    $('#' + telement.id).each(async (_, element) => {
      data.table = await utilstablesscrapper($, element);
      data.table.caption = $('caption', element).text().replace('Table', '').trim();
    });
    response.data = data;
  } else if (telement.type === 'result') {
    const data: dataTeamsResultType = [];
    $('#' + telement.id + ' li').each((_, element) => {
      const style = JSON.parse(
        '{' +
          $('span span', element)
            .attr('style')
            ?.replace('%', '')
            .replace('px', '')
            .replace('height', `"height"`)
            .replace('margin-bottom', `"margin-bottom"`)
            .replace(/;/g, ',') +
          `"buf":0}`,
      );
      const dataElement: TeamsResultType = {
        class: $(element).hasClass('asg')
          ? 'asg'
          : $(element).hasClass('result')
          ? 'result'
          : 'offday',
        type: $('span span', element).hasClass('notwin')
          ? 'notwin'
          : $('span span', element).hasClass('win')
          ? 'win'
          : null,
        href: $('a', element).attr('href') || null,
        tip: $('span', element).attr('tip') || null,
        heightpercent: style['height'] || 0,
        marginbottom: style['margin-bottom'] || 0,
      };
      data.push(dataElement);
    });
    response.data = data;
  } else if (telement.type === 'coaches') {
    const data: dataTableType = {
      heading: 'Тренеры',
      table: null,
    };
    $('#' + telement.id).each(async (_, element) => {
      data.table = await utilstablesscrapper($, element);
      data.table.caption = 'Тренеры';
    });
    response.data = data;
  } else if (telement.type === 'faq') {
    const data: dataPlayersFAQType = [];
    $('#' + telement.id)
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
  } else if (telement.type === 'grid') {
    const data: dataGridType = {
      grid: null,
      caption: telement.heading,
    };
    $('#' + telement.id).each(async (_, element) => {
      data.grid = await utilsgridscrapper($, element);
    });
    response.data = data;
  } else if (telement.type === 'transactions') {
    const data: dataTeamsTransactionsType = [];
    $('.page_index li').each((_, element) => {
      $(element)
        .contents()
        .each((_, elem) => {
          if ($(elem).is('span')) {
            data.push({
              span: true,
              href: null,
              text: $(elem).text().trim(),
            });
          } else if ($(elem).hasClass('transaction')) {
            $(elem)
              .contents()
              .each((_, el) => {
                data.push({
                  span: false,
                  href: $(el).attr('href') || null,
                  text: $(el).text().trim(),
                });
              });
          }
        });
    });
    response.data = data;
  }
  return response;
}

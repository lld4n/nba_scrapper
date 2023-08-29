import { TableElementType, TableHeadersType, TableType } from '../@types/table';

export async function utilstablesscrapper($: cheerio.Root, celem: cheerio.Element) {
  const table: TableType = {
    caption: '',
    headers: [],
    body: [],
    foot: [],
  };
  $('thead tr', celem).each((_, element) => {
    const tableRow: TableHeadersType[] = [];
    $('th, td', element).each((_, elem) => {
      tableRow.push({
        text: $(elem).text().trim(),
        tip: $(elem).attr('data-tip') || null,
        colspan: $(elem).attr('colspan') || null,
      });
    });
    table.headers.push(tableRow);
  });

  $('tbody tr', celem).each((_, element) => {
    if (!$(element).hasClass('thead')) {
      const tableRow: TableElementType[] = [];
      const light = $(element).hasClass('light_text');
      $('th, td', element).each((_, elem) => {
        tableRow.push({
          text: $(elem).text().trim(),
          colspan: $(elem).attr('colspan') || null,
          href: $('a', elem).attr('href')?.replace('?', '$') || null,
          bold: Boolean($('strong', elem).html()),
          light,
        });
      });
      table.body.push(tableRow);
    }
  });

  $('tfoot tr', celem).each((_, element) => {
    const tableRow: TableElementType[] = [];
    $('th, td', element).each((_, elem) => {
      tableRow.push({
        text: $(elem).text().trim(),
        colspan: $(elem).attr('colspan') || null,
        href: $('a', elem).attr('href') || null,
        bold: false,
        light: false,
      });
    });
    table.foot.push(tableRow);
  });
  if (table.headers.length === 0) {
    table.headers = null;
  }
  if (table.body.length === 0) {
    table.body = null;
  }
  if (table.foot.length === 0) {
    table.foot = null;
  }
  return table;
}

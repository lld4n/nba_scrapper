import { GridELementType, GridTableType, GridType } from '../@types/grid';

export async function utilsgridscrapper($: cheerio.Root, celem: cheerio.Element) {
  const grid: GridType = [];
  $('div', celem).each((_, element) => {
    const gridTable: GridTableType = {
      caption: $('caption', element).text().trim(),
      list: [],
    };
    $('tr', element).each((_, elem) => {
      const gridListEl1: GridELementType[][] = [];
      $('th, td', elem).each((_, el) => {
        const gridListEl2: GridELementType[] = [];
        $(el)
          .contents()
          .each((_, e) => {
            gridListEl2.push({
              text: $(e).text().trim(),
              href: $(e).attr('href') || null,
              bold: $(e).is('strong'),
            });
          });
        gridListEl1.push(gridListEl2);
      });
      gridTable.list.push(gridListEl1);
    });
    grid.push(gridTable);
  });
  return grid;
}

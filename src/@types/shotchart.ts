import { ChartBoxscoresType } from './chart';
import { TableType } from './table';

export type ShotChartType = {
  table: TableType | null;
  chart: ChartBoxscoresType[];
};

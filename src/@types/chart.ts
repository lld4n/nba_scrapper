export type ChartType = {
  xpercent: number;
  ypercent: number;
  tip: string;
  type: 'miss' | 'make';
};

export type ChartPlayersType = ChartType & {
  date: number;
  vs: string;
  time: string;
  info: string;
  check: string;
};

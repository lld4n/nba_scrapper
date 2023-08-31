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

export type ChartBoxscoresType = ChartType & {
  quarter: string;
  player: string;
  time: string;
  res: string;
  command: string;
};

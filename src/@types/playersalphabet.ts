export type PlayersAlphabetHeadersType = {
  text: string;
  tip: string | null;
};

export type PlayersAlphabetBodyType = {
  type: 'text' | 'link';
  hall: boolean;
  active: boolean;
  text: string;
  href: string | null;
};

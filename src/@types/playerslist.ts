export type PlayersList = {
  alphabet: string;
  href: string | null;
  elements: PlayersListElement[];
};

export type PlayersListElement = {
  type: 'simple' | 'hall' | 'active';
  href: string | null;
  text: string;
};

import { TableType } from './table';

export type GamesType = {
  loser: GameTeamType;
  winner: GameTeamType;
  hrefboxscores: string;
  table: TableType | null;
};

export type GameTeamType = {
  teamhref: string;
  teamtext: string;
  score: string;
};

export type PrevNextType = {
  href: string;
  text: string;
};

export type GamesMiniType = {
  loser: GameTeamType;
  winner: GameTeamType;
  hrefboxscores: string;
  date: string | null;
  current: boolean;
};

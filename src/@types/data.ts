import { ActualSeasonConferenceType } from './actualseason';
import { ChartPlayersType, ChartType } from './chart';
import { PlayersAlphabetBodyType, PlayersAlphabetHeadersType } from './playersalphabet';
import { PlayersAwardsType } from './playersawards';
import {
  PlayersInfoBio,
  PlayersInfoJersies,
  PlayersInfoKeys,
  PlayersInfoLinks,
  PlayersInfoSocials,
} from './playersinfo';
import { PlayersList } from './playerslist';
import { PlayersTransactions } from './playerstransactions';
import { SearchType } from './search';
import { TableType } from './table';

export type dataType =
  | string
  | dataActualSeasonType
  | dataSearchType
  | dataPlayersListType
  | dataPlayersAlphabetType
  | dataPlayersInfoType
  | dataPlayersPagesType
  | dataPlayersAwardsType
  | dataPlayersTransactionsType
  | dataPlayersContractType
  | dataPlayersFAQType
  | dataPlayersSplitsType
  | dataPlayersGamelogType
  | dataPlayersShootingType;

export type dataActualSeasonType = {
  east: ActualSeasonConferenceType[][];
  west: ActualSeasonConferenceType[][];
};

export type dataSearchType = SearchType[];

export type dataPlayersListType = PlayersList[];

export type dataPlayersAlphabetType = {
  headers: PlayersAlphabetHeadersType[];
  body: PlayersAlphabetBodyType[][];
};

export type dataPlayersInfoType = {
  title: string;
  stats: string[][];
  images: string[];
  jersies: PlayersInfoJersies[];
  socials: PlayersInfoSocials[];
  bio: PlayersInfoBio[];
  keys: PlayersInfoKeys[];
  links: PlayersInfoLinks;
};

export type dataPlayersPagesType = {
  table: TableType | null;
};

export type dataPlayersAwardsType = {
  caption: string;
  rows: PlayersAwardsType[][];
}[];

export type dataPlayersTransactionsType = PlayersTransactions[];

export type dataPlayersContractType = {
  contracts: {
    key: string;
    value: string;
  }[];
  bullets: string[];
};

export type dataPlayersFAQType = {
  type: 'text' | 'h3';
  text: string;
  href: string | null;
}[];

export type dataPlayersSplitsType = {
  table: TableType | null;
  heading: string[];
};

export type dataPlayersGamelogType = {
  regular: TableType | null;
  playoffs: TableType | null;
};

export type dataPlayersShootingType = {
  table: TableType | null;
  chart: ChartPlayersType[];
};

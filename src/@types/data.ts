import { ActualSeasonConferenceType } from './actualseason';
import { ChartPlayersType, ChartType } from './chart';
import { GridType } from './grid';
import { TeamsLogosElementType } from './logos';
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
  | dataPlayersInfoType
  | dataTableType
  | dataGridType
  | dataPlayersTransactionsType
  | dataPlayersContractType
  | dataPlayersFAQType
  | dataPlayersSplitsType
  | dataPlayersGamelogType
  | dataPlayersShootingType
  | dataTeamsListType
  | dataTeamsInfoType
  | dataTeamsLogosType
  | dataLogosType;

export type dataActualSeasonType = {
  east: ActualSeasonConferenceType[][];
  west: ActualSeasonConferenceType[][];
};

export type dataSearchType = SearchType[];

export type dataPlayersListType = PlayersList[];

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

export type dataTableType = {
  heading: string | null;
  table: TableType | null;
};

export type dataGridType = { grid: GridType | null; caption: string };

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
  text: string | null;
};

export type dataTeamsListType = {
  active: {
    table: TableType | null;
  };
  defunct: {
    table: TableType | null;
  };
};

export type dataTeamsInfoType = {
  table: TableType | null;
  title: string;
  key: string;
  imgbuffer: string;
  bio: PlayersInfoBio[];
  players: {
    name: string;
    ws: string;
    imgbuffer: string;
    image: string | null;
    href: string;
  }[];
  links: string[];
};

export type dataTeamsLogosType = TeamsLogosElementType[];

export type dataLogosType = {
  src: string | null;
  name: string;
  desc: string[];
};

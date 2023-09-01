import { ActualSeasonConferenceType } from './actualseason';
import { ChartPlayersType } from './chart';
import { GamesMiniType, GamesType, PrevNextType } from './games';
import { GridType } from './grid';
import { LeaguesType } from './leagues';
import { LeaguesRecordType } from './leaguesrecord';
import { TeamsLogosElementType } from './logos';
import { OpponentType } from './opponent';
import { PBPType } from './pbp';
import {
  PlayersInfoBio,
  PlayersInfoJersies,
  PlayersInfoKeys,
  PlayersInfoLinks,
  PlayersInfoSocials,
} from './playersinfo';
import { PlayersList } from './playerslist';
import { PlayersTransactions } from './playerstransactions';
import { PlusMinusHeaderType, PlusMinusType } from './plusminus';
import { SearchType } from './search';
import { ShotChartType } from './shotchart';
import { TableType } from './table';
import { TeamsResultType } from './teamsresult';

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
  | dataLogosType
  | dataTeamsResultType
  | dataTransactionsType
  | dataBoxscoresInfoType
  | dataBoxscoresMetaType
  | dataBoxscoresContentType
  | dataBoxscoresPBPType
  | dataBoxscoresShotChartType
  | dataBoxscoresPlusMinusType
  | dataLeaguesType
  | dataLeaguesRecordType
  | dataLeaguesScheduleType
  | dataLeaguesTablePType;

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

export type dataTeamsResultType = TeamsResultType[];

export type dataTransactionsType = {
  span: boolean;
  href: string | null;
  text: string;
}[];

export type dataLogosType = {
  src: string | null;
  name: string;
  desc: string[];
};

export type dataBoxscoresInfoType = {
  east: {
    table: TableType | null;
  };
  west: {
    table: TableType | null;
  };
  games: GamesType[];
  curdate: string;
  prev: PrevNextType;
  next: PrevNextType;
};

export type dataBoxscoresMetaType = {
  gamesmini: GamesMiniType[];
  gamestitle: string;
  date: string;
  arena: string;
  exactdate: string;
  opponents: OpponentType[];
  hrefs: string[];
};

export type dataBoxscoresContentType = TableType[];

export type dataBoxscoresPBPType = {
  summary: TableType[];
  pbp: PBPType;
};

export type dataBoxscoresShotChartType = ShotChartType[];

export type dataBoxscoresPlusMinusType = {
  header: PlusMinusHeaderType[];
  opponents: PlusMinusType[];
};

export type dataLeaguesType = LeaguesType[][];

export type dataLeaguesRecordType = LeaguesRecordType[][];

export type dataLeaguesScheduleType = {
  hrefs: { href: string; text: string }[];
  table: TableType | null;
};

export type dataLeaguesTablePType = { list: { href: string; text: string }[]; caption: string };

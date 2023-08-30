import { MasType } from '../mas';

export type PlayersInfoJersies = {
  number: string;
  command: string;
  date: string;
};

export type PlayersInfoSocials = {
  type: 'twitter' | 'instagram' | 'wikipedia';
  href: string;
};

export type PlayersInfoBio = {
  type: 'bold' | 'text';
  text: string;
};

export type PlayersInfoKeys = MasType;

export type PlayersInfoLinks = {
  gamelog: PlayersInfoLinksElementType[];
  splits: PlayersInfoLinksElementType[];
  shooting: PlayersInfoLinksElementType[];
};

export type PlayersInfoLinksElementType = {
  text: string;
  href: string | null;
};

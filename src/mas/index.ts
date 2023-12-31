export type MasType = {
  id: string;
  type: 'table' | 'grid' | 'transactions' | 'faq' | 'contract';
  name: string;
  link: string;
  heading: string | null;
};

export type MasLeaguesPagesType = {
  id: string;
  type: 'table' | 'record';
  name: string;
  link: string;
  heading: string | null;
};

export type MasLeaguesYearsType = {
  id: string;
  type: 'table' | 'grid' | 'schedule' | 'transactions' | 'tablep';
  name: string;
  link: string;
};

export type MasPlayoffsYearsType = {
  id: string;
  type: 'table' | 'grid';
  name: string;
  link: string;
};

export type MasTeamsType = {
  id: string;
  type: 'table' | 'grid' | 'result' | 'faq' | 'coaches' | 'transactions';
  name: string;
  link: string;
  heading: string | null;
};

import { masplayers } from './masplayers';
import { masalphabet } from './masalphabet';
import { mascommands } from './mascommands';
import { masteamspages } from './masteamspages';
import { masteamsyears } from './masteamsyears';
import { masleaguespages } from './masleaguespages';
import { masleaguesyears } from './masleaguesyears';
import { masplayoffsfinals } from './masplayoffsfinals';
import { masallstarlogos } from './masallstarlogos';

export {
  masplayers,
  masalphabet,
  mascommands,
  masteamspages,
  masteamsyears,
  masleaguespages,
  masleaguesyears,
  masplayoffsfinals,
  masallstarlogos,
};

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

export { masplayers, masalphabet, mascommands, masteamspages, masteamsyears, masleaguespages };

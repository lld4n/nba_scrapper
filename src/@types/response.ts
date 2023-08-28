import { dataType } from './data';

export type responseType = {
  OK: boolean;
  error?: any;
  data?: dataType;
};

export type TableType = {
  caption: string;
  headers: TableHeadersType[][];
  body: TableElementType[][];
  foot: TableElementType[][];
};

export type TableHeadersType = {
  text: string;
  tip: string | null;
  colspan: string | null;
};

export type TableElementType = {
  bold: boolean;
  light: boolean;
  href: string | null;
  text: string;
  colspan: string | null;
};

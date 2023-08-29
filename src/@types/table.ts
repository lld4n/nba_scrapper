export type TableType = {
  caption: string;
  headers: TableHeadersType[][] | null;
  body: TableElementType[][] | null;
  foot: TableElementType[][] | null;
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
  star: boolean;
};

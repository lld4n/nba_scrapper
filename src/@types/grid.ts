export type GridType = GridTableType[];

export type GridTableType = {
  caption: string;
  list: GridELementType[][][];
};

export type GridELementType = {
  text: string;
  href: string | null;
  bold: boolean;
};

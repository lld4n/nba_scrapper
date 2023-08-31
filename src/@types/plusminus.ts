export type PlusMinusType = {
  heading: string;
  list: PlusMinusRowType[];
};

export type PlusMinusRowType = {
  type: 'player' | 'plusminus';
  row: PlusMinusElementType[] | null;
  text: string | null;
};

export type PlusMinusElementType = {
  type: 'even' | 'minus' | 'plus' | null;
  text: string;
  widthper: number;
};

export type PlusMinusHeaderType = {
  text: string;
  widthper: number;
};

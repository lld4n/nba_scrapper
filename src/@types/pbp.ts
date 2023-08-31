export type PBPType = PBPRowType[];

export type PBPRowType = {
  row: PBPELementType[];
  thead: boolean;
};

export type PBPELementType = {
  contents: PBPElementContentsType[];
  colspan: string | null;
  scorebool: boolean;
  tiebool: boolean;
  leadchangebool: boolean;
};

export type PBPElementContentsType = {
  text: string;
  href: string | null;
};

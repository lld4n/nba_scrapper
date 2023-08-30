export type TeamsResultType = {
  class: 'result' | 'offday' | 'asg';
  type: 'notwin' | 'win' | null;
  href: string | null;
  tip: string | null;
  heightpercent: number;
  marginbottom: number;
};

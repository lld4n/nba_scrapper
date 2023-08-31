export type LeaguesType = {
  type: 'season' | 'champ' | 'mvp' | 'rookie' | 'points' | 'rebounds' | 'assists' | 'shares';
  text: string | null;
  href: string | null;
  num: number | null;
};

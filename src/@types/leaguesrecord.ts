export type LeaguesRecordType = {
  type: 'hashtag' | 'wins' | 'loses' | 'teams';
  text: string | null;
  hrefs: { href: string; text: string }[] | null;
};

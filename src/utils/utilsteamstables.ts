export const utilsteamstables: {
  id: string;
  type: 'table' | 'grid';
  name: string;
  link: string;
}[] = [
  {
    id: 'stats',
    type: 'table',
    name: 'Командная статистика.Базовая',
    link: 'stats_basic_totals.html',
  },
  {
    id: 'stats',
    type: 'table',
    name: 'Командная статистика за игру.Базовая',
    link: 'stats_per_game_totals.html',
  },
  {
    id: 'stats',
    type: 'table',
    name: 'Статистика соперников.Базовая',
    link: 'opp_stats_basic_totals.html',
  },
  {
    id: 'stats',
    type: 'table',
    name: 'Статистика соперников за игру.Базовая',
    link: 'opp_stats_per_game_totals.html',
  },
  {
    id: 'stats',
    type: 'table',
    name: 'Командная статистика.Рейтинг лиги',
    link: 'stats_basic_ranks.html',
  },
  {
    id: 'stats',
    type: 'table',
    name: 'Командная статистика за игру.Рейтинг лиги',
    link: 'stats_per_game_ranks.html',
  },
  {
    id: 'stats',
    type: 'table',
    name: 'Статистика соперников.Рейтинг лиги',
    link: 'opp_stats_basic_ranks.html',
  },
  {
    id: 'stats',
    type: 'table',
    name: 'Статистика соперников за игру.Рейтинг лиги',
    link: 'opp_stats_per_game_ranks.html',
  },
  {
    id: 'stats',
    type: 'table',
    name: 'Командная статистика.В годовом исчислении',
    link: 'stats_basic_yr_yr.html',
  },
  {
    id: 'stats',
    type: 'table',
    name: 'Командная статистика за игру.В годовом исчислении',
    link: 'stats_per_game_yr_yr.html',
  },
  {
    id: 'stats',
    type: 'table',
    name: 'Статистика соперников.В годовом исчислении',
    link: 'opp_stats_basic_yr_yr.html',
  },
  {
    id: 'stats',
    type: 'table',
    name: 'Статистика соперников за игру.В годовом исчислении',
    link: 'opp_stats_per_game_yr_yr.html',
  },
  { id: 'div_leaders', type: 'grid', name: 'Сезонные лидеры', link: 'leaders_season.html' },
  { id: 'div_leaders', type: 'grid', name: 'Карьерные лидеры', link: 'leaders_career.html' },
  { id: 'franchise_register', type: 'table', name: 'Игроки', link: 'players.html' },
  { id: 'coaches', type: 'table', name: 'Тренеры', link: 'coaches.html' },
  { id: 'executives', type: 'table', name: 'Руководители', link: 'executives.html' },
  { id: 'div_leaderboard', type: 'grid', name: 'Матчи всех звезд', link: 'all_star.html' },
  { id: 'div_leaderboard', type: 'grid', name: 'Зал славы', link: 'hof.html' },
  { id: 'draft', type: 'table', name: 'Драфт', link: 'draft.html' },
  { id: 'div_leaderboard', type: 'grid', name: 'Номера униформ', link: 'numbers.html' },
  { id: 'head2head', type: 'table', name: 'Взаимодействие', link: 'head2head.html' },
];

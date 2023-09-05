# Tsukuyomi Dream

- [x] search
- [x] actualseason
- [x] players
- [x] teams
- [x] scores
- [x] leagues
- [x] draft
- [x] coaches
- [x] playoffs
- [x] all-star
- [ ] awards
- [ ] executives
- [ ] referees
- [ ] leaders

потихоньку пишу **REST API**, который собирает данные с **basketball-conference**, **bing.images** ...

Пробел указывается через `+`

|             | API                                         | Explanation                                                                                                                                                                                                                                  |
| ----------: | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `other` |                                             |                                                                                                                                                                                                                                              |
|             | `api/other/actualseason`                    | Возвращает статистику текущего сезона<br>[reference](https://www.basketball-reference.com/)                                                                                                                                                  |
|             | `api/other/search/:key`                     | Возвращает результаты поиска по ключу key<br>[reference](https://www.basketball-reference.com/search/search.fcgi?hint=&search=kobe&pid=&idx=)                                                                                                |
|   `players` |                                             |                                                                                                                                                                                                                                              |
|             | `api/players/list`                          | Возвращает список игроков<br>[reference](https://www.basketball-reference.com/players/)                                                                                                                                                      |
|             | `api/players/:alphabet`                     | Возвращает список игроков по буквам алфавита<br>[reference](https://www.basketball-reference.com/players/a/)                                                                                                                                 |
|             | `api/players/:alphabet/:path/info`          | Возвращает общую информацию о игроке<br>[reference](https://www.basketball-reference.com/players/b/bryanko01.html)                                                                                                                           |
|             | `api/players/:alphabet/:path/pages/:key`    | Возвращает информацию постранично<br>[reference](https://www.basketball-reference.com/players/b/bryanko01.html)                                                                                                                              |
|             | `api/players/:alphabet/:path/splits/:key`   | Возвращает информацию о сплитах игрока<br>[reference](https://www.basketball-reference.com/players/b/bryanko01/splits/)<br>[reference](https://www.basketball-reference.com/players/b/bryanko01/splits/2001)                                 |
|             | `api/players/:alphabet/:path/gamelog/:key`  | Возвращает информацию о геймлогах игрока<br>[reference](https://www.basketball-reference.com/players/b/bryanko01/gamelog-playoffs-advanced/)<br>[reference](https://www.basketball-reference.com/players/b/bryanko01/gamelog-advanced/1998/) |
|             | `api/players/:alphabet/:path/shooting/:key` | Возвращает информацию о бросках игрока<br>[reference](https://www.basketball-reference.com/players/b/bryanko01/shooting/2002)                                                                                                                |
|     `teams` |                                             |                                                                                                                                                                                                                                              |
|             | `api/teams/list`                            | Возвращает список команд НБА<br>[reference](https://www.basketball-reference.com/teams/)                                                                                                                                                     |
|             | `api/teams/:key`                            | Возвращает общую информацию о команде<br>[reference](https://www.basketball-reference.com/teams/NJN/)                                                                                                                                        |
|             | `api/teams/:key/logos`                      | Возвращает логотипы команды<br>[reference](https://www.sportslogos.net/logos/list_by_team/3786/Brooklyn_Nets/)                                                                                                                               |
|             | `api/teams/:key/pages/:path`                | Возвращает страницы с информацией о команде<br>[reference](https://www.basketball-reference.com/teams/NJN/stats_basic_totals.html)                                                                                                           |
|             | `api/teams/:key/years/:year/:path`          | Возвращает информацию о определенном сезоне<br>[reference](https://www.basketball-reference.com/teams/BRK/2023.html)                                                                                                                         |
| `boxscores` |                                             |                                                                                                                                                                                                                                              |
|             | `api/boxscores/info/:path`                  | Возвращает список игр<br>[reference](https://www.basketball-reference.com/boxscores/?month=06&day=11&year=2023)                                                                                                                              |
|             | `api/boxscores/meta/:path`                  | Возвращает метаинформацию игры<br>[reference](https://www.basketball-reference.com/boxscores/202306090MIA.html)                                                                                                                              |
|             | `api/boxscores/content/:path`               | Возвращает основную информацию игры<br>[reference](https://www.basketball-reference.com/boxscores/202306090MIA.html)                                                                                                                         |
|             | `api/boxscores/pbp/:path`                   | Возвращает информацию игру за игру<br>[reference](https://www.basketball-reference.com/boxscores/pbp/202306090MIA.html)                                                                                                                      |
|             | `api/boxscores/shot-chart/:path`            | Возвращает информацию о бросках<br>[reference](https://www.basketball-reference.com/boxscores/shot-chart/202306090MIA.html)                                                                                                                  |
|             | `api/boxscores/plus-minus/:path`            | Возвращает информацию о плюсах и минусах<br>[reference](https://www.basketball-reference.com/boxscores/plus-minus/202306090MIA.html)                                                                                                         |
|   `leagues` |                                             |                                                                                                                                                                                                                                              |
|             | `api/leagues/list`                          | Возвращает список сезонов<br>[reference](https://www.basketball-reference.com/leagues/)                                                                                                                                                      |
|             | `api/leagues/pages/:path`                   | Возвращает информацию с разных страниц связанных с сезонами<br>[reference](https://www.basketball-reference.com/leagues/NBA_stats_per_game.html)                                                                                             |
|             | `api/leagues/years/:year/:path`             | Возвращает информацию о определенном сезоне<br>[reference](https://www.basketball-reference.com/leagues/NBA_2023.html)                                                                                                                       |
|     `draft` |                                             |                                                                                                                                                                                                                                              |
|             | `api/draft/list`                            | Возвращает список драфтов<br>[reference](https://www.basketball-reference.com/draft/)                                                                                                                                                        |
|             | `api/draft/:path`                           | Возвращает информацию об определенном драфте<br>[reference](https://www.basketball-reference.com/draft/NBA_2023.html)                                                                                                                        |
|   `coaches` |                                             |                                                                                                                                                                                                                                              |
|             | `api/coaches/:path`                         | Возвращает список тренеров<br>[reference](https://www.basketball-reference.com/coaches/)                                                                                                                                                     |
|  `playoffs` |                                             |                                                                                                                                                                                                                                              |
|             | `api/playoffs/list`                         | Возвращает список всех плей-офф<br>[reference](https://www.basketball-reference.com/playoffs/)                                                                                                                                               |
|             | `api/playoffs/finalpart`                    | Возвращает список команд и года их побед и поражений<br>[reference](https://www.basketball-reference.com/playoffs/)                                                                                                                          |
|             | `api/playoffs/years/:year/:path`            | Возвращает информацию об определенном плей-оффе<br>[reference](https://www.basketball-reference.com/playoffs/NBA_2023.html)                                                                                                                  |
|             | `api/playoffs/meta/:path`                   | Возвращает метаинформацию об определенном плей-оффе<br>[reference](https://www.basketball-reference.com/playoffs/NBA_2023.html)                                                                                                              |
|             | `api/playoffs/pages/:path`                  | Возвращает информацию с разных страниц о плей-оффе<br>[reference](https://www.basketball-reference.com/playoffs/2023-nba-eastern-conference-first-round-knicks-vs-cavaliers.html)                                                            |
|   `allstar` |                                             |                                                                                                                                                                                                                                              |
|             | `api/allstar/list`                          | Возвращает список матчей всех звезд<br>[reference](https://www.basketball-reference.com/allstar/)                                                                                                                                            |
|             | `api/allstar/leaderssingle`                 | Возвращает лидеров матчей всех звезд<br>[reference](https://www.basketball-reference.com/allstar/leaders_game.html)                                                                                                                          |
|             | `api/allstar/leaderscareer`                 | Возвращает лидеров карьеры матчей всех звезд<br>[reference](https://www.basketball-reference.com/allstar/leaders_career.html)                                                                                                                |
|             | `api/allstar/contents`                      | Возвращает информацию о контестах<br>[reference](https://www.basketball-reference.com/allstar/contest.html)                                                                                                                                  |
|             | `api/allstar/careerstats`                   | Возвращает информацию о карьерной статистике<br>[reference](https://www.basketball-reference.com/allstar/NBA-allstar-career-stats.html)                                                                                                      |
|             | `api/allstar/meta/:path`                    | Возвращает метаинформацию об определенном матче всех звезд<br>[reference](https://www.basketball-reference.com/allstar/NBA_2023.html)                                                                                                        |
|             | `api/allstar/info/:path`                    | Возвращает информацию об определенном матче всех звезд<br>[reference](https://www.basketball-reference.com/allstar/NBA_2023.html)                                                                                                            |
|             | `api/allstar/voting/:path`                  | Возвращает информацию о голосовании матчей всех звезд<br>[reference](https://www.basketball-reference.com/allstar/NBA_2022_voting.html)                                                                                                      |
|     `logos` |                                             |                                                                                                                                                                                                                                              |
|             | `api/logos/:key`                            | Возвращает фотографии с sportlogos<br>[reference](https://www.sportslogos.net/logos/view/hsuff5m3dgiv20kovde422r1f/Brooklyn_Nets/2013/Primary_Logo)                                                                                          |

## masplayers

```typescript
[
  {
    heading: 'Жирным шрифтом выделен лидер лиги',
    link: 'per_game',
    type: 'table',
    id: 'per_game',
    name: 'За игру.Регулярный сезон',
  },
  {
    heading: 'Жирным шрифтом выделен лидер лиги',
    link: 'playoffs_per_game',
    type: 'table',
    id: 'playoffs_per_game',
    name: 'За игру.Плей-офф',
  },
  {
    heading: 'Жирным шрифтом выделен лидер лиги',
    link: 'totals',
    type: 'table',
    id: 'totals',
    name: 'Итоги.Регулярный сезон',
  },
  {
    heading: 'Жирным шрифтом выделен лидер лиги',
    link: 'playoffs_totals',
    type: 'table',
    id: 'playoffs_totals',
    name: 'Итоги.Плей-офф',
  },
  {
    heading: null,
    link: 'per_minute',
    type: 'table',
    id: 'per_minute',
    name: 'За 36 минут.Регулярный сезон',
  },
  {
    heading: null,
    link: 'playoffs_per_minute',
    type: 'table',
    id: 'playoffs_per_minute',
    name: 'За 36 минут.Плей-офф',
  },
  {
    heading: null,
    link: 'per_poss',
    type: 'table',
    id: 'per_poss',
    name: 'За 100 владений мячом.Регулярный сезон',
  },
  {
    heading: null,
    link: 'playoffs_per_poss',
    type: 'table',
    id: 'playoffs_per_poss',
    name: 'За 100 владений мячом.Плей-офф',
  },
  {
    heading: 'Жирным шрифтом выделен лидер лиги',
    link: 'advanced',
    type: 'table',
    id: 'advanced',
    name: 'Дополнительно.Регулярный сезон',
  },
  {
    heading: 'Жирным шрифтом выделен лидер лиги',
    link: 'playoffs_advanced',
    type: 'table',
    id: 'playoffs_advanced',
    name: 'Дополнительно.Плей-офф',
  },
  {
    heading: null,
    link: 'adj_shooting',
    type: 'table',
    id: 'adj_shooting',
    name: 'Скорректированная стрельба',
  },
  { heading: null, link: 'pbp', type: 'table', id: 'pbp', name: 'Игра за игру.Регулярный сезон' },
  {
    heading: null,
    link: 'playoffs_pbp',
    type: 'table',
    id: 'playoffs_pbp',
    name: 'Игра за игру.Плей-офф',
  },
  {
    heading: null,
    link: 'shooting',
    type: 'table',
    id: 'shooting',
    name: 'Броски.Регулярный сезон',
  },
  {
    heading: null,
    link: 'playoffs_shooting',
    type: 'table',
    id: 'playoffs_shooting',
    name: 'Броски.Плей-офф',
  },
  {
    heading: null,
    link: 'highs-reg-season',
    type: 'table',
    id: 'highs-reg-season',
    name: 'Игровые максимумы.Регулярный сезон',
  },
  {
    heading: null,
    link: 'highs-playoffs',
    type: 'table',
    id: 'highs-playoffs',
    name: 'Игровые максимумы.Плей-офф',
  },
  {
    heading: null,
    link: 'playoffs-series',
    type: 'table',
    id: 'playoffs-series',
    name: 'Серия плей-офф',
  },
  { heading: null, link: 'all_star', type: 'table', id: 'all_star', name: 'Матчи всех звезд' },
  {
    heading: 'Наиболее схожая дуга производительности',
    link: 'sims-thru',
    type: 'table',
    id: 'sims-thru',
    name: 'Баллы сходства.За определенный период',
  },
  {
    heading: 'Наиболее схожая дуга производительности',
    link: 'sims-career',
    type: 'table',
    id: 'sims-career',
    name: 'Баллы сходства.За карьеру',
  },
  {
    heading: null,
    link: 'all_college_stats',
    type: 'table',
    id: 'all_college_stats',
    name: 'Статистика колледжа',
  },
  { heading: null, link: 'all_salaries', type: 'table', id: 'all_salaries', name: 'Зарплаты' },
  {
    heading: null,
    link: 'awards',
    type: 'grid',
    id: 'div_leaderboard',
    name: 'Появление в списках лидеров, награды и почетные звания',
  },
  {
    heading: null,
    link: 'transactions',
    type: 'transactions',
    id: 'div_transactions',
    name: 'Транзакции',
  },
  {
    heading: null,
    link: 'contract',
    type: 'contract',
    id: 'div_contract',
    name: 'Текущий контракт',
  },
  {
    heading: null,
    link: 'faq',
    type: 'faq',
    id: 'div_faq',
    name: 'Часто задаваемые вопросы',
  },
];
```

## masalphabet

```typescript
[
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
```

## mascommands

```typescript
[
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/217/Orlando_Magic/',
    bg: '#C2CCD2',
    color: '#0B77BD',
    id: 'ORL',
    name: 'Orlando Magic',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/218/Philadelphia_76ers/',
    bg: '#1D428A',
    color: '#FFFFFF',
    id: 'PHI',
    name: 'Philadelphia 76ers',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/238/Phoenix_Suns/',
    bg: '#F9A01B',
    color: '#000000',
    id: 'PHO',
    name: 'Phoenix Suns',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/239/Portland_Trail_Blazers/',
    bg: '#FFFFFF',
    color: '#CF0A2C',
    id: 'POR',
    name: 'Portland Trail Blazers',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/240/Sacramento_Kings/',
    bg: '#5B2B82',
    color: '#FFFFFF',
    id: 'SAC',
    name: 'Sacramento Kings',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/233/San_Antonio_Spurs/',
    bg: '#FFFFFF',
    color: '#000000',
    id: 'SAS',
    name: 'San Antonio Spurs',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/227/Toronto_Raptors/',
    bg: '#000000',
    color: '#BD1B21',
    id: 'TOR',
    name: 'Toronto Raptors',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/234/Utah_Jazz/',
    bg: '#FFFFFF',
    color: '#000000',
    id: 'UTA',
    name: 'Utah Jazz',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/219/Washington_Wizards/',
    bg: '#E31837',
    color: '#002B5C',
    id: 'WAS',
    name: 'Washington Wizards',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/220/Atlanta_Hawks/',
    bg: '#FFFFFF',
    color: '#C8102E',
    id: 'ATL',
    name: 'Atlanta Hawks',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/213/Boston_Celtics/',
    bg: '#008248',
    color: '#FFFFFF',
    id: 'BOS',
    name: 'Boston Celtics',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/3786/Brooklyn_Nets/',
    bg: '#061922',
    color: '#FEFEFE',
    id: 'BRK',
    name: 'Brooklyn Nets',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/221/Chicago_Bulls/',
    bg: '#CE1141',
    color: '#000000',
    id: 'CHI',
    name: 'Chicago Bulls',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/5120/Charlotte_Hornets/',
    bg: '#00788C',
    color: '#1D1160',
    id: 'CHO',
    name: 'Charlotte Hornets',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/222/Cleveland_Cavaliers/',
    bg: '#6F243A',
    color: '#FEB11E',
    id: 'CLE',
    name: 'Cleveland Cavaliers',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/228/Dallas_Mavericks/',
    bg: '#007DC5',
    color: '#FFFFFF',
    id: 'DAL',
    name: 'Dallas Mavericks',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/229/Denver_Nuggets/',
    bg: '#0D2240',
    color: '#FFC627',
    id: 'DEN',
    name: 'Denver Nuggets',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/223/Detroit_Pistons/',
    bg: '#C8102E',
    color: '#FFFFFF',
    id: 'DET',
    name: 'Detroit Pistons',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/235/Golden_State_Warriors/',
    bg: '#FDB927',
    color: '#1D428A',
    id: 'GSW',
    name: 'Golden State Warriors',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/230/Houston_Rockets/',
    bg: '#F00840',
    color: '#333733',
    id: 'HOU',
    name: 'Houston Rockets',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/224/Indiana_Pacers/',
    bg: '#FDBB30',
    color: '#002D62',
    id: 'IND',
    name: 'Indiana Pacers',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/236/Los_Angeles_Clippers/',
    bg: '#FFFFFF',
    color: '#C8102E',
    id: 'LAC',
    name: 'Los Angeles Clippers',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/237/Los_Angeles_Lakers/',
    bg: '#552583',
    color: '#FDB927',
    id: 'LAL',
    name: 'Los Angeles Lakers',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/231/Memphis_Grizzlies/',
    bg: '#5D76A9',
    color: '#12173F',
    id: 'MEM',
    name: 'Memphis Grizzlies',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/214/Miami_Heat/',
    bg: '#FFFFFF',
    color: '#98002E',
    id: 'MIA',
    name: 'Miami Heat',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/225/Milwaukee_Bucks/',
    bg: '#00471B',
    color: '#EEE1C6',
    id: 'MIL',
    name: 'Milwaukee Bucks',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/232/Minnesota_Timberwolves/',
    bg: '#236192',
    color: '#0C2340',
    id: 'MIN',
    name: 'Minnesota Timberwolves',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/4962/New_Orleans_Pelicans/',
    bg: '#0A2240',
    color: '#8C734B',
    id: 'NOP',
    name: 'New Orleans Pelicans',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/216/New_York_Knicks/',
    bg: '#F58426',
    color: '#1D428A',
    id: 'NYK',
    name: 'New York Knicks',
  },
  {
    urllogo: 'https://www.sportslogos.net/logos/list_by_team/2687/Oklahoma_City_Thunder/',
    bg: '#007AC1',
    color: '#F05133',
    id: 'OKC',
    name: 'Oklahoma City Thunder',
  },
];
```

## masteamspages

```typescript
[
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Командная статистика.Базовая',
    link: 'stats_basic_totals.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Командная статистика за игру.Базовая',
    link: 'stats_per_game_totals.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Статистика соперников.Базовая',
    link: 'opp_stats_basic_totals.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Статистика соперников за игру.Базовая',
    link: 'opp_stats_per_game_totals.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Командная статистика.Рейтинг лиги',
    link: 'stats_basic_ranks.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Командная статистика за игру.Рейтинг лиги',
    link: 'stats_per_game_ranks.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Статистика соперников.Рейтинг лиги',
    link: 'opp_stats_basic_ranks.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Статистика соперников за игру.Рейтинг лиги',
    link: 'opp_stats_per_game_ranks.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Командная статистика.В годовом исчислении',
    link: 'stats_basic_yr_yr.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Командная статистика за игру.В годовом исчислении',
    link: 'stats_per_game_yr_yr.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Статистика соперников.В годовом исчислении',
    link: 'opp_stats_basic_yr_yr.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Статистика соперников за игру.В годовом исчислении',
    link: 'opp_stats_per_game_yr_yr.html',
  },
  {
    heading: '* - участник Зала славы',
    id: 'div_leaders',
    type: 'grid',
    name: 'Сезонные лидеры',
    link: 'leaders_season.html',
  },
  {
    heading: '* - участник Зала славы',
    id: 'div_leaders',
    type: 'grid',
    name: 'Карьерные лидеры',
    link: 'leaders_career.html',
  },
  {
    heading: 'Статистика приведена за время работы игрока во франшизе',
    id: 'franchise_register',
    type: 'table',
    name: 'Игроки',
    link: 'players.html',
  },
  {
    heading: 'Статистика приведена за время работы тренера во франшизе',
    id: 'coaches',
    type: 'table',
    name: 'Тренеры',
    link: 'coaches.html',
  },
  {
    heading:
      'В списке указаны только те руководители, которые отвечают за принятие кадровых решений по игрокам (обычно это генеральный менеджер).',
    id: 'executives',
    type: 'table',
    name: 'Руководители',
    link: 'executives.html',
  },
  {
    heading: null,
    id: 'div_leaderboard',
    type: 'grid',
    name: 'Матчи всех звезд',
    link: 'all_star.html',
  },
  {
    heading: 'Включает членов Зала славы, введенных в него в качестве игроков',
    id: 'div_leaderboard',
    type: 'grid',
    name: 'Зал славы',
    link: 'hof.html',
  },
  {
    heading:
      'Показанная статистика относится к карьере игрока в НБА ↳ указывает на последующие сделки.',
    id: 'draft',
    type: 'table',
    name: 'Драфт',
    link: 'draft.html',
  },
  {
    heading: null,
    id: 'div_leaderboard',
    type: 'grid',
    name: 'Номера униформ',
    link: 'numbers.html',
  },
  { heading: null, id: 'head2head', type: 'table', name: 'Взаимодействие', link: 'head2head.html' },
];
```

## masteamsyears

```typescript
[
  {
    id: 'timeline_results',
    type: 'result',
    name: 'Результаты игр',
    link: '.html',
    heading: 'Высота столбика - перевес',
  },
  { id: 'roster', type: 'table', name: 'Реестр', link: '.html', heading: null },
  {
    id: 'div_assistant_coaches',
    type: 'coaches',
    name: 'Помощники тренеров и персонал',
    link: '.html',
    heading: null,
  },
  {
    id: 'team_and_opponent',
    type: 'table',
    name: 'Статистика команд и соперников',
    link: '.html',
    heading:
      'Рейтинги приведены по играм (за исключением MP, которые являются общими) и отсортированы по убыванию (за исключением TOV и PF); рейтинги соперников перевернуты; расчеты за год/год также приведены по играм',
  },
  { id: 'team_misc', type: 'table', name: 'Team misc', link: '.html', heading: null },
  { id: 'per_game', type: 'table', name: 'За игру.Регулярный сезон', link: '.html', heading: null },
  {
    id: 'playoffs_per_game',
    type: 'table',
    name: 'За игру.Плей-офф',
    link: '.html',
    heading: null,
  },
  { id: 'totals', type: 'table', name: 'Итоги.Регулярный сезон', link: '.html', heading: null },
  { id: 'playoffs_totals', type: 'table', name: 'Итоги.Плей-офф', link: '.html', heading: null },
  {
    id: 'per_minute',
    type: 'table',
    name: 'За 36 минут.Регулярный сезон',
    link: '.html',
    heading: null,
  },
  {
    id: 'playoffs_per_minute',
    type: 'table',
    name: 'За 36 минут.Плей-офф',
    link: '.html',
    heading: null,
  },
  {
    id: 'per_poss',
    type: 'table',
    name: 'За 100 владений мячом.Регулярный сезон',
    link: '.html',
    heading: null,
  },
  {
    id: 'playoffs_per_poss',
    type: 'table',
    name: 'За 100 владений мячом.Плей-офф',
    link: '.html',
    heading: null,
  },
  {
    id: 'advanced',
    type: 'table',
    name: 'Дополнительно.Регулярный сезон',
    link: '.html',
    heading: null,
  },
  {
    id: 'playoffs_advanced',
    type: 'table',
    name: 'Дополнительно.Плей-офф',
    link: '.html',
    heading: null,
  },
  {
    id: 'adj_shooting',
    type: 'table',
    name: 'Скорректированная стрельба.Регулярный сезон',
    link: '.html',
    heading: null,
  },
  { id: 'shooting', type: 'table', name: 'Броски.Регулярный сезон', link: '.html', heading: null },
  { id: 'playoffs_shooting', type: 'table', name: 'Броски.Плей-офф', link: '.html', heading: null },
  { id: 'pbp', type: 'table', name: 'Игра за игру.Регулярный сезон', link: '.html', heading: null },
  {
    id: 'playoffs_pbp',
    type: 'table',
    name: 'Игра за игру.Плей-офф',
    link: '.html',
    heading: null,
  },
  {
    id: 'div_leaderboard',
    type: 'grid',
    name: 'Игроки в таблице лидеров лиги',
    link: '.html',
    heading:
      'Включает в себя статистику за весь сезон для всех игроков, которые проводили время на площадке в регулярном чемпионате или плей-офф.',
  },
  { id: 'salaries2', type: 'table', name: 'Заработная плата', link: '.html', heading: null },
  { id: 'draft-rights', type: 'table', name: 'Драфт', link: '.html', heading: null },
  { id: 'div_faq', type: 'faq', name: 'Часто задаваемые вопросы', link: '.html', heading: null },
  {
    id: 'games',
    type: 'table',
    name: 'Расписание.Регулярный сезон',
    link: '_games.html',
    heading: null,
  },
  {
    id: 'games_playoffs',
    type: 'table',
    name: 'Расписание.Плей-офф',
    link: '_games.html',
    heading: null,
  },
  {
    id: 'transactions',
    type: 'transactions',
    name: 'Транзакции',
    link: '_transactions.html',
    heading: null,
  },
  {
    id: 'tgl_advanced',
    type: 'table',
    name: 'Игровой журнал.Регулярный сезон',
    link: '/gamelog-advanced/',
    heading: 'Обороты не включают командные обороты',
  },
  {
    id: 'tgl_advanced_playoffs',
    type: 'table',
    name: 'Игровой журнал.Плей-офф',
    link: '/gamelog-advanced/',
    heading: 'Обороты не включают командные обороты',
  },
  { id: 'team_splits', type: 'table', name: 'Разделение команд', link: '/splits/', heading: null },
  {
    id: 'lineups_5-man_',
    type: 'table',
    name: 'Комбинации из 5 человек.Регулярный сезон',
    link: '/lineups/',
    heading: null,
  },
  {
    id: 'lineups_4-man_',
    type: 'table',
    name: 'Комбинации из 4 человек.Регулярный сезон',
    link: '/lineups/',
    heading: null,
  },
  {
    id: 'lineups_3-man_',
    type: 'table',
    name: 'Комбинации из трех человек.Регулярный сезон',
    link: '/lineups/',
    heading: null,
  },
  {
    id: 'lineups_2-man_',
    type: 'table',
    name: 'Комбинации из двух человек.Регулярный сезон',
    link: '/lineups/',
    heading: null,
  },
  {
    id: 'lineups_5-man__p',
    type: 'table',
    name: 'Комбинации из 5 человек.Плей-офф',
    link: '/lineups/',
    heading: null,
  },
  {
    id: 'lineups_4-man__p',
    type: 'table',
    name: 'Комбинации из 4 человек.Плей-офф',
    link: '/lineups/',
    heading: null,
  },
  {
    id: 'lineups_3-man__p',
    type: 'table',
    name: 'Комбинации из трех человек.Плей-офф',
    link: '/lineups/',
    heading: null,
  },
  {
    id: 'lineups_2-man__p',
    type: 'table',
    name: 'Комбинации из двух человек.Плей-офф',
    link: '/lineups/',
    heading: null,
  },
  { id: 'on_off', type: 'table', name: 'On/Off.Регулярный сезон', link: '/on-off/', heading: null },
  { id: 'on_off_p', type: 'table', name: 'On/Off.Плей-офф', link: '/on-off/', heading: null },
  {
    id: 'starting_lineups_po0',
    type: 'table',
    name: 'Стартовые составы.Регулярный сезон 1',
    link: '_start.html',
    heading: null,
  },
  {
    id: 'starting_lineups_summary_po0',
    type: 'table',
    name: 'Стартовые составы.Регулярный сезон 2',
    link: '_start.html',
    heading: null,
  },
  {
    id: 'starting_lineups_po1',
    type: 'table',
    name: 'Стартовые составы.Плей-офф 1',
    link: '_start.html',
    heading: null,
  },
  {
    id: 'starting_lineups_summary_po1',
    type: 'table',
    name: 'Стартовые составы.Плей-офф 2',
    link: '_start.html',
    heading: null,
  },
  { id: 'refs-summary', type: 'table', name: 'Судьи', link: '_referees.html', heading: null },
];
```

## masleaguespages

```typescript
[
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Средние показатели по лиге НБА.За игру',
    link: 'NBA_stats_per_game.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Средние показатели по лиге НБА.Итоги',
    link: 'NBA_stats_totals.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Средние показатели по лиге НБА.За 100 владений мячом',
    link: 'NBA_stats_per_poss.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Средние показатели по лиге ABA.За игру',
    link: 'ABA_stats_per_game.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Средние показатели по лиге ABA.Итоги',
    link: 'ABA_stats_totals.html',
  },
  {
    heading: null,
    id: 'stats',
    type: 'table',
    name: 'Средние показатели по лиге ABA.За 100 владений мячом',
    link: 'ABA_stats_per_poss.html',
  },
  {
    heading: null,
    id: 'active_franchises',
    type: 'table',
    name: 'Средние показатели по лиге НБА.Действующие франшизы',
    link: 'NBA_wins.html',
  },
  {
    heading: null,
    id: 'defunct_franchises',
    type: 'table',
    name: 'Средние показатели по лиге НБА.Несостоявшиеся франшизы',
    link: 'NBA_wins.html',
  },
  {
    heading: null,
    id: 'active_franchises',
    type: 'table',
    name: 'Средние показатели по лиге ABA.Действующие франшизы',
    link: 'ABA_wins.html',
  },
  {
    heading: null,
    id: 'defunct_franchises',
    type: 'table',
    name: 'Средние показатели по лиге ABA.Несостоявшиеся франшизы',
    link: 'ABA_wins.html',
  },
  {
    heading: null,
    id: 'best_records',
    type: 'record',
    name: 'Средние показатели по лиге НБА.Лучшие рекорды',
    link: 'NBA_best_records.html',
  },
  {
    heading: null,
    id: 'best_records',
    type: 'record',
    name: 'Средние показатели по лиге ABA.Лучшие рекорды',
    link: 'ABA_best_records.html',
  },
  {
    heading: null,
    id: 'worst_records',
    type: 'record',
    name: 'Средние показатели по лиге НБА.Худшие рекорды',
    link: 'NBA_worst_records.html',
  },
  {
    heading: null,
    id: 'worst_records',
    type: 'record',
    name: 'Средние показатели по лиге ABA.Худшие рекорды',
    link: 'ABA_worst_records.html',
  },
];
```

## masleaguesyears

```typescript
[
  {
    id: 'confs_standings_E',
    type: 'table',
    name: 'Турнирная таблица.Восточная конференция',
    link: '.html',
  },
  {
    id: 'confs_standings_W',
    type: 'table',
    name: 'Турнирная таблица.Западная конференция',
    link: '.html',
  },
  {
    id: 'per_game-team',
    type: 'table',
    name: 'Статистика за игру.Команда',
    link: '.html',
  },
  {
    id: 'per_game-opponent',
    type: 'table',
    name: 'Статистика за игру.Оппонент',
    link: '.html',
  },
  {
    id: 'totals-team',
    type: 'table',
    name: 'Статистика итогов.Команда',
    link: '.html',
  },
  {
    id: 'totals-opponent',
    type: 'table',
    name: 'Статистика итогов.Оппонент',
    link: '.html',
  },
  {
    id: 'per_poss-team',
    type: 'table',
    name: 'Статистика за 100 владений мячом.Команда',
    link: '.html',
  },
  {
    id: 'per_poss-opponent',
    type: 'table',
    name: 'Статистика за 100 владений мячом.Оппонент',
    link: '.html',
  },
  {
    id: 'advanced-team',
    type: 'table',
    name: 'Статистика дополнительно.Команда',
    link: '.html',
  },
  {
    id: 'shooting-team',
    type: 'table',
    name: 'Статистика бросков.Команда',
    link: '.html',
  },
  {
    id: 'shooting-opponent',
    type: 'table',
    name: 'Статистика бросков.Оппонент',
    link: '.html',
  },
  {
    id: 'all_awards',
    type: 'table',
    name: 'Награды сезона лиги',
    link: '.html',
  },
  {
    id: 'div_leaders',
    type: 'table',
    name: 'Лидеры сезона лиги',
    link: '.html',
  },
  {
    id: 'all-nba_1',
    type: 'tablep',
    name: 'All-NBA.Первая команда',
    link: '.html',
  },
  {
    id: 'all-nba_2',
    type: 'tablep',
    name: 'All-NBA.Вторая команда',
    link: '.html',
  },
  {
    id: 'all-nba_3',
    type: 'tablep',
    name: 'All-NBA.Третья команда',
    link: '.html',
  },
  {
    id: 'all-defensive_1',
    type: 'tablep',
    name: 'All-Defensive.Первая команда',
    link: '.html',
  },
  {
    id: 'all-defensive_2',
    type: 'tablep',
    name: 'All-Defensive.Вторая команда',
    link: '.html',
  },
  {
    id: 'all-rookie_1',
    type: 'tablep',
    name: 'All-Rookie.Первая команда',
    link: '.html',
  },
  {
    id: 'all-rookie_2',
    type: 'tablep',
    name: 'All-Rookie.Вторая команда',
    link: '.html',
  },
  {
    id: 'all_star_game_rosters_1',
    type: 'tablep',
    name: 'Списки участников Матча всех звезд.Восточная конференция',
    link: '.html',
  },
  {
    id: 'all_star_game_rosters_2',
    type: 'tablep',
    name: 'Списки участников Матча всех звезд.Западная конференция',
    link: '.html',
  },
  {
    id: 'expanded_standings',
    type: 'table',
    name: 'Расширенная турнирная таблица',
    link: '_standings.html',
  },
  {
    id: 'team_vs_team',
    type: 'table',
    name: 'Команда против команды',
    link: '_standings.html',
  },
  {
    id: 'schedule',
    type: 'schedule',
    name: 'Расписание.Октябрь',
    link: '_games-october.html',
  },
  {
    id: 'schedule',
    type: 'schedule',
    name: 'Расписание.Ноябрь',
    link: '_games-november.html',
  },
  {
    id: 'schedule',
    type: 'schedule',
    name: 'Расписание.Декабрь',
    link: '_games-december.html',
  },
  {
    id: 'schedule',
    type: 'schedule',
    name: 'Расписание.Январь',
    link: '_games-january.html',
  },
  {
    id: 'schedule',
    type: 'schedule',
    name: 'Расписание.Февраль',
    link: '_games-february.html',
  },
  {
    id: 'schedule',
    type: 'schedule',
    name: 'Расписание.Март',
    link: '_games-march.html',
  },
  {
    id: 'schedule',
    type: 'schedule',
    name: 'Расписание.Апрель',
    link: '_games-april.html',
  },
  {
    id: 'schedule',
    type: 'schedule',
    name: 'Расписание.Май',
    link: '_games-may.html',
  },
  {
    id: 'schedule',
    type: 'schedule',
    name: 'Расписание.Июнь',
    link: '_games-june.html',
  },
  {
    id: 'div_leaders',
    type: 'table',
    name: 'Лидеры сезона',
    link: '_leaders.html',
  },
  { id: 'NBA_coaches', type: 'table', name: 'Тренеры', link: '_coaches.html' },
  {
    id: 'totals_stats',
    type: 'table',
    name: 'Итоговые показатели игроков',
    link: '_totals.html',
  },
  {
    id: 'per_game_stats',
    type: 'table',
    name: 'Игрок за игру',
    link: '_per_game.html',
  },
  {
    id: 'per_minute_stats',
    type: 'table',
    name: 'Игрок за 36 минут',
    link: '_per_minute.html',
  },
  {
    id: 'per_poss_stats',
    type: 'table',
    name: 'Игрок на 100 очков',
    link: '_per_poss.html',
  },
  {
    id: 'advanced_stats',
    type: 'table',
    name: 'Дополнительно',
    link: '_advanced.html',
  },
  { id: 'pbp_stats', type: 'table', name: 'Игроки', link: '_play-by-play.html' },
  { id: 'shooting_stats', type: 'table', name: 'Броски', link: '_shooting.html' },
  {
    id: 'adj-shooting',
    type: 'table',
    name: 'Скорректированные броски',
    link: '_adj_shooting.html',
  },
  {
    id: 'rookies',
    type: 'table',
    name: 'Новобранцы.Карьера',
    link: '_rookies.html',
  },
  {
    id: 'rookies',
    type: 'table',
    name: 'Новобранцы.Сезонная статистика',
    link: '_rookies-season-stats.html',
  },
  { id: 'final', type: 'table', name: 'Финал', link: '_final.html' },
  { id: 'ratings', type: 'table', name: 'Рейтинги команд', link: '_ratings.html' },
  {
    id: 'div_leaderboard',
    type: 'grid',
    name: 'Номера униформы',
    link: '_numbers.html',
  },
  { id: 'transactions', type: 'transactions', name: 'Транзакции', link: '_transactions.html' },
];
```

## masplayoffsfinals

```typescript
[
  {
    title: '1986 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/3295__nba_finals-primary-1986.png',
  },
  {
    title: '1987 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/5192__nba_finals-primary-1987.png',
  },
  {
    title: '1988 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/9685__nba_finals-primary-1988.png',
  },
  {
    title: '1989 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/7884__nba_playoffs-champion-1989.png',
  },
  {
    title: '1990 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/4379__nba_playoffs-champion-1990.png',
  },
  {
    title: '1991 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/8718__nba_finals-primary-1991.png',
  },
  {
    title: '1992 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/5209__nba_playoffs-champion-1992.png',
  },
  {
    title: '1993 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/5962__nba_playoffs-champion-1993.png',
  },
  {
    title: '1994 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/1407__nba_playoffs-champion-1994.png',
  },
  {
    title: '1995 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/6047__nba_finals-primary-1995.png',
  },
  {
    title: '1996 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/5474__nba_playoffs-champion-1996.png',
  },
  {
    title: '1997 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/5551__nba_finals-primary-1997.png',
  },
  {
    title: '1998 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/3963__nba_finals-primary-1998.png',
  },
  {
    title: '1999 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/8370__nba_finals-primary-1999.png',
  },
  {
    title: '2000 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/1711__nba_finals-primary-2000.png',
  },
  {
    title: '2001 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/7612__nba_playoffs-champion-2001.png',
  },
  {
    title: '2002 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/9183__nba_finals-primary-2002.png',
  },
  {
    title: '2003 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/1691__nba_playoffs-champion-2003.png',
  },
  { title: '2004 NBA Finals', link: 'https://content.sportslogos.net/logos/6/6662/full/2986.gif' },
  { title: '2005 NBA Finals', link: 'https://content.sportslogos.net/logos/6/6662/full/2999.gif' },
  {
    title: '2006 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/4133__nba_finals-primary-2006.png',
  },
  {
    title: '2007 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/7azsgtp54ogab0w27h7p.gif',
  },
  {
    title: '2008 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/gc0ehbgvuonjd0jgj148lgg47.gif',
  },
  {
    title: '2009 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/efnje7xgveg9og1az7aflfpf8.gif',
  },
  {
    title: '2010 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/xuedfaehospgf7eivbrki29u2.gif',
  },
  {
    title: '2011 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/xuedfaehospgf7eivbrki29u2.gif',
  },
  {
    title: '2012 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/xuedfaehospgf7eivbrki29u2.gif',
  },
  {
    title: '2013 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/xuedfaehospgf7eivbrki29u2.gif',
  },
  {
    title: '2014 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/xuedfaehospgf7eivbrki29u2.gif',
  },
  {
    title: '2015 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/xuedfaehospgf7eivbrki29u2.gif',
  },
  {
    title: '2016 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/xuedfaehospgf7eivbrki29u2.gif',
  },
  {
    title: '2017 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/xuedfaehospgf7eivbrki29u2.gif',
  },
  {
    title: '2018 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/9014__nba_playoffs-champion-2018.png',
  },
  {
    title: '2019 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/2946__nba_finals-primary-2019.png',
  },
  {
    title: '2020 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/6493__nba_finals-primary-2020.png',
  },
  {
    title: '2021 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/_nba_finals_logo_primary_2021_sportslogosnet-7715.png',
  },
  {
    title: '2022 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/_nba_finals_logo_primary_2022_sportslogosnet-8863.png',
  },
  {
    title: '2023 NBA Finals',
    link: 'https://content.sportslogos.net/logos/6/6662/full/_nba_finals_logo_primary_2023_sportslogosnet-4419.png',
  },
];
```

## masallstarlogos

```typescript
[
  {
    title: '1967',
    link: 'https://content.sportslogos.net/logos/6/980/full/hh3h10w4c9j96xoaguk5vgzhi.gif',
  },
  {
    title: '1974',
    link: 'https://content.sportslogos.net/logos/6/980/full/4i3cm1upfzcgblpixjy5sf302.gif',
  },
  {
    title: '1975',
    link: 'https://content.sportslogos.net/logos/6/980/full/kw8j0mj8h5iv7o90lya05jbob.gif',
  },
  {
    title: '1976',
    link: 'https://content.sportslogos.net/logos/6/980/full/v1z9oxgodrrsgymlc6g1si5kp.gif',
  },
  {
    title: '1977',
    link: 'https://content.sportslogos.net/logos/6/980/full/2kxbfffenkeefhg1a9q1k4rf1.gif',
  },
  {
    title: '1979',
    link: 'https://content.sportslogos.net/logos/6/980/full/nw025u6w6e3evj97lsnmre5pu.gif',
  },
  { title: '1980', link: 'https://content.sportslogos.net/logos/6/980/full/5257.gif' },
  {
    title: '1981',
    link: 'https://content.sportslogos.net/logos/6/980/full/q67zrjg7xh4tt6amkddxhgdbb.gif',
  },
  {
    title: '1982',
    link: 'https://content.sportslogos.net/logos/6/980/full/3019__nba_all-star_game-primary-1982.png',
  },
  {
    title: '1983',
    link: 'https://content.sportslogos.net/logos/6/980/full/3xuhj1th6up27erap6876h3nu.gif',
  },
  {
    title: '1984',
    link: 'https://content.sportslogos.net/logos/6/980/full/l6alhshh78fo4wrgnd4es52nn.gif',
  },
  {
    title: '1985',
    link: 'https://content.sportslogos.net/logos/6/980/full/6461__nba_all-star_game-primary-1985.png',
  },
  {
    title: '1986',
    link: 'https://content.sportslogos.net/logos/6/980/full/22ta3sjybehomd6gnwsnhhwgz.gif',
  },
  {
    title: '1987',
    link: 'https://content.sportslogos.net/logos/6/980/full/rbleglge5hjengshtu24ppn0g.gif',
  },
  { title: '1988', link: 'https://content.sportslogos.net/logos/6/980/full/5259.gif' },
  {
    title: '1989',
    link: 'https://content.sportslogos.net/logos/6/980/full/8c2806se0nwgfhhecoqq3372u.gif',
  },
  { title: '1990', link: 'https://content.sportslogos.net/logos/6/980/full/5568.gif' },
  { title: '1991', link: 'https://content.sportslogos.net/logos/6/980/full/4750.gif' },
  { title: '1992', link: 'https://content.sportslogos.net/logos/6/980/full/4751.gif' },
  {
    title: '1993',
    link: 'https://content.sportslogos.net/logos/6/980/full/7mi3t5ah4xfkcijvjl43jtho1.gif',
  },
  { title: '1994', link: 'https://content.sportslogos.net/logos/6/980/full/4754.gif' },
  { title: '1995', link: 'https://content.sportslogos.net/logos/6/980/full/4755.gif' },
  {
    title: '1996',
    link: 'https://content.sportslogos.net/logos/6/980/full/3fmy4hd6ps0ehjlze9iohse8m.gif',
  },
  {
    title: '1997',
    link: 'https://content.sportslogos.net/logos/6/980/full/ut9f4wi0aj0ddv7qqfgfml7xa.gif',
  },
  {
    title: '1998',
    link: 'https://content.sportslogos.net/logos/6/980/full/5ypbcfg8ohzufe3eh4vzcvd8q.gif',
  },
  {
    title: '2000',
    link: 'https://content.sportslogos.net/logos/6/980/full/n7qm8y0br2yi0rbonsvvqxv3p.gif',
  },
  {
    title: '2001',
    link: 'https://content.sportslogos.net/logos/6/980/full/pue78ud4yv6osxfgyo4gp0kez.gif',
  },
  { title: '2002', link: 'https://content.sportslogos.net/logos/6/980/full/4763.png' },
  {
    title: '2003',
    link: 'https://content.sportslogos.net/logos/6/980/full/gqdhjxae6ooyhb8oneed71yds.gif',
  },
  {
    title: '2004',
    link: 'https://content.sportslogos.net/logos/6/980/full/y4nlzob7pjaah6u680nfmoipm.gif',
  },
  { title: '2005', link: 'https://content.sportslogos.net/logos/6/980/full/2974.gif' },
  { title: '2006', link: 'https://content.sportslogos.net/logos/6/980/full/2991.png' },
  {
    title: '2007',
    link: 'https://content.sportslogos.net/logos/6/980/full/hq7kr5gmydgwm3yefhfq.gif',
  },
  {
    title: '2008',
    link: 'https://content.sportslogos.net/logos/6/980/full/nn19hyetvxj9efrdkpln.gif',
  },
  {
    title: '2009',
    link: 'https://content.sportslogos.net/logos/6/980/full/7fox7wf9y4xf2t9vitztng58o.gif',
  },
  {
    title: '2010',
    link: 'https://content.sportslogos.net/logos/6/980/full/hm0hxtghkv2yhfcrlc0of3iem.gif',
  },
  {
    title: '2011',
    link: 'https://content.sportslogos.net/logos/6/980/full/x7i021q705w8tl7sa77anxep5.gif',
  },
  {
    title: '2012',
    link: 'https://content.sportslogos.net/logos/6/980/full/hdw8vndehenwhmur48sio1mnk.gif',
  },
  {
    title: '2013',
    link: 'https://content.sportslogos.net/logos/6/980/full/461_-nba_all-star_game-primary-2013.gif',
  },
  {
    title: '2014',
    link: 'https://content.sportslogos.net/logos/6/980/full/7685__nba_all-star_game-primary-2014.gif',
  },
  {
    title: '2015',
    link: 'https://content.sportslogos.net/logos/6/980/full/3453__nba_all-star_game-primary-2015.png',
  },
  {
    title: '2016',
    link: 'https://content.sportslogos.net/logos/6/980/full/2998__nba_all-star_game-primary-2016.png',
  },
  {
    title: '2017',
    link: 'https://content.sportslogos.net/logos/6/980/full/1758__nba_all-star_game-primary-2017.png',
  },
  {
    title: '2018',
    link: 'https://content.sportslogos.net/logos/6/980/full/9141__nba_all-star_game-primary-2018.png',
  },
  {
    title: '2019',
    link: 'https://content.sportslogos.net/logos/6/980/full/2423__nba_all-star_game-primary-2019.png',
  },
  {
    title: '2020',
    link: 'https://content.sportslogos.net/logos/6/980/full/8854__nba_all-star_game-primary-2020.png',
  },
  {
    title: '2021',
    link: 'https://content.sportslogos.net/logos/6/980/full/8947__nba_all-star_game-primary-2021.png',
  },
  {
    title: '2022',
    link: 'https://content.sportslogos.net/logos/6/980/full/7716__nba_all-star_game-primary-20221.png',
  },
  {
    title: '2023',
    link: 'https://content.sportslogos.net/logos/6/980/full/_nba_all-star_game_logo_primary_2023_sportslogosnet-8520.png',
  },
];
```

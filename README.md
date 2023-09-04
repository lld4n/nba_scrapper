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

| API                      | Explanation                                                               |
| ------------------------ | ------------------------------------------------------------------------- |
| `api/other/actualseason` | Возвращает статистику текущего сезона.                                    |
|                          | `east` `{type - link.wins.loses, href - string.null, text - string }[][]` |
|                          |                                                                           |
| `api/other/search`       | Возвращает результаты поиска                                              |

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

|           | API                      | Explanation                                                                                                                                                                                            |
| --------: | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|   `other` |                          |                                                                                                                                                                                                        |
|           | `api/other/actualseason` | Возвращает статистику текущего сезона<br><br>`east` `{type - link.wins.loses, href - string.null, text - string}[][]`<br><br> `west` `{type - link.wins.loses, href - string.null, text - string}[][]` |
|           |                          |                                                                                                                                                                                                        |
|           | `api/other/search/:key`  | Возвращает результаты поиска по ключу key. Пробел указывается через `+`<br><br>`{type - link, href - string, text - string}[]`                                                                         |
| `players` |                          |                                                                                                                                                                                                        |
|           | `api/players/list`       | Возвращает список игроков со страницы [players](https://www.basketball-reference.com/players/)<br><ul><li>`Array[]`</li></ul>                                                                          |

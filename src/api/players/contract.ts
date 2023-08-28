import cheerio from 'cheerio';
import axios from 'axios';
import { utilsalphabets, utilsreformat } from '../../utils';
import { responseType } from '../../@types/response';
import { dataPlayersContractType } from '../../@types/data';

export async function playerscontract(alphabet: string, path: string) {
  const response: responseType = {
    OK: true,
  };
  if (!utilsalphabets.includes(alphabet.toUpperCase())) {
    response.OK = false;
    return response;
  }
  const html = await axios.get(
    'https://www.basketball-reference.com/players/' + alphabet + '/' + path,
  );
  const $ = cheerio.load(utilsreformat(html.data));
  if (!$('#div_contract').html()) {
    response.OK = false;
    return response;
  }
  const data: dataPlayersContractType = {
    contracts: [],
    bullets: [],
  };
  $('#div_contract .thead th').each((i, element) => {
    data.contracts.push({
      key: $(element).text().trim(),
      value: '',
    });
  });
  $('#div_contract tbody td').each((i, element) => {
    data.contracts[i].value = $(element).text().trim();
  });
  $('#div_contract .bullets li').each((_, element) => {
    data.bullets.push($(element).text().trim());
  });
  response.data = data;
  return response;
}

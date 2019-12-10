import { api } from '../helpers/api';

export function fetchIndex() {
  return api.get('http://www.mocky.io/v2/5de4b51130000061009f7a65');
}

export function fetchChart() {
  return api.get('http://www.mocky.io/v2/5de6295f2e000078003200eb');
}

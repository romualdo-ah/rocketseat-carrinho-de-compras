import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/romualdo-ah/rocketseat-carrinho-de-compras',
});

import axios from './index';
import { POKEMON } from './apiUrl';

export const pokemonListApi = async params => {
  try {
    const { data } = await axios(POKEMON.LIST, { params });
    return data;
  } catch (error) {
    throw error;
  }
};
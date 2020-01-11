import { call, put, takeLatest } from 'redux-saga/effects';

import { pokemonListApi } from 'state/api/pokemon';
import { POKEMON_LIST_REQUESTED } from './constants';
import {
  pokemonListSucceeded,
  pokemonListfailed,
} from './actions';

export function* fetchPokemonList({ params }) {
  try {
    const data = yield call(pokemonListApi, params);
    yield put(pokemonListSucceeded(data));
  } catch (error) {
    yield put(pokemonListfailed(error));
  }
};

export const pokemonSaga = [
  takeLatest(POKEMON_LIST_REQUESTED, fetchPokemonList),
];

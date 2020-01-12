import produce from 'immer';

import {
  POKEMON_LIST_REQUESTED,
  POKEMON_LIST_SUCCEEDED,
  POKEMON_LIST_FAILED,
  POKEMON_DETAIL_REQUESTED,
  POKEMON_DETAIL_SUCCEEDED,
  POKEMON_DETAIL_FAILED,
} from './constants';

export const initialState = {
  pokemonList: {
    isLoading: false,
    data: [],
    previous: null,
    next: null,
  },
  pokemonDetail: {
    isLoading: false,
    data: {},
  },
};

const pokemonReducers = (state = initialState, action) => 
  produce(state, draft => {
    switch(action.type) {
      // Pokemon list reducers
      case POKEMON_LIST_REQUESTED:
        draft.pokemonList.isLoading = false;
        break;
      case POKEMON_LIST_SUCCEEDED:
        draft.pokemonList.isLoading = false;
        draft.pokemonList.data = action.data.results;
        draft.pokemonList.previous = action.data.previous;
        draft.pokemonList.next = action.data.next;
        break;
      case POKEMON_LIST_FAILED:
        draft.pokemonList.isLoading = false;
        break;

      // Pokemon detail reducers
      case POKEMON_DETAIL_REQUESTED:
        draft.pokemonDetail.isLoading = false;
        break;
      case POKEMON_DETAIL_SUCCEEDED:
        draft.pokemonDetail.isLoading = false;
        draft.pokemonDetail.data = action.data;
        break;
      case POKEMON_DETAIL_FAILED:
        draft.pokemonDetail.isLoading = false;
        break;
      default:
        return draft;
    }
  }); 

export default pokemonReducers;

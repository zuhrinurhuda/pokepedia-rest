import produce from 'immer';

import {
  POKEMON_LIST_REQUESTED,
  POKEMON_LIST_SUCCEEDED,
  POKEMON_LIST_FAILED,
} from './constants';

export const initialState = {
  pokemonList: {
    isLoading: false,
    data: [],
    previous: null,
    next: null,
  }
};

const pokemonReducers = (state = initialState, action) => 
  produce(state, draft => {
    switch(action.type) {
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
      default:
        return draft;
    }
  }); 

export default pokemonReducers;

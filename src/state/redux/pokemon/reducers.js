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
    results: [],
  },
  pokemonSpecies: [],
  pokemonDetail: {
    isLoading: false,
    flavor_text_entries: [],
    color: {
      name: '',
    },
    habitat: {
      name: '',
    },
    shape: {
      name: '',
    }
  },
};

const pokemonReducers = (state = initialState, action) => 
  produce(state, draft => {
    switch(action.type) {
      // Pokemon list reducers
      case POKEMON_LIST_REQUESTED:
        draft.pokemonList.isLoading = true;
        break;
      case POKEMON_LIST_SUCCEEDED:
        draft.pokemonList = {
          ...state.pokemonList,
          ...action.data.pokemonList,
          isLoading: false
        };
        draft.pokemonSpecies = action.data.pokemonSpecies;
        break;
      case POKEMON_LIST_FAILED:
        draft.pokemonList.isLoading = false;
        break;

      // Pokemon detail reducers
      case POKEMON_DETAIL_REQUESTED:
        draft.pokemonDetail.isLoading = true;
        break;
      case POKEMON_DETAIL_SUCCEEDED:
        draft.pokemonDetail = {
          ...state.pokemonDetail,
          ...action.data,
          isLoading: false,
        };
        break;
      case POKEMON_DETAIL_FAILED:
        draft.pokemonDetail.isLoading = false;
        break;
      default:
        return draft;
    }
  }); 

export default pokemonReducers;

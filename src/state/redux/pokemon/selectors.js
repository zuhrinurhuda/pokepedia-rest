import { createSelector } from 'reselect';

import getPokemonId from 'utils/getPokemonId';
import { initialState } from './reducers';

const pokemonSelector = state => state.pokemonReducers || initialState;
const pokemonListSelector = state => state.pokemonReducers.pokemonList.data;

const newPokemonlistSelector = createSelector(
  pokemonListSelector,
  pokemonList => pokemonList.map(pokemon => {
    const id = getPokemonId(pokemon.url);
    return {
      ...pokemon,
      id,
      image: `${process.env.REACT_APP_IMAGE_URL}${id}.png`,
    }
  }),
);

const pokemonPageSelector = () => 
  createSelector(
    pokemonSelector,
    newPokemonlistSelector,
    (state, pokemonList) => ({
      ...state,
      pokemonList: {
        ...state.pokemonList,
        data: pokemonList,
      },
    }),
  );

export default pokemonPageSelector;

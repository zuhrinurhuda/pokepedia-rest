import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Button, Icon } from 'antd';
import { createStructuredSelector } from 'reselect';

import {
  PokemonCard,
  PokemonDetail,
} from 'views/components';
import {
  pokemonListRequested,
  pokemonDetailRequested,
} from 'state/redux/pokemon/actions';
import pokemonPageSelector from 'state/redux/pokemon/selectors';

const columnGrid = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 6,
  xl: 4,
  xxl: 4,
};

const PokemonList = props => {
  const {
    fetchPokemonList,
    fetchPokemonDetail,
    pokemon,
  } = props;
  const {
    pokemonList,
    pokemonDetail
  } = pokemon;
  const [isOpen, setIsOpen] = useState(false);
  // console.log('props', props);
  useEffect(() => {
    fetchPokemonList(pokemonList.params);
  }, [fetchPokemonList, pokemonList.params]);

  const toggleModal = id => () => {
    setIsOpen(!isOpen);

    if (id && id !== pokemonDetail.id) {
      fetchPokemonDetail(id)
    }
  };

  const handleBackward = () => {
    if (pokemonList.params.offset) {
      fetchPokemonList({
        ...pokemonList.params,
        offset: pokemonList.params.offset - pokemonList.params.limit
      })
    }
  };

  const handleForward = () => {
    fetchPokemonList({
      ...pokemonList.params,
      offset: pokemonList.params.offset + pokemonList.params.limit
    })
  };

  return (
    <>
      <Row
        type="flex"
        justify="start"
        gutter={24}
        style={{
          padding: '12px 0',
        }}
      >
        {pokemonList.results.map(pokemon => (
          <Col
            key={pokemon.id}
            style={{
              paddingTop: 12,
              paddingBottom: 12,
            }}
            {...columnGrid}
          >
            <PokemonCard
              isLoading={pokemonList.isLoading}
              pokemon={pokemon}
              toggleModal={toggleModal(pokemon.id)}
            />
          </Col>
        ))}
        <PokemonDetail
          isOpen={isOpen}
          toggleModal={toggleModal}
          pokemonDetail={pokemonDetail}
        />
      </Row>
      <Row type="flex" justify="space-between">
        <Button
          onClick={handleBackward}
          disabled={!pokemonList.params.offset}
        >
          <Icon type="backward" />
          Prev
        </Button>
        <Button onClick={handleForward}>
          Next
          <Icon type="forward" />
        </Button>
      </Row>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  pokemon: pokemonPageSelector(),
});

const mapDispatchToProps = dispatch => ({
  fetchPokemonList: params => dispatch(pokemonListRequested(params)),
  fetchPokemonDetail: id => dispatch(pokemonDetailRequested(id)),
});

PokemonList.propsTypes = {
  fetchPokemonList: PropTypes.func.isRequired,
  pokemon: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

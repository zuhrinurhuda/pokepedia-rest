import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { createStructuredSelector } from 'reselect';

import PokemonCard from 'components/PokemonCard';
import { pokemonListRequested } from 'state/redux/pokemon/actions';
import pokemonPageSelector from 'state/redux/pokemon/selectors';

const PokemonList = props => {
  const { fetchPokemonList, pokemon } = props;
  const { pokemonList } = pokemon;

  useEffect(() => {
    fetchPokemonList({ limit: 18 });
  }, [fetchPokemonList]);

  return (
    <Row
      type="flex"
      justify="start"
      gutter={24}
      style={{
        padding: '12px 0',
      }}
    >
      {pokemonList.data.map(pokemon => (
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={4}
          xxl={4}
          key={pokemon.id}
          style={{
            paddingTop: 12,
            paddingBottom: 12,
          }}
        >
          <PokemonCard pokemon={pokemon} />
        </Col>
      ))}
    </Row>
  );
};

const mapStateToProps = createStructuredSelector({
  pokemon: pokemonPageSelector(),
});

const mapDispatchToProps = dispatch => ({
  fetchPokemonList: params => dispatch(pokemonListRequested(params)),
});

PokemonList.propsTypes = {
  fetchPokemonList: PropTypes.func.isRequired,
  pokemon: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

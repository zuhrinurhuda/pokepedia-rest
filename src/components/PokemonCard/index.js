import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'antd';

const PokemonCard = props => {
  const {
    pokemon,
    toggleModal
  } = props;

  return (
    <Card
      hoverable
      key={pokemon.id}
      loading={pokemon.isLoading}
      cover={
        <img alt={pokemon.name} src={pokemon.image} />
      }
      bodyStyle={{
        borderTop: '1px solid #ebedf0',
      }}
      onClick={toggleModal}
    >
      <Card.Meta
        title={pokemon.name.toLocaleUpperCase()}
        description={pokemon.habitat}
      />
    </Card>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default PokemonCard;

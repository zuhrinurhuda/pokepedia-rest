import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'antd';

const PokemonCard = props => {
  const { pokemon } = props;

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
};

export default PokemonCard;

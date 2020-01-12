import React from 'react';
import PropTypes from 'prop-types';

import { Card, Tag } from 'antd';

import habitatColors from 'utils/habitatColors';

const PokemonCard = props => {
  const {
    isLoading,
    pokemon,
    toggleModal
  } = props;

  return (
    <Card
      hoverable
      key={pokemon.id}
      loading={isLoading}
      cover={!isLoading && <img alt={pokemon.name} src={pokemon.image} />}
      bodyStyle={{ borderTop: '1px solid #ebedf0' }}
      onClick={toggleModal}
    >
      <Card.Meta
        title={pokemon.name.toUpperCase()}
        description={
          <Tag color={habitatColors[pokemon.habitat]}>
            {pokemon.habitat}
          </Tag>
        }
      />
    </Card>
  );
};

PokemonCard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  pokemon: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default PokemonCard;

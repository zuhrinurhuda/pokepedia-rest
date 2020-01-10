import React from 'react';
import { Row, Col } from 'antd';

import PokemonCard from 'components/PokemonCard';

const dummy = [
  {
    id: 1,
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    habitat: 'grassland',
  },
  {
    id: 1,
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    habitat: 'grassland',
  },
  {
    id: 2,
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    habitat: 'grassland',
  },
  {
    id: 3,
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    habitat: 'grassland',
  },
  {
    id: 4,
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    habitat: 'grassland',
  },
  {
    id: 5,
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    habitat: 'grassland',
  },
  {
    id: 6,
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    habitat: 'grassland',
  },
  {
    id: 7,
    name: 'bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    habitat: 'grassland',
  },
  
];

const PokemonList = () => {
  return (
    <Row
      type="flex"
      justify="start"
      gutter={24}
      style={{
        padding: '12px 0',
      }}
    >
      {dummy.map(pokemon => (
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={4}
          xxl={4}
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

PokemonList.propsTypes = {};

export default PokemonList;

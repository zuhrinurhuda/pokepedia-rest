import React from 'react';
import { Row } from 'antd';

import logo from 'assets/images/pokemon_logo.png'
import PokemonList from 'views/containers/PokemonList';

import {
  StyledLayout,
  StyledHeader,
  StyledContent
} from './styles';

function App() {
  return (
    <StyledLayout>
      <StyledHeader>
        <Row type="flex" justify="center">
          <img src={logo} alt="Pokemon Logo" height={54} />
        </Row>
      </StyledHeader>
      <StyledContent>
        <PokemonList />
      </StyledContent>
    </StyledLayout>
  );
}

export default App;

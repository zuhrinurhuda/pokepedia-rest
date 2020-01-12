import React from 'react';
import { Layout, Row } from 'antd';

import logo from 'assets/images/pokemon_logo.png'
import containerBg from 'assets/images/container_bg.png'
import PokemonList from 'views/containers/PokemonList';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#424242' }}>
        <Row type="flex" justify="center">
          <img src={logo} alt="Pokemon Logo" height={54} />
        </Row>
      </Header>
      <Content style={{ padding: '64px 50px', margin: 0, background: `url(${containerBg})`  }}>
        <PokemonList />
      </Content>
    </Layout>
  );
}

export default App;

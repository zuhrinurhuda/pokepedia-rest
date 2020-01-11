import React from 'react';
import { Layout, Typography } from 'antd';

import PokemonList from 'containers/PokemonList';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Title>POKEPEDIA</Title>
      </Header>
      <Content style={{ margin: '0 50px', marginTop: 64  }}>
        <PokemonList />
      </Content>
    </Layout>
  );
}

export default App;

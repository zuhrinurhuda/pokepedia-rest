import React from 'react';
import { Layout, Typography } from 'antd';

import PokemonList from 'containers/PokemonList';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout>
      <Header>
        <Title>POKEPEDIA</Title>
      </Header>
      <Content style={{ margin: '0 50px' }}>
        <PokemonList />
      </Content>
    </Layout>
  );
}

export default App;

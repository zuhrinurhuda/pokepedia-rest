import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Modal, Avatar, Typography, Button } from 'antd';
import { createStructuredSelector } from 'reselect';

import bodyBg from 'assets/images/body_bg.png';
import PokemonCard from 'components/PokemonCard';
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
    pokemon,
    fetchPokemonDetail,
  } = props;
  const { pokemonList, pokemonDetail } = pokemon;
  const [isOpen, setIsOpen] = useState(false);
  console.log('props', props);
  useEffect(() => {
    fetchPokemonList({ limit: 18 });
  }, [fetchPokemonList]);

  const toggleModal = id => () => {
    setIsOpen(!isOpen);
    if (id) {
      console.log(id);
      fetchPokemonDetail(id)
    }
  };

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
          key={pokemon.id}
          style={{
            paddingTop: 12,
            paddingBottom: 12,
          }}
          {...columnGrid}
        >
          <PokemonCard
            pokemon={pokemon}
            toggleModal={toggleModal(pokemon.id)}
          />
        </Col>
      ))}
      <Modal
        visible={isOpen}
        onCancel={toggleModal()}
        closable={false}
        footer={null}
        bodyStyle={{ padding: 0 }}
      >
        <Row
          type="flex"
          align="middle"
          style={{
            flexDirection: 'column',
            background: `url(${bodyBg})`,
          }}
        >
          <Avatar
            src={`${process.env.REACT_APP_IMAGE_URL}${pokemonDetail.data.id}.png`}
            size={96}
            style={{ background: 'white', marginTop: 24 }}
          />
          <Typography.Title level={3}>
            {pokemonDetail.data.name}
          </Typography.Title>
        </Row>
        <Row style={{ padding: 24 }}>
          <Row>
            <div>
              <strong>Description</strong>
            </div>
            <p>Lorem ipsum dolor sit amet constecteur</p>
          </Row>
          <Row>
            <Col span={6}>
              <div>
                <strong>Color</strong>
              </div>
              <p>Color</p>
            </Col>
            <Col span={6}>
              <div>
                <strong>Shape</strong>
              </div>
              <p>Shape</p>
            </Col>
            <Col span={6}>
              <div>
                <strong>Weight</strong>
              </div>
              <p>Weight</p>
            </Col>
            <Col span={6}>
              <div>
                <strong>Height</strong>
              </div>
              <p>Height</p>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <div>
                <strong>Habitat</strong>
              </div>
              <p>Habitat</p>
            </Col>
          </Row>
          <Row type="flex" justify="end">
            <Button onClick={toggleModal()}>
              Close
            </Button>
          </Row>
        </Row>
      </Modal>
    </Row>
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

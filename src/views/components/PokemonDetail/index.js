import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Row,
  Col,
  Avatar,
  Typography,
  Button
} from 'antd';

import bodyBg from 'assets/images/body_bg.png';

const PokemonDetail = props => {
  const {
    isOpen,
    toggleModal,
    pokemonDetail
  } = props;

  return (
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
          src={pokemonDetail.id &&
            `${process.env.REACT_APP_IMAGE_URL}${pokemonDetail.id}.png`
          }
          size={96}
          style={{ background: 'white', marginTop: 24 }}
        />
        <Typography.Title level={3}>
          {pokemonDetail.name}
        </Typography.Title>
      </Row>
      <Row style={{ padding: 24 }}>
        <Row>
          <div>
            <strong>Description</strong>
          </div>
          <p>
             {pokemonDetail.flavor_text_entries.length 
              && pokemonDetail.flavor_text_entries[1].flavor_text
            }
          </p>
        </Row>
        <Row>
          <Col span={6}>
            <div>
              <strong>Color</strong>
            </div>
            <p>{pokemonDetail.color.name}</p>
          </Col>
          <Col span={6}>
            <div>
              <strong>Shape</strong>
            </div>
            <p>{pokemonDetail.shape.name}</p>
          </Col>
          <Col span={6}>
            <div>
              <strong>Weight</strong>
            </div>
            <p>{pokemonDetail.weight}</p>
          </Col>
          <Col span={6}>
            <div>
              <strong>Height</strong>
            </div>
            <p>{pokemonDetail.height}</p>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <div>
              <strong>Habitat</strong>
            </div>
            <p>{pokemonDetail.habitat.name}</p>
          </Col>
        </Row>
        <Row type="flex" justify="end">
          <Button onClick={toggleModal()}>
            Close
          </Button>
        </Row>
      </Row>
    </Modal>
  );
};

PokemonDetail.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  pokemonDetail: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PokemonDetail;

import styled from 'styled-components';
import { Row } from 'antd';

import bodyBg from 'assets/images/body_bg.png';

export const DetailCover = styled(Row)`
  flex-direction: column;
  background: ${`url(${bodyBg})`};

  & > h3 {
    text-transform: uppercase;
  }
`;

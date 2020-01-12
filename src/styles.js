import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledLayout = styled(Layout)`
  && {
    background: none;
  }
`;

export const StyledHeader = styled(Layout.Header)`
  && {
    width: 100%;
    position: fixed;
    z-index: 1;
    background: rgb(66, 66, 66);
  }

  & > div {
    height: 64px;
    align-items: center;
  }
`;

export const StyledContent = styled(Layout.Content)`
  padding: 64px 50px 24px;
  margin: 0;
`;


import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;
  @media screen and (min-width: 1200px) {
    flex-wrap: nowrap;
  }
`;

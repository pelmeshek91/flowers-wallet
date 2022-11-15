import styled from 'styled-components';

export const Diagram = styled.div`
  & div {
    position: relative;
    & p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -30%);
      margin: 0;

      font-family: 'Circe';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
      text-align: center;

      color: #000000;
    }
  }
  @media screen and (min-width: 768px) {
    min-width: 336px;
  }
`;

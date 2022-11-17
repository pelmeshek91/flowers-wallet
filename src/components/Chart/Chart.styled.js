import styled from 'styled-components';

export const Diagram = styled.div`
  @media screen and (min-width: 768px) {
    min-width: 336px;
  }
`;
export const Box = styled.div`
  position: relative;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & h4 {
    margin: 0;
    font-family: 'Poppins Bold';
    font-size: 36px;
    text-align: center;

    color: #000000;
  }
  & h5 {
    margin: 0;
    font-family: 'Poppins Bold';
    font-size: 24px;
    text-align: center;

    color: #000000;
  }
  & p {
    margin: 0;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    color: #615e5e;
  }
`;

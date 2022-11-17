import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  gap: 32px;

  & h2 {
    font-family: 'Poppins Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    margin: 0;
    text-align: center;

    color: #000000;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    & h2 {
      text-align: left;
    }
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding-top: 32px;
    padding-left: 70px;
  }
`;

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

export const StatistBox = styled.div`
  width: 100%;
`;

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    margin-bottom: 20px;
  }
`;

import styled from 'styled-components';
export const Div = styled.div`
  display: flex;
  padding: 0 16px;
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
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-left: 70px;
  gap: 32px;

  & h2 {
    font-family: 'Poppins Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 45px;
    margin: 0;

    color: #000000;
    margin-bottom: 20px;
  }
`;

export const DigrBox = styled.div`
  display: block;
  width: 288px;
  height: 288px;
  background-color: aquamarine;
`;
export const StatistBox = styled.div`
  width: 100%;
`;

export const FilterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 20px;
`;

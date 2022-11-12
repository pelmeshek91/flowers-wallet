import styled from 'styled-components';
export const Div = styled.div`
  display: flex;
`;

export const Box = styled.div`
  display: flex;
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
  min-width: 395px;
`;

export const FilterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 20px;
`;

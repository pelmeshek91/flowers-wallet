import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 28px 15px;

  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(25px);
  border-radius: 30px;
  overflow: hidden;
  & div {
    display: block;
    margin: 0;

    font-weight: 700;
    font-size: 18px;
    line-height: 27px;

    color: #000000;
  }
`;
export const Decription = styled.div`
  padding-left: 68px;
  padding-right: 28px;
  display: flex;
  justify-content: space-between;
  & p {
    margin: 0;
    padding-top: 16px;
    padding-bottom: 14px;
  }
`;

export const Total = styled.li`
  padding-left: 28px;
  padding-right: 28px;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: #000000;
`;

export const Expenses = styled.p`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  margin: 0;
  & span {
    margin: 0;
    color: #ff6596;
  }
`;
export const Income = styled.p`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  margin: 0;
  & span {
    margin: 0;
    color: #24cca7;
  }
`;
export const Item = styled.li`
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #000000;
  border-bottom: 1px solid #dcdcdf;
`;

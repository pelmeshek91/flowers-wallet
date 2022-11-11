import styled from 'styled-components';

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + randomColor;
};

export const List = styled.ul`
  max-width: 395px;
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

    font-family: 'Circe';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;

    color: #000000;
  }
`;

export const Item = styled.li`
  position: relative;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #000000;
  border-bottom: 1px solid #dcdcdf;

  &::before {
    content: ' ';
    position: absolute;
    width: 24px;
    height: 24px;
    left: 28px;
    top: 50%;
    transform: translateY(-50%);

    background: ${() => setBg()};
    border-radius: 2px;
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

  font-family: 'Circe';
  font-style: normal;
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

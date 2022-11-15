import { styled } from '@mui/system';
import OptionUnstyled, {
  optionUnstyledClasses,
} from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import arrowDown from 'images/arrowDown.svg';

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

export const StyledButton = styled('button')(
  ({ theme }) => `
  font-size: 16px;
  box-sizing: border-box;
  text-align: left;
  line-height: 1.5;
  
  position: relative;
  min-width: 160px;
  padding: 13px 16px;


  border: 1px solid #000000;
  border-radius: 30px;
  background: none;
  color: #000000;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: url(${arrowDown});
	  transform: rotate(180deg)
    }
  }

  &::after {
    content: url(${arrowDown});
	position: absolute;
	top: 13px;
	right: 12px;
	width: 24px;
	height: 24px;
    float: right;
  }
  `
);
export const StyledListbox = styled('ul')(
  ({ theme }) => `
   min-width: 160px;

  margin: 12px 0;
  box-sizing: border-box;
  border-radius: 20px;
  overflow: auto;
  outline: 0px;
  
  font-size: 16px;
  color: #000000;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 6px 15px rgb(0 0 0 / 10%);
  backdrop-filter: blur(50px);
  `
);

export const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 14px 20px;
  min-width: 160px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

 
//! selected
  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #FFF6F9;
    color: #FF6596;
  }

 
//! hover
  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background:#FFF6F9;
	color: #FF6596;
  }
  `
);

export const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

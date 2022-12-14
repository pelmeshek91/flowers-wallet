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
export const SelectBox = styled('div')(
  ({ theme }) => `
	position:relative;
	& div{
	border-radius: 20px;
	box-shadow: 0px 6px 15px rgb(0 0 0 / 10%);
	width: 100%;
	max-height: 450px;
	overflow-y: auto
  }
  `
);

export const StyledButton = styled('button')(
  ({ theme }) => `
  font-size: 16px;
  width:100%;
  box-sizing: border-box;
  text-align: left;
  line-height: 1.5;
  cursor: pointer;
  position: relative;
  padding: 13px 16px;


  border: 1px solid #000000;
  border-radius: 30px;
  background: none;
  color: #000000;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
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
  & div{
	width:100px;
	
  }
  `
);
export const StyledListbox = styled('ul')(
  ({ theme }) => `

  box-sizing: border-box;
  border-radius: 20px;
  width: 100%;
  height:300px
  outline: 0px;
  
  font-size: 16px;
  color: #000000;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(100px);
  overflow: hidden;
  `
);

export const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 14px 20px;
    cursor: pointer;

  &:last-of-type {
	  border-bottom: none;
	}
	
	
	//! selected
	&.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
	border-radius: 20px;
    background-color: #FF6596;
    color: #fff;
  }

 
//! hover
  &:hover:not(.${optionUnstyledClasses.disabled}) {
	border-radius: 20px;
    background:#FFF6F9;
	color: #FF6596;
  }
  `
);

export const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

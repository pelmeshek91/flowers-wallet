import * as React from 'react';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import {
  StyledButton,
  StyledListbox,
  StyledOption,
  StyledPopper,
  SelectBox,
} from './Dropdown.styled';

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} ref={ref} slots={slots} />;
});

export const Dropdown = ({ data, name, onOptionClicked }) => {
  return (
    <SelectBox>
      <CustomSelect
        defaultValue={0}
        onChange={e => onOptionClicked(name, e.target.id)}
      >
        {data.map(item => (
          <StyledOption key={item.id} id={item.id} value={item.id}>
            {item.label}
          </StyledOption>
        ))}
      </CustomSelect>
    </SelectBox>
  );
};

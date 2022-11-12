import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Dropdown.styled.scss';

export const Dropdown = ({ data, name }) => {
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ width: '100%', margin: 0 }}>
        <InputLabel id="demo-controlled-open-select-label">{name}</InputLabel>
        <Select
          style={{
            borderRadius: '30px',
            div: {
              background: 'none',
              overflow: 'hidden',
              borderRadius: '20px',
            },
          }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label={name}
          onChange={handleChange}
        >
          {data.map(item => (
            <MenuItem key={item.id} value={item.id}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

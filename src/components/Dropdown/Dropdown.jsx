import { useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import './Dropdown.styled.scss';

export const Dropdown = ({ data, name }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = id => {
    setSelectedItem(id);
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem !== null
          ? data.find(item => item.id === selectedItem).label
          : name}
        <i className={` icon ${isOpen && 'open'}`}>
          <MdArrowBackIosNew />
        </i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {data.map(item => (
          <div
            key={item.id}
            className="dropdown-item"
            onClick={() => handleItemClick(item.id)}
            id={item.id}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

import { useState } from 'react';
import { MdArrowBackIosNew } from 'react-icons/md';
import './Dropdown.styled.scss';

export const Dropdown = ({ data, name, toggleSelect }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="dropdown">
      <select reuired>
        <option value="">--選択</option>
        <option value="dog">犬</option>
        <option value="cat">猫</option>
        <option value="rabbit">うさぎ</option>
        <option value="hedgehog">ハリネズミ</option>
        <option value="lizard">トカゲ</option>
        <option value="fish">魚</option>
      </select>
    </div>
  );
};

// <div className="dropdown">
//   <div className="dropdown-header" onClick={toggleDropdown}>
//     {selectedItem !== null
//       ? data.find(item => item.id === selectedItem).label
//       : name}
//     <i className={` icon ${isOpen && 'open'}`}>
//       <MdArrowBackIosNew />
//     </i>
//   </div>
//   <div className={`dropdown-body ${isOpen && 'open'}`}>
//     {data.map(item => (
//       <div
//         key={item.id}
//         className="dropdown-item"
//         onClick={() => handleItemClick(item.id)}
//         id={item.id}
//       >
//         {item.label}
//       </div>
//     ))}
//   </div>
// </div>

// 	const toggleDropdown = () => setOpen(!isOpen);

//   const handleItemClick = id => {
//     setSelectedItem(id);
//     selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
//     setOpen(!isOpen);
//   };

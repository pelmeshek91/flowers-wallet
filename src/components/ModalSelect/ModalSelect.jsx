import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
// import s from './ModalSelect.module.scss';

export default function ModalSelect({ options, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);
  const onEnter = e => {
    if (e.code === 'Enter') toggling();
  };
  const onOptionClicked = option => () => {
    setSelectedOption(option.name);
    setIsOpen(false);
    onClick(option.id);
  };
  return (
    <div
    //   className={s.dropDownContainer}
    >
      <div
        tabIndex="0"
        onKeyDown={onEnter}
        // className={s.dropDownHeader}
        onClick={toggling}
      >
        {selectedOption || (
          <span
          //   className={s.chooseOption}
          >
            Choose option
            <IoIosArrowDown />
          </span>
        )}
      </div>
      {isOpen && (
        <div
        //   className={s.dropDownListContainer}
        >
          <ul
            //   className={s.dropDownList}
            tabIndex={-1}
          >
            {options.map(option => (
              <li
                onKeyDown={onOptionClicked(option)}
                // className={s.dropDownListItem}
                onClick={onOptionClicked(option)}
                key={option.id}
                tabIndex={0}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

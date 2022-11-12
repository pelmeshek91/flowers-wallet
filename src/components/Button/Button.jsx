// import PropTypes from 'prop-types';

// import {
//   // HiOutlineTrash,
//   // HiOutlinePencil,
//   // HiOutlineUserAdd,
//   // HiOutlineLogout,
// } from 'react-icons/hi';
// import s from './Button.module.css';

export const AuthButton = ({ type, text, className }) => {
  return (
    <button className={className} type={type}>
      {text}
    </button>
  );
};

// export const LogOutButton = ({ text, clickHeandler }) => {
//   return (
//     <button className={s.buttonLogOut} onClick={clickHeandler}>
//       {text} <HiOutlineLogout className={s.buttonLogOutSvg} size={24} />
//     </button>
//   );
// };

// export const SaveButton = () => {
//   return <button className={s.buttonAdd}>Save</button>;
// };

// export const AddButton = ({ openModal, type }) => {
//   const handleDelBtn = () => {
//     openModal('add');
//   };
//   return (
//     <button type={type} className={s.buttonDel} onClick={handleDelBtn}>
//       <HiOutlineUserAdd className={s.buttonDelSvg} size={32} />
//     </button>
//   );
// };

// export const EditButton = ({ type, contact, openModal }) => {
//   const handleDelBtn = () => {
//     openModal('edit', contact);
//   };
//   return (
//     <button type={type} className={s.buttonDel} onClick={handleDelBtn}>
//       <HiOutlinePencil className={s.buttonDelSvg} size={16} />
//     </button>
//   );
// };

// export const DeleteButton = ({ type, contactId, contactDelete }) => {
//   const handleDelBtn = () => {
//     contactDelete(contactId);
//   };
//   return (
//     <button type={type} className={s.buttonDel} onClick={handleDelBtn}>
//       <HiOutlineTrash className={s.buttonDelSvg} size={16} />
//     </button>
//   );
// };

// DeleteButton.propTypes = {
//   type: PropTypes.string.isRequired,
//   contactId: PropTypes.string.isRequired,
//   contactDelete: PropTypes.func.isRequired,
// };

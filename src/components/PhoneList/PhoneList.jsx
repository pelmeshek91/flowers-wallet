import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import {
  selectIsLoading,
  selectError,
  selectRenderContacts,
} from 'redux/contacts/contactsSelector';
import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { UpdateForm } from 'components/UpdateContact/UpdateContact';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import s from './PhoneList.module.css';

export const ContactList = () => {
  const [contactToUpdate, setContactToUpdate] = useState({});
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const renderContacts = useSelector(selectRenderContacts);

  const showUpdateForm = contactId => {
    const contact = renderContacts.find(({ id }) => id === contactId);
    setContactToUpdate(contact);
  };

  const closeForm = () => {
    setContactToUpdate(null);
  };

  return (
    <>
      {isLoading && (
        <div className={s.loader}>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      )}
      {error && <p>Sorry!The action was not completed, try again later.</p>}
      <ul className={s.phoneList}>
        {!renderContacts.length && <p>There are no contacts found!</p>}
        {renderContacts.length > 0 &&
          renderContacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={s.phoneItem}>
                <div className={s.itemWrap}>
                  <div className={s.spanWrap}>
                    <span className={s.phoneName}>☎ {name} :</span>
                    <span className={s.phoneNumber}>{number}</span>
                  </div>
                  <div className={s.phoneButtons}>
                    <Button
                      className={s.btnDelete}
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      onClick={() => dispatch(deleteContact(id))}
                    ></Button>

                    <Button
                      className={s.btnDelete}
                      variant="outlined"
                      startIcon={<EditIcon />}
                      onClick={() => showUpdateForm(id)}
                    ></Button>
                  </div>
                </div>

                {contactToUpdate?.id === id && (
                  <UpdateForm contact={contactToUpdate} closeForm={closeForm} />
                )}
              </li>
            );
          })}
      </ul>
    </>
  );
};

import { useSelector } from 'react-redux';
import { selectName } from 'redux/auth/authSelectors';
import s from './HomePage.module.css';


export const HomePage = () => {
  const name = useSelector(selectName)
  return (<>{!name ?(<h2 className={s.mainText}>Welcome to Phonebook!</h2>):
   (<h2 className={s.mainText}>Welcome {name}!</h2>)
}</>)}

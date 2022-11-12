import { useDispatch } from 'react-redux';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toggleModalAddTransaction } from '../../redux/transactions/transactionsSlice';
import s from '../ButtonAddTransaction/ButtonAddTransaction.module.css';
export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#24CCA7',
        contrastText: '#fff',
      },
    },
  });
  return (
    <div className={s.btnAdd}>
      <ThemeProvider theme={theme}>
        <Fab
          color="secondary"
          aria-label="add"
          onClick={() => dispatch(toggleModalAddTransaction(true))}
        >
          <AddIcon />
        </Fab>
      </ThemeProvider>
    </div>
  );
};

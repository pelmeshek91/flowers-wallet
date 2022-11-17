import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  type: Yup.string().required('Type is required'),
  amount: Yup.string('Enter your money')
    .min(0)
    .max(10, 'Very large amount, no more than 10 characters')
    .matches(/^(?:\d*\.)?\d+$/, 'Only positive amount')
    .required('Enter the amount, only numbers and comas'),
  comment: Yup.string()
    .max(10, 'No more than 10 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Only letters are allowed'),
  categoryId: Yup.string('Choose a category').required('Category is required'),
  transactionDate: Yup.date().required('Date is required'),
});

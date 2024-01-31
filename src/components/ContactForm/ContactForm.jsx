import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import Button from '@mui/material/Button';

const initialValues = {
  name: '',
  number: '',
};

let schema = yup.object().shape({
  name: yup.string().trim().required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const listContacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const newContact = {
      name: name.trim(),
      number: number.trim(),
    };

    const isNewContact = listContacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNewContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className="mb-3">
          <label htmlFor="validationDefault01" className="form-label">
            Name
          </label>
          <Field
            type="text"
            name="name"
            id="validationDefault01"
            className="form-control"
            placeholder="first and last name"
          />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputTel" className="form-label">
            Number
          </label>
          <Field
            type="tel"
            name="number"
            id="inputTel"
            className="form-control"
            placeholder="number"
          />
          <ErrorMessage name="number" component="div" />
        </div>
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

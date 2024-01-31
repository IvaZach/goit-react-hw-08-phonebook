import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import Button from '@mui/material/Button';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{number}</td>
        <td>
          <Button variant="outlined" arial-label="Delete" onClick={onDelete}>
            X
          </Button>
        </td>
      </tr>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;

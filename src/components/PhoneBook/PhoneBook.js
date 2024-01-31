import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Section from '../Section/Section';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';

export const PhoneBook = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Section>
      <div>
        <h2 className="h4">Add your contact</h2>
        <ContactForm />
      </div>
      <div>
        <h1 className="h1">PHONE BOOK</h1>
        <Filter />
        {isLoading && !error && <p>Loading contacts...</p>}
        <ContactList />
        {error && <h3>{error}</h3>}
      </div>
    </Section>
  );
};

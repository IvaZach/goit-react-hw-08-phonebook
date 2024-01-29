import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Section from '../Section/Section';

export const PhoneBook = () => {
  return (
    <Section>
      <div>
        <h1 className="h1">PHONE BOOK</h1>
        <ContactForm />
      </div>
      <div>
        <h2 className="h1">Contacts</h2>
        <Filter />
        {/* {isLoading && !error && <p>Loading contacts...</p>} */}
        <ContactList />
        {/* {error && <h3>{error}</h3>} */}
      </div>
    </Section>
  );
};

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filterContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.personList}>
      {Array.isArray(filterContacts) &&
        filterContacts.map((contact) => {
          return (
            <li className={css.personItem} key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;

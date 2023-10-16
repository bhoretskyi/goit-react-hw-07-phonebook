import { StyledButton } from "./ContactList.styled"
// import { deleteContact } from "redux/contactSlise"
import { fetchContacts, deleteContact } from "redux/contactOperations";
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react";

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts)
  // const isLoading = useSelector(state=>state.contacts.isLoading)
  // const error = useSelector(state => state.contacts.error)
  const dispatch = useDispatch();
  // const filter = useSelector(state=>state.contactList.filter)

  // const filteredContacts = contacts?.filter(contact =>
  //   contact?.name?.toLowerCase().includes(filter.toLowerCase())
  // );
  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id)); 
  };


    return (<ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.phone}
            </p>
            <StyledButton onClick={() =>onDeleteContact(contact.id)}>
              Delete
            </StyledButton>
          </li>
        ))}
      </ul>)
}
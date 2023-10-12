import { StyledButton } from "./ContactList.styled"
import { deleteContact } from "redux/contactSlise"
import { useDispatch,useSelector } from "react-redux"

export const ContactList = () => {
  const contacts = useSelector(state => state.contactList.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state=>state.contactList.filter)

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

    return (<ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <StyledButton onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </StyledButton>
          </li>
        ))}
      </ul>)
}
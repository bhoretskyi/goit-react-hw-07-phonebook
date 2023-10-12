import { StyledFilter } from "./ContactFilter.styled";
import { updateFilter } from "redux/contactSlise";
import { useDispatch,useSelector } from "react-redux";

export const ContactFilter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.contactList.filter)
    return (
      <div>
        <label>
          Filter by name:
          <StyledFilter
            type="text"
            value={filter}
            onChange={e => dispatch(updateFilter(e.target.value))}
          />
        </label>
      </div>
    );
  };
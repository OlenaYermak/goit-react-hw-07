import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export default function App() {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.contacts);

  useEffect(() => { 
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
        <SearchBox />
        {loading && !error && <Loader />}
      {error && <ErrorMessage />}
      <ContactList />
    </div>
  );
}






import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

const ContactsPage = () => {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">Contact Management</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;

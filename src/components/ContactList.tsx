import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteContact } from "../redux/contactsSlice";
import ContactViewPopup from "./ContactViewPopup";
import ContactEditPopup from "./ContactEditPopup";

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  const [selectedContact, setSelectedContact] = useState<any>(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  const handleView = (contact: any) => {
    setSelectedContact(contact);
    setIsViewOpen(true);
  };

  const handleEdit = (contact: any) => {
    setSelectedContact(contact);
    setIsEditOpen(true);
  };

  return (
    <div className="p-4 w-full">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        Contact List
      </h2>

      {contacts.length === 0 ? (
        <div className="text-center text-gray-500">
          No Contact Found. Please add contact from the create contact button.
        </div>
      ) : (
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="flex justify-between items-center p-4 border border-gray-200 rounded-lg shadow-md bg-white"
            >
              <div>
                <div className="font-bold text-lg text-gray-800">
                  {contact.name}
                </div>
                <div className="text-gray-600">{contact.email}</div>
                <div
                  className={`mt-1 text-sm ${
                    contact.status === "Active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {contact.status}
                </div>
              </div>
              <div className="space-x-3">
                <button
                  onClick={() => handleView(contact)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  View
                </button>
                <button
                  onClick={() => handleEdit(contact)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {isViewOpen && selectedContact && (
        <ContactViewPopup
          contact={selectedContact}
          onClose={() => setIsViewOpen(false)}
        />
      )}

      {isEditOpen && selectedContact && (
        <ContactEditPopup
          contact={selectedContact}
          onClose={() => setIsEditOpen(false)}
        />
      )}
    </div>
  );
};

export default ContactList;

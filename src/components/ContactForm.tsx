import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";

const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("Active");
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact = { id: Date.now().toString(), name, email, status };
    dispatch(addContact(newContact));
    setName("");
    setEmail("");
    setStatus("Active");
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={togglePopup}
        className="bg-sky-500 text-white px-4 py-2 rounded"
      >
        Add New Contact
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-lg">
            <button
              onClick={togglePopup}
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-semibold mb-6 text-gray-700">
                Add New Contact
              </h2>

              <div className="mb-4">
                <label className="block text-gray-600 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 font-semibold mb-2">
                  Status
                </label>
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="status"
                      value="Active"
                      checked={status === "Active"}
                      onChange={(e) => setStatus(e.target.value)}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Active</span>
                  </label>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="status"
                      value="Inactive"
                      checked={status === "Inactive"}
                      onChange={(e) => setStatus(e.target.value)}
                      className="form-radio h-5 w-5 text-red-600"
                    />
                    <span className="ml-2 text-gray-700">Inactive</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
              >
                Add Contact
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;

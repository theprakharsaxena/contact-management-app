import React from "react";

interface ContactViewPopupProps {
  contact: any;
  onClose: () => void;
}

const ContactViewPopup: React.FC<ContactViewPopupProps> = ({
  contact,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-lg">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Contact Details
        </h2>
        <p>
          <strong>Name:</strong> {contact.name}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          {contact.status === "Active" ? (
            <span className="text-green-600">Active</span>
          ) : (
            <span className="text-red-600">Inactive</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ContactViewPopup;

import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setUser((prevUser) => ({
        ...prevUser,
        address: { ...prevUser.address, [field]: value },
      }));
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setUser((prevUser) => ({
        ...prevUser,
        company: { ...prevUser.company, [field]: value },
      }));
    } else {
      setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
          <input type="text" name="username" placeholder="Username" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
          <input type="text" name="address.city" placeholder="City" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
          <input type="text" name="phone" placeholder="Phone" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
          <input type="text" name="website" placeholder="Website" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
          <input type="text" name="company.name" placeholder="Company" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg" />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;

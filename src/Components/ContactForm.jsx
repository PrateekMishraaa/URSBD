import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
   
  };

  return (
    <div className="w-[60%] p-8 bg-white rounded-lg h-[50vh] shadow-md relative border-2">
      <form onSubmit={handleSubmit}>
       
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
        <input
          type="text"
          name="website"
          placeholder="Your Website URL"
          value={formData.website}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-[40%] rounded-full bg-[#ff695f] text-white py-3 rounded hover:bg-[#f55348] transition duration-300"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="mt-20  bg-gray-50 ">
      
        <div  className="flex items-center justify-center min-h-screen bg-gray-50 mt-20">
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
            <input
              type="text"
              name="firstName"
              className={`mt-1 block w-full p-2 border rounded-md border-gray-300'}`}
              placeholder="First Name"
            />
           
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email 
            <input
              type="text" 
              name="Email"
              className="mt-1 block w-full p-2 border rounded-md border-gray-300"
              placeholder="Email"
            />
           
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number 
            <input
              type="text"
              name="firstName"
              className={`mt-1 block w-full p-2 border rounded-md border-gray-300'}`}
              placeholder="Phone Number"
            />
           
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Message/Review
            <textarea
              name="message"
              className="mt-1 block w-full p-2 border rounded-md border-gray-300"
              placeholder="Message or feedback"
              rows="4"
            />
            
          </label>
        </div>
      
        <button
          type="submit"
          className="w-full p-3 mt-4 bg-orange-400 text-white rounded-md hover:bg-orange-600"
        >
          SEND MESSAGE
        </button>
      
      
    </form>
        </div>

      
    </div>
  );
};

export default Contact;




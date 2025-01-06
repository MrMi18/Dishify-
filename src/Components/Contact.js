import React from 'react';

const Contact = () => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-semibold text-gray-800">Contact Me</h2>
      <p className="text-gray-700 mt-2">
        Want to collaborate or just say hi? Reach out to me through the platforms below:
      </p>
      <ul className="list-none mt-4">
        <li>
          <a
            href="https://www.linkedin.com/in/imran-mohammad-360a2122a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MrMi18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:imran.mohd1910@gmail.com" className="text-blue-600 hover:underline">
            imran.mohd1910@gmail.com
          </a>
        </li>
        <li>
          <a href="" className="text-blue-600 hover:underline">
            +91 7218316775
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;

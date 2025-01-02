import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';




const Footer = () =>{
    return(
      <div className=''>
           <footer className="bg-gray-100 text-white py-10 mt-4 ">
      <div className="container mx-auto grid grid-cols-1 
            md:grid-cols-4 gap-8 w-11/12">

        <div className="flex items-center flex-col my-auto">
          <h1 className="text-2xl font-bold">Deshify </h1>
          <h4 className=" ml-2 text-md font-bold">By Mr Mi</h4>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contacts</h3>
          <p>Phone: +91 7218316775</p>
          <p>Email: imran.mohd1910@gmail.com</p>
          <p>Address: Sadar, Nagpur</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank"
              rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl 
                            hover:text-gray-300" />
            </a>
            <a href="https://twitter.com" target="_blank"
              rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
            <a href="https://www.linkedin.com/in/imran-mohammad-360a2122a/" target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul>
            <li><a href="#" className="hover:underline">
              Web Development</a></li>
            <li><a href="#" className="hover:underline">
              Mern Stack</a></li>
            <li><a href="#" className="hover:underline">
              Java FullStack</a></li>
          </ul>
        </div>

      </div>
    </footer>



        <div className='flex gap-4 justify-center py-2 bg-slate-100 '>
          <div >
            <p >Made with ❤️❤️ By Mr MI</p>
          </div>
          <p >©copyright 2024 swiggy limited</p>
         </div>
      </div>
      
    )
  }
  export default Footer;
  
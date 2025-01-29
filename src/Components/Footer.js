
import { Mail } from 'lucide-react';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    return (
        <div className='text-slate-500 '>    
            <footer className="bg-gray-800 text-white py-6 mt-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-6">

                    {/* Brand Section */}
                    <div className="flex items-center flex-col mb-4 mt-14">
                        <h1 className="text-3xl font-bold">Deshify</h1>
                        <h4 className="text-lg font-bold text-gray-300">By Mr Mi</h4>
                    </div>

                    {/* Contacts Section */}
                    <div className="flex flex-col gap-4 p-2">
                        <h3 className="text-xl font-bold mb-2">Contacts</h3>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt />
                            <p>+91 7218316775</p>
                        </div>
                        <div className="flex items-center gap-2">
                           { <FaEnvelope />||<Mail />}
                            <a href="mailto:imran.mohd1910@gmail.com" className="hover:underline">imran.mohd1910@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt />
                            <p>Sadar, Nagpur</p>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold mb-2">Social Media</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-2xl hover:text-gray-300" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl hover:text-gray-300" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-2xl hover:text-gray-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/imran-mohammad-360a2122a/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl hover:text-gray-300" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links and Services Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold mb-2">Quick Links</h3>
                        <ul className='flex flex-col gap-2'>
                            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                            <li><Link to="/about" className="hover:underline">About</Link></li>
                        </ul>
                        <h3 className="text-xl font-bold mb-2">Services</h3>
                        <ul className='flex flex-col gap-2'>
                            <li><a href="#" className="hover:underline">Web Development</a></li>
                            <li><a href="#" className="hover:underline">Mern Stack Development</a></li>
                            <li><a href="#" className="hover:underline">Java FullStack</a></li>
                        </ul>
                    </div>

                </div>
            </footer>

            <div className='flex flex-col items-center gap-2 py-4 bg-gray-600'>
                <p>Made with ❤️❤️ By Mr MI</p>
                <p>© 2024 Swiggy Limited</p>
            </div>
        </div>
    );
}

export default Footer;

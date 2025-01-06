import React from 'react';
import Contact from './Contact';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 mt-20">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
          <p className="text-lg text-gray-600 mt-2">Learn more about me and my journey!</p>
        </div>

        <div className="space-y-4">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Who am I?</h2>
            <p className="text-gray-700 mt-2">
              Hi, I'm Mohammad Imran! A passionate full-stack developer with a keen interest in web
              development, building efficient and scalable applications. My journey started with Java
              Full Stack Development and now I'm honing my skills in front-end frameworks like React
              and back-end technologies such as Node.js and Express.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Skills & Technologies</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>React, JavaScript</li>
              <li>Node.js, Express</li>
              <li>HTML, CSS, TailwindCSS</li>
              <li>Git, GitHub</li>
              <li>MongoDB, MySQL</li>
              <li>APIs, RESTful Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">My Goals</h2>
            <p className="text-gray-700 mt-2">
              My goal is to continuously improve my coding skills and stay updated with the latest
              trends in technology. I aim to land a challenging role as a full-stack developer and
              contribute to meaningful projects that can make a difference.
            </p>
          </section>

          {/* Contact Component */}
          <Contact />
        </div>
      </div>
      
    </div>
  );
};

export default About;

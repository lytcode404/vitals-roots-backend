// components/Sidebar.js
import Link from 'next/link';
import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import Image from 'next/image'
{/* Right Column */}
const Sidebar = ({ questions, activeIndex, onNavigate }) => {
  return (
    
    <div className="bg-white p-4 rounded shadow ">
        <Scrollbars style={{ height: 'calc(100vh - 64px)' }}>
          {questions.map((question, index) => (
            <div
              key={index}
              className={`mb-2 p-2 cursor-pointer ${
                index === activeIndex ? 'bg-blue-500 text-white' : ''
              }`}
              onClick={() => onNavigate(index)}
            >
              <Link  href={`#${index}`}>{`${index + 1}: ${question.diseaseName}`}</Link>
            </div>
          ))}
        </Scrollbars>
    </div>
  );
};

export default Sidebar;

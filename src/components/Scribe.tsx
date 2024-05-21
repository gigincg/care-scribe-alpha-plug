import React from 'react';

interface ScribeProps {
  text: string;
}

const Scribe: React.FC<ScribeProps> = ({ text }) => {
  return (
    <div className='p-4 bg-gray-100 border border-gray-300 rounded-md'>
      <p>{text}</p>
    </div>
  );
};

export default Scribe;

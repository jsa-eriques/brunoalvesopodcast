import React, { useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image1.png';
import image7 from '../assets/image2.png';

const Guests = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex < images.length - 5) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-fit w-full mm:px-4 lg:p-10 bg-gradient-to-r from-[#e9efdb] to-white">
        <div className='text-left self-start font-Sora font-bold mm:text-[23px] text-[42px] text-[#ffc510] px-[18%]'>Convidados</div>
      <div className='flex items-center'>
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="p-2 bg-gray-300 rounded disabled:opacity-50"
          >
            &#8249;
          </button>
          <div className="flex overflow-hidden mx-4">
            {images.slice(startIndex, startIndex + 5).map((image, index) => (
              <img key={index} src={image} alt={`Guest ${index + 1}`} className="mm:w-20  lg:w-auto lg:h-auto object-cover mx-1" />
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={startIndex >= images.length - 5}
            className="p-2 bg-gray-300 rounded disabled:opacity-50"
          >
            &#8250;
          </button>
      </div>
    </div>
  );
};

export default Guests;

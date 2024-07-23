import React, { useState } from 'react';
import image1 from "../assets/anuncio.webp"
import image2 from "../assets/anuncio.webp"
import image3 from "../assets/anuncio.webp"
import image4 from "../assets/anuncio.webp"

const BannerComponent = () => {

  const announcements = [image1, image2, image3, image4];

  const [currentIndex, setCurrentIndex] = useState(0);


  const nextAnnouncement = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
  };


  const prevAnnouncement = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + announcements.length) % announcements.length);
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-[#e9efdb] to-white h-fit">
      <div className="relative w-11/12 md:w-3/4 lg:w-1/2  p-5 rounded-lg ">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#ffc510] text-white p-2 "
          onClick={prevAnnouncement}
        >
          &lt;
        </button>
        <div className="text-center">
          <img
            src={announcements[currentIndex]}
            alt={`Anúncio ${currentIndex + 1}`}
            className="w-full rounded-lg"
          />
        </div>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#ffc510] text-white p-2 "
          onClick={nextAnnouncement}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default BannerComponent;

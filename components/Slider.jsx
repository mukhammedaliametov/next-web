import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Slider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: 'Nature Image 1',
    },
    {
      url: "https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80",
      title: 'Nature Image 2',
    },
    {
      url: "https://images.unsplash.com/photo-1594717527389-a590b56e8d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: 'Nature Image 3',
    },
    {
      url: "https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: 'Nature Image 4',
    },
    {
      url: "https://images.unsplash.com/photo-1545917992-dea2d782ef46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2489&q=80",
      title: 'Nature Image 5',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div id="gallery" className="max-w-[1400px] h-[780px] w-full m-auto p-16 px-4 relative group">
      <h1 className="text-center text-3xl p-4 font-mooli">Gallery</h1>
      <div
        style={{ background: `url(${slides[currentIndex].url})` }}
        className="w-full h-[100%] rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[60%] md:top-[50%] -translate-x-[0] translate-y-[50%] left-5 text-2xl rounded p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={40} onClick={prevSlide} />
      </div>
      <div className="hidden group-hover:block absolute top-[60%] md:top-[50%] -translate-x-[0] translate-y-[50%] right-5 text-2xl rounded p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={40} onClick={nextSlide}/>
      </div>
      <h2 className="p-4 text-2xl font-raleway">{slides[currentIndex].title}</h2>
    </div>
  );
};

export default Slider;

import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="max-w-[1400px] h-screen p-6 md:p-16 mx-auto text-center">
      <h1 className="text-2xl p-4 font-mooli md:text-3xl">Travel Photos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
        <Image
            src="https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-12 md:mb-0">
          <Image
            src="https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="/"
            layout="responsive"
            width="677"
            height="451"
          />
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="/"
            width="215"
            height="217"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

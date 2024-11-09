import React from 'react';
import Image from 'next/image'; 
import Image1 from "../../../Public/image/simra.png"


const Body = () => {
  return (
    <div className="relative z-0 w-full overflow-hidden bg-opacity-75 bg-white bg-cover">
      
      {/* Background Overlay */}
      <div className="w-full h-auto absolute inset-0 bg-transparent opacity-30"></div> 

      <div className="z-50 m-auto mt-6 block w-[95%] items-center justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px]">
        
        {/* Text Section */}
        <div className="w-full pt-5 h-fit md:w-1/2 md:py-10 text-center md:text-left">
          <h1 className="whitespace-nowrap text-[1.5rem] font-normal leading-tight tracking-wide text-main sm:text-4xl md:text-5xl lg:text-6xl font-pacifico text-[#21243D] animate-fadeIn">
            Hello, I&apos;m <br /> Sumra Jabeen
          </h1>
          <p className="my-5 w-full text-[1rem] tracking-wide text-main sm:text-lg md:w-[80%] lg:text-xl font-poppins text-[#EA1D5D] font-bold animate-fadeIn">
            Step into my digital world! Here, you&apos;ll find a collection of projects that fuse design, code, and functionality.
            <br /> Whether you&apos;re here to explore or be inspired,I invite you to dive into the work that drives my passion.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="relative flex items-center w-full mt-7 md:mt-0 justify-center md:justify-end">
          <Image
            alt="Simra"
            loading="lazy"
            width={300}
            height={300}
            className="w-[200px] h-auto md:w-[250px] lg:w-[300px]"
            src={Image1}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;

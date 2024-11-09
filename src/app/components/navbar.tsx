import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Image1 from "../../../Public/image/logo.jpg"


const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF] sticky top-0 z-40 h-full w-full bg-main backdrop-blur-lg print:hidden shadow-xl">
<div className="m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px]">
        <a href="/" className="flex items-center space-x-2">
         <Image
src={Image1}
  alt="Simra"
  className="w-16 h-auto"
  width={64}  
  height={64} 
/>

        </a>
        <div className="flex space-x-3 justify-between gap-5">
          <Link href="/" className="text-xs text-[#21243D] hover:text-cyan-800">Home</Link>
          <Link href={"#About"} className="text-xs text-[#21243D] hover:text-cyan-800">About</Link>
          <Link href={"#project"} className="text-xs text-[#21243D] hover:text-cyan-800">Projects</Link>
          <Link href={"#contact"}className="text-xs text-[#21243D] hover:text-cyan-800">Contact</Link>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;

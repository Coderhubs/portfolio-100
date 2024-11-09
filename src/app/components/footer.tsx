import React from 'react';
import Image from 'next/image';
import Image1 from "../../../Public/image/facebook.png"
import Image2 from "../../../Public/image/instagram.png"
import Image3 from "../../../Public/image/linkedin.png"


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="z-50 m-auto mt-6 flex flex-col items-center justify-between w-full md:flex-row md:w-[90%] lg:w-[85%] xl:w-[1300px]">

        <div className="container mx-auto text-center">
          <p className="mb-4">&copy; Sumra Jabeen Personal Portfolio, 2024</p>

          <div className="flex mt-5 space-x-4 items-center justify-center flex-wrap">
            <a
              href="https://www.facebook.com/simra.jabeen.96?mibextid=ZbWKwL"
              className="text-white hover:text-gray-400 mx-4"
              target="_blank" rel="noopener noreferrer"
            >
              <Image
                src={Image1}
                alt="Facebook-Logo"
                className="w-6 h-6 sm:w-8 sm:h-8"
                width={100}
                height={100}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/sumra-jabeen-12037a282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-white hover:text-gray-400 mx-4"
              target="_blank" rel="noopener noreferrer"
            >
              <Image
                src={Image2}
                alt="LinkedIn-Logo"
                className="w-6 h-6 sm:w-8 sm:h-8"
                width={100}
                height={100}
              />
            </a>

            <a
              href="https://www.instagram.com/simra_mumbai/profilecard/?igsh=bTBrYjk2cDBodzB6"
              className="text-white hover:text-gray-400 mx-4"
              target="_blank" rel="noopener noreferrer"
            >
              <Image
                src={Image3}
                alt="Instagram-Logo"
                className="w-6 h-6 sm:w-8 sm:h-8"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

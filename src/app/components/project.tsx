'use client';

import React from 'react';
import Image from 'next/image';

const Project = () => {
  const projects = [
    {
      id: 1,
      name: 'Static Resume',
      image: '/image/static.jpg',
      link: 'https://hackathone-m001.vercel.app/'
    },
    {
      id: 2,
      name: 'Dynamic Resume',
      image: '/image/Dynamic.jpg',
      link: 'https://h-milestone-005.vercel.app/'
    },
    {
      id: 3,
      name: 'CLI based Projects',
      image: '/image/Cli.jpg',
      link: 'https://github.com/Coderhubs'
    },
    {
      id: 4,
      name: 'GIAIC-Clone-Website',
      image: '/image/web.png',
      link: 'https://clone-website-self.vercel.app/'
    },
  ];

  return (
    <div id="project">
      <div className="relative z-0 w-full overflow-hidden bg-opacity-90 bg-[url('/image/pbg.jpeg')] bg-cover">
        <div className="absolute inset-0 w-full h-full -z-50 bg-white bg-opacity-80"></div>

        <h2 className="text-3xl text-[#EA1D5D] font-bold text-center mb-6 mt-10">My Recent Projects</h2>

        <div className="flex justify-center items-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-6 w-full max-w-[1200px]">
            {/* First Row (Projects 1 and 2) - Centered */}
            <div className="flex justify-center gap-6 mb-6 w-full">
              {projects.slice(0, 2).map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg shadow-zinc-600 hover:shadow-2xl 
                  transition duration-300 cursor-pointer p-4 w-full max-w-[250px] h-[250px] flex flex-col justify-between"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    width={250}  // Set fixed width
                    height={167} // Set height to match the aspect ratio (2:3 ratio here)
                    className="w-full h-2/3 object-cover rounded-t-lg mb-4"
                  />
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-center">{project.name}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row (Projects 3 and 4) - Centered */}
            <div className="flex justify-center gap-6 w-full">
              {projects.slice(2, 4).map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg shadow-zinc-600 hover:shadow-2xl 
                  transition duration-300 cursor-pointer p-4 w-full max-w-[250px] h-[250px] flex flex-col justify-between"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    width={250}  // Set fixed width
                    height={167} // Set height to match the aspect ratio (2:3 ratio here)
                    className="w-full h-2/3 object-cover rounded-t-lg mb-4"
                  />
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-lg font-semibold text-center">{project.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

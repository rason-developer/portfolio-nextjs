import React from 'react';
import ProjectCard from '../sub/ProjectCard';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 relative" id="projects" style={{ zIndex: 1 }}>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects (Still working in this section)
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {/* Personalized News Aggregator */}
        <div className="relative flex justify-center items-center transition duration-500 transform hover:translate-x-0 hover:scale-110">
          <ProjectCard
            src="/pwa.svg"
            title="Personalized News Aggregator"
            description="Lorem ipsum dolor sit amet, asas"
            link="https://github.com/rason-developer"
          />
          <div className="absolute top-4 right-4">
            <Link href="https://github.com/rason-developer" passHref>
              <Image src="/github.svg" alt="GitHub" width={32} height={32} className="object-contain cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* IoT Home Automation Backend */}
        <div className="relative flex justify-center items-center transition duration-500 transform hover:translate-x-0 hover:scale-110">
          <ProjectCard
            src="/IoT.svg"
            title="IoT Home Automation Backend"
            description="Lorem ipsum dolor sit amet, asas"
            link="https://github.com/rason-developer"
          />
          <div className="absolute top-4 right-4">
            <Link href="https://github.com/rason-developer" passHref>
              <Image src="/github.svg" alt="GitHub" width={32} height={32} className="object-contain cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Decentralized File Storage System */}
        <div className="relative flex justify-center items-center transition duration-500 transform hover:translate-x-0 hover:scale-110">
          <ProjectCard
            src="/DFSS.svg"
            title="Decentralized File Storage System"
            description="Lorem ipsum dolor sit amet, asas"
            link="https://github.com/rason-developer"
          />
          <div className="absolute top-4 right-4">
            <Link href="https://github.com/rason-developer" passHref>
              <Image src="/github.svg" alt="GitHub" width={32} height={32} className="object-contain cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* AI-Powered Personal Finance Manager */}
        <div className="relative flex justify-center items-center transition duration-500 transform hover:translate-x-0 hover:scale-110">
          <ProjectCard
            src="/AI-POWERED.svg"
            title="AI-Powered Personal Finance Manager"
            description="Lorem ipsum dolor sit amet, asas"
            link="https://github.com/rason-developer"
          />
          <div className="absolute top-4 right-4">
            <Link href="https://github.com/rason-developer" passHref>
              <Image src="/github.svg" alt="GitHub" width={32} height={32} className="object-contain cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Collaborative Writing Platform */}
        <div className="relative flex justify-center items-center transition duration-500 transform hover:translate-x-0 hover:scale-110">
          <ProjectCard
            src="/Collaborativewriting.svg"
            title="Collaborative Writing Platform"
            description="Lorem ipsum dolor sit amet, asas"
            link="https://github.com/rason-developer"
          />
          <div className="absolute top-4 right-4">
            <Link href="https://github.com/rason-developer" passHref>
              <Image src="/github.svg" alt="GitHub" width={32} height={32} className="object-contain cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

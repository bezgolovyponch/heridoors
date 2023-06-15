import React from 'react';

import { Link } from 'react-scroll';

import config from '../config/index.json';

const About = () => {
  const { company, navigation, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-full h-16" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {navigation.map((navItem, index) => (
            <Link
              key={`${navItem.name}-${index}`}
              to={navItem.href}
              spy={true}
              smooth={true}
              duration={1000}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {navItem.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="linkedin"
            href={socialMedia.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {/* LinkedIn SVG */}
          </a>
          <a
            aria-label="twitter"
            href={socialMedia.twitter}
            target="_blank"
            rel="noreferrer"
          >
            {/* Twitter SVG */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

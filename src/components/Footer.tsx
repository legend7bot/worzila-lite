import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="w-[100vw] overflow-hidden py-4 text-lg md:text-xl">
      <div className="flex flex-row justify-center text-[#0F3460] dark:text-[#eeeedd]">
        <span className="mx-2">
          Crafted by{' '}
          <a
            className="font-semibold"
            href="https://www.linkedin.com/in/harsh-vardhan-sharma7/"
            target="_blank">
            legend7
          </a>
        </span>
        |
        <span>
          <a
            className="mx-2 font-semibold text-indigo-700 dark:text-indigo-400"
            href="https://www.linkedin.com/in/harsh-vardhan-sharma7/"
            target="_blank">
            Linkedin
          </a>
        </span>
        <span>
          <a
            className="mx-2 font-semibold text-indigo-700 dark:text-indigo-400"
            href="https://github.com/legend7bot/"
            target="_blank">
            Github
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;

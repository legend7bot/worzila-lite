import React, { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { BsSunFill, BsMoonStars } from 'react-icons/bs';

interface TogglerProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean | undefined>>;
}

const Toggler: React.FC<TogglerProps> = (props) => {
  const { darkMode, setDarkMode } = props;

  return (
    <div
      className={`flex h-[50px] w-20 cursor-pointer place-self-center rounded-[25px] p-[0.3125rem] ${
        darkMode ? 'justify-end' : 'justify-start'
      } bg-gray-400 dark:bg-gray-600`}
      onClick={() => setDarkMode((prev) => !prev)}>
      <motion.div
        className="flex h-10 w-10 items-center justify-center rounded-[20px] bg-[#f5f5f5] text-2xl"
        layout
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}>
        {darkMode ? <BsMoonStars fill="#939695" /> : <BsSunFill fill="#FFE87C" />}
      </motion.div>
    </div>
  );
};

export default Toggler;

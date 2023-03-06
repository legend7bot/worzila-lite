import React, { Dispatch, SetStateAction, useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface FontSelectorProps {
  font: 'serif' | 'sans' | 'mono';
  setFont: Dispatch<SetStateAction<'serif' | 'sans' | 'mono'>>;
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const FontSelector: React.FC<FontSelectorProps> = (props) => {
  const { font, setFont } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleFontChange = (e: React.MouseEvent<HTMLLIElement>) => {
    setFont(e.currentTarget.id as 'serif' | 'sans' | 'mono');
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className="z-[999] h-10 w-28 drop-shadow-[1px_1px_1px_rgba(71,0,179,1)]">
      <motion.button
        className="mb-2 flex w-full cursor-pointer items-center justify-between rounded-xl bg-gray-100 px-3 py-2 text-left text-lg font-bold capitalize text-purple-700 dark:bg-[#0F3460] dark:text-[#eeeeee]"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}>
        {font}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        className="m-0 flex list-none flex-col gap-2 bg-gray-100 p-2 dark:bg-[#0F3460]"
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
        {['serif', 'sans', 'mono'].map((item) => (
          <motion.li
            key={item}
            id={item}
            onClick={handleFontChange}
            className="m-0 block cursor-pointer list-none p-2 capitalize text-purple-700 dark:text-[#eeeeee]"
            variants={itemVariants}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default FontSelector;

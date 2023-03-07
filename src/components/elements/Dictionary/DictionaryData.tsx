import React from 'react';
import DictionaryPhonetic from './DictionaryPhonetic';
import DictionaryPos from './DictionaryPos';
import { motion } from 'framer-motion';

interface DictionaryDataProps {
  data: any[];
}

const DictionaryData: React.FC<DictionaryDataProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
      className="flex flex-col gap-4 ">
      {data.map((item, index) => {
        return (
          <div
            className="my-4 h-full w-full rounded-3xl"
            key={index}>
            {/* Word Introduction */}
            <div className="mt-4 flex w-[90vw] flex-col overflow-hidden rounded-3xl bg-[#eeeeff] p-4 dark:bg-[#0F3460] dark:text-[#eeeeff] sm:w-[80vw] md:w-[40rem]">
              <h1 className="mb-4 break-words text-5xl lg:text-7xl">{item.word}</h1>
              <div className="flex w-full">
                <h2 className="mr-4 text-3xl">
                  {item.phonetic ? (
                    item.phonetic
                  ) : (
                    <span className="text-base text-red-500">Phonetic Unavialable</span>
                  )}
                </h2>
                <DictionaryPhonetic phonetics={item.phonetics} />
              </div>
            </div>

            {/* Word Descriptions */}
            {item.meanings.map((meaning: any, index: any) => {
              return (
                <DictionaryPos
                  key={index}
                  meaning={meaning}
                />
              );
            })}
            <div className="mt-8 h-1 w-full bg-[#eeeeff] dark:bg-[#0F3460]"></div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default DictionaryData;

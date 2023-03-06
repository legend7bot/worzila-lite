import React from 'react';
import DictionaryPhonetic from './DictionaryPhonetic';
import DictionaryPos from './DictionaryPos';

interface DictionaryDataProps {
  data: any[];
}

const DictionaryData: React.FC<DictionaryDataProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 ">
      {data.map((item, index) => {
        return (
          <div
            className="my-4 h-full w-full rounded-3xl"
            key={index}>
            {/* Word Introduction */}
            <div className="mt-4 flex w-[90vw] flex-col overflow-hidden rounded-3xl bg-[#eeeeff] p-4 dark:bg-[#0F3460] dark:text-[#eeeeff] sm:w-[80vw] md:w-[40rem]">
              <h1 className="mb-4 break-words text-7xl">{item.word}</h1>
              <div className="flex w-full">
                <h2 className="mr-4 text-3xl">
                  {item.phonetic ? item.phonetic : 'Phonetic Unavialable'}
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
            <div className="mt-8 h-1 w-full bg-white"></div>
          </div>
        );
      })}
    </div>
  );
};

export default DictionaryData;

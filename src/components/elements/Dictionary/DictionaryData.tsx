import React from 'react';
import DictionaryPhonetic from './DictionaryPhonetic';

interface DictionaryDataProps {
  data: any[];
}

const DictionaryData: React.FC<DictionaryDataProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 ">
      {data.map((item, index) => {
        return (
          <div
            className="bg-slate-500"
            key={index}>
            <div className="text-white">{item.word}</div>
            <DictionaryPhonetic phonetics={item.phonetics} />
          </div>
        );
      })}
    </div>
  );
};

export default DictionaryData;

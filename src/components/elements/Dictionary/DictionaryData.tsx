import React from 'react';
import DictionaryPhonetic from './DictionaryPhonetic';

interface DictionaryDataProps {
  data: any[];
}

const DictionaryData: React.FC<DictionaryDataProps> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="text-white">{item.word}</div>
            <DictionaryPhonetic phonetics={item.phonetics} />
          </div>
        );
      })}
    </div>
  );
};

export default DictionaryData;

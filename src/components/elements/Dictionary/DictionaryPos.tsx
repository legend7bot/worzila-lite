import React from 'react';

interface DictionaryPosProps {
  meaning: any;
}

const DictionaryPos: React.FC<DictionaryPosProps> = (props) => {
  const { meaning } = props;

  if (!meaning) return <div>Loading...</div>;

  return (
    <div className="min-h-80 mt-4 flex w-[90vw] flex-col overflow-hidden rounded-3xl bg-[#eeeeff] py-8 px-16 dark:bg-[#0F3460] dark:text-[#eeeeff] sm:w-[80vw] md:w-[40rem]">
      <h1 className="mb-4 break-words text-5xl font-bold sm:text-6xl lg:text-7xl">
        {meaning.partOfSpeech}
      </h1>
      <h3 className="text-xl font-semibold">Definitions: </h3>
      <ul className="mb-4 list-disc">
        {meaning.definitions.map((definition: any, index: any) => {
          return (
            <li
              key={index}
              className="text-lg">
              {definition?.definition}
            </li>
          );
        })}
      </ul>
      <p>
        Synonyms:{' '}
        {meaning.synonyms.map((synonym: any, index: any) => (
          <span key={index}>{synonym}</span>
        ))}
      </p>
      <p>
        Antonyms:{' '}
        {meaning.antonyms.map((antonym: any, index: any) => (
          <span key={index}>{antonym}</span>
        ))}
      </p>
    </div>
  );
};

export default DictionaryPos;

import React, { useEffect } from 'react';

import { FaPlayCircle } from 'react-icons/fa';

const DictionaryPhonetic: React.FC<{ phonetics: any }> = ({ phonetics }) => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

  const phonetic = phonetics.find((item: any) => item.audio !== '');

  if (!phonetic)
    return (
      <button
        disabled
        className="h-fit w-fit rounded-full bg-[#EBEBE4] text-5xl text-slate-600">
        <FaPlayCircle />
      </button>
    );

  const audio = new Audio(phonetic.audio);

  const playAudio = () => {
    audio?.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    audio?.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    return () => {
      audio?.removeEventListener('ended', () => {
        setIsPlaying(false);
      });
    };
  }, [audio]);

  return (
    <div>
      {phonetic?.audio !== '' && (
        <button
          onClick={playAudio}
          className={`${
            isPlaying ? 'bg-indigo-400 dark:bg-indigo-200' : 'bg-green-700 dark:bg-green-400'
          } rounded-full text-5xl text-[#ffffee] dark:text-[#1A1A2E]`}>
          <FaPlayCircle />
        </button>
      )}
    </div>
  );
};

export default DictionaryPhonetic;

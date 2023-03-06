import React, { useEffect } from 'react';

const DictionaryPhonetic: React.FC<{ phonetics: any }> = ({ phonetics }) => {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

  const phonetic = phonetics.find((item: any) => item.audio !== '');
  const audio = new Audio(phonetic.audio);

  const playAudio = () => {
    audio?.play();
    setIsPlaying(true);
  };

  useEffect(() => {
    console.log('useEffect');
    audio?.addEventListener('ended', () => {
      setIsPlaying(false);
    });

    return () => {
      console.log('return');
      audio?.removeEventListener('ended', () => {
        setIsPlaying(false);
      });
    };
  }, [audio]);

  if (!phonetic) return <div className="text-white">No audio found</div>;

  return (
    <div>
      <div className="text-white">{phonetic.text}</div>
      {phonetic.audio !== '' && (
        <button
          onClick={playAudio}
          className={`${isPlaying ? 'bg-indigo-400' : 'bg-slate-500'}`}>
          Play Audio
        </button>
      )}
    </div>
  );
};

export default DictionaryPhonetic;

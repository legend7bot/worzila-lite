import React, { Dispatch, SetStateAction, useEffect } from 'react';

import FontSelector from './elements/FontSelector';
import Toggler from './elements/Toggler';

interface AppBarProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean | undefined>>;
  font: 'serif' | 'sans' | 'mono';
  setFont: Dispatch<SetStateAction<'serif' | 'sans' | 'mono'>>;
}

const AppBar: React.FC<AppBarProps> = (props) => {
  const { darkMode, setDarkMode, font, setFont } = props;
  const [opacity, setOpacity] = React.useState<boolean>(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setOpacity(true);
    } else {
      setOpacity(false);
    }
  };
  console.log(opacity);
  window.addEventListener('scroll', changeNavbarColor);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  return (
    <div className="flex h-20 w-auto">
      <div
        className={`fixed top-0 z-[999] flex h-20 w-[100vw] items-center justify-around rounded-full ${
          opacity ? 'bg-[#eeeedd]/70' : 'bg-[#eeeedd]/100'
        } ${opacity ? 'dark:bg-[#1A1A2E]/70' : 'dark:bg-[#1A1A2E]/100'}`}>
        <Toggler
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <FontSelector
          font={font}
          setFont={setFont}
        />
      </div>
    </div>
  );
};

export default AppBar;

import React, { Dispatch, SetStateAction } from 'react';

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

  return (
    <div className="z-[999] flex h-20 w-[100vw] items-center justify-around rounded-full bg-[#eeeedd] dark:bg-[#1A1A2E]">
      <Toggler
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <FontSelector
        font={font}
        setFont={setFont}
      />
    </div>
  );
};

export default AppBar;

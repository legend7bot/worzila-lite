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
    <div className="flex h-20 w-[100vw] items-center justify-around bg-slate-200 dark:bg-slate-900">
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

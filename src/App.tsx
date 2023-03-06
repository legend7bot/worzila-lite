import React, { useEffect, useState } from 'react';
import AppBar from './components/AppBar';
import Dictionary from './components/Dictionary';

//Light-Pallete: https://www.color-hex.com/color-palette/65620
//Dark-Pallete: https://colorhunt.co/palette/1a1a2e16213e0f3460e94560

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>();
  const [font, setFont] = useState<'serif' | 'sans' | 'mono'>('sans');

  useEffect(() => {
    const localDarkMode = localStorage.getItem('darkMode');
    const localFont = localStorage.getItem('font');
    if (localDarkMode) {
      setDarkMode(JSON.parse(localDarkMode));
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
      }
    }
    if (localFont) {
      setFont(localFont as 'serif' | 'sans' | 'mono');
    }
  }, []);

  useEffect(() => {
    if (darkMode === undefined) return;
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    localStorage.setItem('font', font);
  }, [darkMode, font]);

  if (darkMode === undefined) return <div>Loading...</div>;

  return (
    <div
      className={`${
        darkMode ? 'dark bg-[#16213E]' : 'bg-[#ffffee]'
      } h-[100vh] w-[100vw] fnt-${font}`}>
      <AppBar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        font={font}
        setFont={setFont}
      />
      <Dictionary />
    </div>
  );
};

export default App;

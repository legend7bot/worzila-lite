import React, { useEffect, useState } from 'react';
import AppBar from './components/AppBar';
import Dictionary from './components/Dictionary';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>();
  const [font, setFont] = useState<'serif' | 'sans' | 'mono'>('sans');

  useEffect(() => {
    const localDarkMode = localStorage.getItem('darkMode');
    if (localDarkMode) {
      setDarkMode(JSON.parse(localDarkMode));
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode === undefined) return;
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  if (darkMode === undefined) return <div>Loading...</div>;

  return (
    <div
      className={`${
        darkMode ? 'dark bg-slate-800' : 'bg-[#f5f5f5]'
      } h-[100vh] w-[100vw] font-${font}`}>
      <AppBar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        font={font}
        setFont={setFont}
      />
      <h1 className="dark:bg-slate-800 dark:text-white">Hello World</h1>
      <Dictionary />
    </div>
  );
};

export default App;

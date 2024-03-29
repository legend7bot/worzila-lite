import React, { useEffect, useState } from 'react';
import AppBar from './components/AppBar';
import Dictionary from './components/Dictionary';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>();
  const [font, setFont] = useState<'serif' | 'sans' | 'mono'>('sans');

  useEffect(() => {
    const localDarkMode = localStorage.getItem('darkMode');
    const localFont = localStorage.getItem('font');
    if (localDarkMode) {
      setDarkMode(JSON.parse(localDarkMode));
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
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
        darkMode ? 'dark bg-[#16213E]' : 'bg-[#fefbe9]'
      } h-full w-full fnt-${font} min-h-[100vh] overflow-x-hidden`}>
      <AppBar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        font={font}
        setFont={setFont}
      />
      <Dictionary />
      <Footer />
    </div>
  );
};

export default App;

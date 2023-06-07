import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.css';
import Navbar from './components/navbar.js';


function App() {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLanguage);
  };

  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <div>
          <Navbar language={language} onToggleLanguage={toggleLanguage} />
        </div>
      </LanguageProvider>
     </ThemeProvider> 
  );
}

export default App;
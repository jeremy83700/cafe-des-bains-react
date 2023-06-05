import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';
import Navbar from './components/Navbar.js';

function App() {
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLanguage);
  };

  return (
    <LanguageProvider>
      <div>
        <Navbar language={language} onToggleLanguage={toggleLanguage} />
      </div>
    </LanguageProvider>
    
  );
}

export default App;
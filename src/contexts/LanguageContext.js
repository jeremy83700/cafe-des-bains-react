import React, { createContext, useState } from 'react';

// Créez un contexte pour stocker la langue
export const LanguageContext = createContext();

// Créez un composant fournisseur de contexte pour gérer la langue
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  // Fonction pour changer la langue
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
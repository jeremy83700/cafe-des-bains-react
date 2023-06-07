import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.js';
import Logo from '../img/logo/Logo cafe des bains vintage.webp';
import LogoEcrit from '../img/logo/Logo cafe des bains ecriture.webp';
import FlagEn from '../img/logo/flag en.webp';
import FlagFr from '../img/logo/flag fr.webp';
import './Navbar.css';


const Navbar = ({ language, onToggleLanguage }) => {
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [flagIcon, setFlagIcon] = useState(FlagFr);

  const handleLanguageChange = () => {
    if (currentLanguage === 'fr') {
      setCurrentLanguage('en');
      setFlagIcon(FlagEn);
    } else {
      setCurrentLanguage('fr');
      setFlagIcon(FlagFr);
    }
    onToggleLanguage(); // Appeler la fonction onToggleLanguage après le changement de langue
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <header className='wrapper-menu'>
          <div className="logo-navbar">
            <img src={Logo} alt="logo cafe des bains" className="logo-img" />
            <img src={LogoEcrit} alt="logo cafe des bains" className="logo-img2" />
          </div>

          <nav className="wrapper-nav">
            <Stack spacing={4} direction="row">
              <Button variant="text" size='large' color='orclair' sx={{ fontFamily: 'Neuton', fontSize: '1em' }}>
                {currentLanguage === 'fr' ? 'Brasserie' : 'Brewery'}
              </Button>
              <Button variant="text" size='medium' color='orclair' sx={{ fontFamily: 'Neuton', fontSize: '1em' }}>
                {currentLanguage === 'fr' ? 'La carte' : 'Menu'}
              </Button>
              <Button variant="text" size='medium' color='orclair' sx={{ fontFamily: 'Neuton', fontSize: '1em' }}>
                {currentLanguage === 'fr' ? 'Concert' : 'Live Musik'}
              </Button>
              <Button variant="text" size='medium' color='orclair' sx={{ fontFamily: 'Neuton', fontSize: '1em'  }}>
                Cocktails
              </Button>
            </Stack>
          </nav>

          <div className="wrapper-language-reservation">
            <Stack spacing={4} direction="row">
              <Button variant="contained" color='orclair'  sx={{ fontFamily: 'Neuton', fontSize: '1em', color:"bleucafedesbains", padding:'0.5em 2em 0.5em 2em', margin: "2em" }} className='button-wrapper-reservation'>
                {currentLanguage === 'fr' ? 'Réserver' : 'Booking'}
              </Button>
              <Button onClick={handleLanguageChange} >
                <img src={flagIcon} alt="Language flag" className="button-wrapper-language"/>
              </Button>
            </Stack>
          </div>

          <div className="menu-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>
      </ThemeProvider>
    </>
  );
};

export default Navbar;

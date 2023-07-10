import React, { useState, useRef, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme.js';
import Logo from '../img/logo/Logo cafe des bains vintage.webp';
import LogoEcrit from '../img/logo/Logo cafe des bains ecriture.webp';
import FlagEn from '../img/logo/flag en.webp';
import FlagFr from '../img/logo/flag fr.webp';
import lottie from 'lottie-web';
import animationData from '../img/logo/burger-menu.json';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import './Navbar.css';

const Navbar = ({ language, onToggleLanguage }) => {
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [flagIcon, setFlagIcon] = useState(FlagFr);
  const lottieContainerRef = useRef(null);

  const handleLanguageChange = () => {
    if (currentLanguage === 'fr') {
      setCurrentLanguage('en');
      setFlagIcon(FlagEn);
    } else {
      setCurrentLanguage('fr');
      setFlagIcon(FlagFr);
    }
    onToggleLanguage();
  };

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData, 
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
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
              Menu
            </Button>
            <Button variant="text" size='medium' color='orclair' sx={{ fontFamily: 'Neuton', fontSize: '1em' }}>
              {currentLanguage === 'fr' ? 'Concert' : 'Live Musik'}
            </Button>
            <Button variant="text" size='medium' color='orclair' sx={{ fontFamily: 'Neuton', fontSize: '1em' }}>
              Cocktails
            </Button>
          </Stack>
        </nav>

        <div className="wrapper-language-reservation">
          <Stack spacing={4} direction="row">
            <div className="div-wrapper-language">
            <Button variant="contained" sx={{ fontFamily: 'Neuton', fontSize: '1em', color: "#1A2B3C", padding: '0.5em 2em 0.5em 2em', margin: "2em", background: 'radial-gradient(circle at center, #F5C169, #A87827);'}} className='button-wrapper-reservation'>
              {currentLanguage === 'fr' ? 'Réserver' : 'Booking'}
            </Button>
            </div>
            <div className="div-RestaurantMenuOutlinedIcon">
            <RestaurantMenuOutlinedIcon color='orclair'size='Large'>
            </RestaurantMenuOutlinedIcon>
            </div>
            <div className="div-flagicon">
              <Button onClick={handleLanguageChange}>
                <img src={flagIcon} alt="Language flag" className="button-wrapper-language" />
              </Button>
            </div>
            <div className="lottie-burger-menu" ref={lottieContainerRef} id="lottie-container">

            </div>
          </Stack>
        </div>

      </header>
    </ThemeProvider>
  );
};

export default Navbar;

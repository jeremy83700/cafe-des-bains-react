
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Logo from '../img/logo/Logo cafe des bains blanc.webp';
import './Navbar.css';



import './Navbar.css';


const Navbar = ({language, onToggleLanguage}) => {

  return (<>
    <header className='wrapper-menu'>

      <div className="logo-navbar">

        <img src={Logo} alt="logo cafe des bains" class="logo-img"/>

      </div>

      <div className="wrapper-menu">

        <nav class="menu">
          <ul>
          <Stack spacing={4} direction="row">

            <Button variant="text">{language === 'fr' ? 'Brasserie' : 'Brewery'}</Button>
            <Button variant="text">{language === 'fr' ? 'La carte' : 'Menu'}</Button>
            <Button variant="text">{language === 'fr' ? 'Concert' : 'Live Musik'}</Button>
            <Button variant="text">Cocktails</Button>

          </Stack>
          </ul>
        </nav>

        
      
      </div>

      <div className="wrapper-language-reservation">

        <Button variant="contained" className='button-wrapper-reservation'>{language === 'fr' ? 'Réserver' : 'Booking'}</Button>
        <Button onClick={onToggleLanguage} className="button-wrapper-language">Changer la langue</Button>

      </div>

      <div className="menu-burger">

        <span></span>
        <span></span>
        <span></span>

      </div>

    </header>

  </>
    
  )
}


export default Navbar;
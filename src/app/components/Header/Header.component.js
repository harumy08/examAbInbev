import React from 'react';

const Header = () => {
    const displayLine = 'Examination for the Front End Vacancy';
    const displayName = 'Exchange rates of the Mexican Peso against Other Currencies';

    return ( 
        <header>
         <div className='container'>
          <h4>{`${displayLine}`}</h4>
          <h5>{`${displayName}`}</h5>
         </div>
        </header>
     );
};

export default Header;
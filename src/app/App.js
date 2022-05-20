import React from 'react';
import Header from './components/Header/Header.component'
import FxRatesGraph from './components/FxRates/fxratesgraph.component'
import Footer from './components/Footer/footer.component'

/**
 * App: main component of project
 * @returns
 */
const App = () => {
  

  return (
    <div>
      <Header/>
      <main>
       <section>
        <div className='container'>
         <FxRatesGraph/>
         </div>
      </section>
     </main>
      <Footer/>
    </div>
  );
};

export default App;

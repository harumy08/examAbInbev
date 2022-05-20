import C3Chart from 'react-c3js';
import 'c3/c3.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FxRatesGraph = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([])

  const [data, setData] = useState({data: { 

    columns: [
    
    ["USD", 0.042243,0.049736,0.049764,0.049944,0.050145,0.049913,0.050155],
    ["GBP", 0.040564,0.040555,0.040551,0.040597,0.040524,0.040168,0.040432],
    ["EUR", 0.047768,0.047774,0.047849,0.047845,0.047542,0.047659,0.047412],
    ["CHF", 0.049671,0.049818,0.049817,0.04988,0.05004,0.049843,0.04927],
    ["JPY", 6.366631,6.427669,6.42908,6.441307,6.439023,6.491589,6.384755]
  ]}});

  

  var myHeaders = new Headers();
  myHeaders.append("apikey", "uP8RIEjOxYLVGOituaLDllDDj5HdXkqK");//

  const config = {
      redirect: 'follow',
      headers: myHeaders
  }

  

  
   


  useEffect(() => {
    let date = new Date();
    var endDate = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');


    var starDate = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + (String(date.getDate()).padStart(2, '0')-7);

    fetch("https://api.apilayer.com/fixer/timeseries?start_date="+starDate+"&end_date="+endDate+"&symbols=USD,EUR,GBP,CHF,JPY&base=MXN&", config)
    .then((response) => { 
      return response.json()
    })
    .then((items) => { 

      setIsLoading(false);
    
  }).catch(error => console.log('error', error));

  }, []);


  if (isLoading) return ( 
     
        <div className="row">
         <div className="one column">
           <div className='card'>
             <h6>Cargando...</h6>
           </div>
         </div>
        </div>
 
     );

   return( 
     
    <div className="row">
     <div className="one column">
       <div className='card'>
         <h6>Historical rates based on the Mexican currency with other currencies</h6>
         <C3Chart data={data.data} />
       </div>
     </div>
    </div>

 );


};

export default FxRatesGraph;
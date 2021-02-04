import React from 'react';
import Homepage from './components/homepage/homepage.js';

function App(){
  const fname = 'Marissa';
  return(
    <Homepage firstName={fname} />
  )
}

export default App;

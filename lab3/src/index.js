import React from 'react';

import ReactDOM from 'react-dom';

const customer = {

  first_name: "Marissa",

  last_name: "Scarangella"

};

const output = <div>
  <h1>My name is {customer.first_name}</h1>
    <h2>My last name is {customer.last_name}</h2>
</div>;

ReactDOM.render(output, document.querySelector("#root"));

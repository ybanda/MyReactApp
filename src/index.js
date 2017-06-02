import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY='AIzaSyD3xMCbiLdA7oPyohavecPP_glB1F4AqFo';

const App = () => {
  return (
        <div>
           <h1> My ReactJs App</h1> 
            <br/>
            <SearchBar/>
        </div>
  );
}

ReactDOM.render(<App/>,document.querySelector('.myApp'));



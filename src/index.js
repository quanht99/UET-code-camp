import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import Routing from "./App/Routing";

ReactDOM.render(
    <BrowserRouter>
        <Routing/>
    </BrowserRouter>,
    document.getElementById('root')
);


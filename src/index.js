
import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';

import Omoss from './pages/Omoss';
import Onepost from "./components/Onepost";
import Homepage from './pages/Homepage';
import Kontakt from './pages/Kontakt';
import HvaHanGjor from './pages/HvaHanGjor';

//import * as serviceWorker from './serviceWorker';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App>
      <Routes>
              <Route Component={Homepage} path="/" exact />
              <Route Component={HvaHanGjor} path="/hva-han-gjor/:companytitle" />
              <Route Component={HvaHanGjor} path="/hva-han-gjor" />
              <Route Component={Omoss} path="/om-han" />
              <Route Component={Kontakt} path="/kontakt" />
              <Route Component={Onepost} path="/:slug" />
      </Routes>
    </App>
    </BrowserRouter>);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();








/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/


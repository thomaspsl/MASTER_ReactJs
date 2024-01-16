import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './layouts/App';

import Home from "./routes/Home";
import Pokemon from "./routes/Pokemon";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
  <React.StrictMode> 
    <BrowserRouter>
        <Routes>
          {/* Default Website Route */}
          <Route path="/" element={<App title="Homepage | thomaspsl"/>} >

            {/* New Website Routes */}
            <Route path="/" element={<Home title="Homepage | thomaspsl"/>}  />
            <Route path="/pokemon/:name" element={<Pokemon title="Pokemon | thomaspsl"/>} />
          </Route>
        </Routes>
      </BrowserRouter> 
  </React.StrictMode>
</>
);

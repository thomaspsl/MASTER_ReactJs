import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './screens/App';
import './index.css';

import Agenda from "./components/Agenda";
import Counter from "./components/Counter";
import Home from "./components/Home";
import Typer from "./components/Typer";
import Weather from "./components/Weather";

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
              <Route path="/agenda" element={<Agenda title="Agenda | thomaspsl"/>} />
              <Route path="/counter" element={<Counter title="Counter | thomaspsl"/>} />
              <Route path="/typer" element={<Typer title="Typer | thomaspsl"/>} />
              <Route path="/weather" element={<Weather title="Weather | thomaspsl"/>} />

            </Route>
          </Routes>
        </BrowserRouter> 
    </React.StrictMode>
  </>
);

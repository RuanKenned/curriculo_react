import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import Clientes from './pages/Clientes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route exact path="/" element={ <Sobre/>} />
        
        <Route exact path="/projetos" element={ <Projetos/>} />

        <Route exact path="/clientes" element={ <Clientes/>} />
        
        <Route exact path="/contato" element={ <Contato/>} />
      </Route>
    </Routes>    
  </BrowserRouter>
);
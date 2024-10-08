import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PaginaCadastroTeam from './Page/cadastroPage/PageCadastroTeam';
import PaginaExcluirTeam from './Page/excluirPage/PageExcluirTeam';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/CadastroTeam" element={<PaginaCadastroTeam/>}/>
        <Route path="/ExcluirTeam" element={<PaginaExcluirTeam/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/Globalstyle';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Nav />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

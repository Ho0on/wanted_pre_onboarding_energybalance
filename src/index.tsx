import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/Globalstyle';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Test from './pages/Test/Test';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    {/* 
   <Main /> 
   <Footer />
  */}
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/Globalstyle';
import Main from './pages/Main/Main';
// import Test from './pages/Test/Test';
ReactDOM.render(
  <React.StrictMode>
    <Main />
    {/* <Test /> */}
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

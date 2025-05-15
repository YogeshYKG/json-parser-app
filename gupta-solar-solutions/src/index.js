import React from 'react';
import ReactDOM from 'react-dom/client';



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import AppRouter from './AppRouter';
import Footer from './Components/Footer/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <AppRouter /> 
    <Footer />
  </React.StrictMode>
);

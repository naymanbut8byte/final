import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Öncelikle root isimli elementi bulur ardından react.app root isimli elementi temel olarak ele alır. Örneğin: bir inşaat yapılacaksa temeline beton atmak gibi.
root.render(<App />);


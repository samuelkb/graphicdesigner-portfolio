import React from 'react';
import Header from '../components/Header';
import Inicio from '../components/Inicio';
import Nosotros from '../components/Nosotros';
import Productos from '../components/Productos';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

export default function App({ initialData }) {
  return (
    <div>
      <h1>{initialData.appName}</h1>
      <Header />
      <Inicio />
      <Nosotros />
      <Productos />
      <Contacto />
      <Footer />
    </div>
  );
}

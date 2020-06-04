import React from 'react';
import Header from '../components/Header';
import Novedades from '../components/Novedades';
import Nosotros from '../components/Nosotros';
import Productos from '../components/Productos';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

export default function App({ initialData }) {
  return (
    <div>
      <Header />
      <Novedades />
      <Nosotros />
      <Productos />
      <Contacto />
      <Footer />
    </div>
  );
}

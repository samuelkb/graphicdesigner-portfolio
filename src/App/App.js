import React from 'react';
import Header from '../components/Header';
import Nosotros from '../components/Nosotros';
import Productos from '../components/Productos';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

export default function App({ initialData }) {
  return (
    <div>
      <Header />
      <Nosotros />
      <Productos />
      <Contacto />
      <Footer />
    </div>
  );
}

import React from 'react';

function Header() {
  return (
    <header>
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Nosotros</a>
          </li>
          <li>
            <a>Productos</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

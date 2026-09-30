import { useState } from "react";
function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);
  function openMenu() {
    setMenuAberto(true);
  }
  function closeMenu() {
    setMenuAberto(false);
  }
  return (
    <div>
      <button id="menu-toggle" className="menu-btn" onClick={openMenu}>
        ☰ Abrir Menu
      </button>
      <nav
        id="sidebar-menu"
        className={`sidebar ${menuAberto ? "active" : ""}`}
      >
        <button id="menu-close" className="close-btn" onClick={closeMenu}>
          &times;
        </button>
        <ul className="menu-links">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
      <div
        id="menu-overlay"
        className={`overlay ${menuAberto ? "active" : ""}`}
        onClick={closeMenu}
      />
    </div>
  );
}
export default Menu;

import { Container, Grid } from "@mui/material";
import { useState } from "react";
import type { LogoTamanho } from "../types";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

interface HeaderProps {
  img: LogoTamanho;
  avatar: LogoTamanho;
}

function Header({ img, avatar }: HeaderProps) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [filmesAberto, setFilmesAberto] = useState(false);

  function abrirMenu() {
    setMenuAberto(true);
  }

  function fecharMenu() {
    setMenuAberto(false);
    setFilmesAberto(false);
  }

  function abrirFilmes() {
    setFilmesAberto((prev) => !prev);
  }

  function Logout() {
    if (confirm("Desja sair da Aplicação")) {
      Cookies.remove("authorization");
      location.reload();
    }
  }

  return (
    <>
      {/* HEADER */}
      <Grid container size={{ lg: 12, xs: 12 }}>
        <Container maxWidth="xl">
          <Grid
            size={{ lg: 12, xs: 12 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 1,
            }}
          >
            {/* LOGO */}
            <img
              className="img2"
              style={{
                width: img.width,
                height: img.height,
              }}
              src="netflix-logo.png"
              alt="Netflix"
            />

            {/* AVATAR */}
            <button
              className="avatar-button"
              onClick={abrirMenu}
              aria-label="Abrir menu"
            >
              <img
                className="img2 border"
                style={{
                  width: avatar.width,
                  height: avatar.height,
                }}
                src="netflix-avatar.png"
                alt="Avatar"
              />
            </button>
          </Grid>
        </Container>
      </Grid>

      {/* OVERLAY */}
      <div
        className={`menu-overlay ${menuAberto ? "active" : ""}`}
        onClick={fecharMenu}
      />

      {/* MENU LATERAL */}
      <aside className={`user-menu ${menuAberto ? "active" : ""}`}>
        {/* BOTÃO FECHAR */}
        <button
          className="menu-close"
          onClick={fecharMenu}
          aria-label="Fechar menu"
        >
          ×
        </button>

        {/* PERFIL */}
        <div className="menu-profile">
          <img src="netflix-avatar.png" alt="Avatar" />

          <h3>Meu Perfil</h3>
        </div>

        {/* LINKS */}
        <nav className="menu-links">
          <Link to="/">Início</Link>

          <Link to="/">Minha Lista</Link>

          {/* FILMES */}
          <button
            className="menu-filmes-button"
            onClick={abrirFilmes}
            type="button"
          >
            <span>Filmes</span>

            <span className={`arrow ${filmesAberto ? "active" : ""}`}>›</span>
          </button>

          {/* SUBMENU DE FILMES */}
          <div className={`submenu-filmes ${filmesAberto ? "active" : ""}`}>
            <Link to="/">Ação</Link>

            <Link to="/">Comédia</Link>

            <Link to="/">Terror</Link>

            <Link to="/">Suspense</Link>

            <Link to="/">Romance</Link>

            <Link to="/">Guerra</Link>
          </div>

          {/* OUTROS LINKS */}
          <Link to="/">Séries</Link>

          <Link to="/">Configurações</Link>

          <span className="link2" onClick={Logout}>
            Sair
          </span>
        </nav>
      </aside>
    </>
  );
}

export default Header;

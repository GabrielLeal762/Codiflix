import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
import Cookies from "js-cookie";

//PAGES

import { Login, Home } from "./page";
import { Cadastro } from "./page";
const SecureRoute = () => {
  const cookiesAuth = Cookies.get("authorization");
  if (!cookiesAuth) {
    alert("Login necessario");
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SecureRoute />}>
          <Route path="/" element={<Home />}>
            Home
          </Route>
        </Route>

        <Route path="/login" element={<Login />}>
          Login
        </Route>
        <Route path="/Cadastro" element={<Cadastro />}>
          Cadastro
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

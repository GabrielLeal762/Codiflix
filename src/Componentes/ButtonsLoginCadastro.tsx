import { Link } from "react-router-dom";

function ButtonsLC() {
  return (
    <>
      <span>
        <Link className="link" to={"/login"}>
          Faça Login
        </Link>
      </span>
      <span>
        <Link className="link" to={"/Cadastro"}>
          Faça seu Cadastro
        </Link>
      </span>
    </>
  );
}

export default ButtonsLC;

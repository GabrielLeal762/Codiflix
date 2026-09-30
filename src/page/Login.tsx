import { Grid, Container } from "@mui/material";
import Logo from "../Componentes/StyledLogo";
import Formulario from "../Componentes/Formulario";
import ButtonsLC from "../Componentes/ButtonsLoginCadastro";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useValidation } from "../hooks";

import { RequestPost } from "../hooks";
import type { LoginData, Menssage, PostData } from "../types";
import { useEffect, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type { JWToken } from "../types";
function Login() {
  const inputs = [
    { type: "email", placeholder: "Email" },
    { type: "password", placeholder: "Senha" },
  ];

  const navigate = useNavigate();
  const { HandleChange, formValues, valid } = useValidation(inputs);

  const { data, loading, Usepost, error, success } = RequestPost<
    LoginData,
    PostData
  >("login");

  const HandleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await Usepost({
      email: String(formValues[0]),
      password: String(formValues[1]),
    });
  };

  useEffect(() => {
    if (!data) return;

    const token = data?.authorization.replace("Bearer", "");
    const result = jwtDecode<JWToken>(token);
    console.log("Valor atribuido", result);
    console.log("Id do usuario", result.sub);
    Cookies.set("authorization", data.authorization, {
      sameSite: "strict",
      expires: result.exp,
    });
    if (Cookies.get("authorization")) {
      navigate("/", { replace: true });
    }
  }, [data, navigate]);

  const HandleMenssage = (): Menssage => {
    if (success) {
      return { type: "success", comentario: "Login feito com sucesso" };
    }
    if (error === 401) {
      return { type: "error", comentario: "Email ou senha errados" };
    }
    if (error === 404) {
      return { type: "error", comentario: "Rotas não encontradas" };
    }
    return {
      type: "success",
      comentario: "",
    };
  };

  return (
    <div className="background-secondary">
      <Grid
        container
        size={{ sm: 12, xs: 12, lg: 12 }}
        sx={{ marginTop: 12, justifyContent: "center", display: "flex" }}
      >
        <Grid size={{ sm: 12, xs: 12, lg: 6 }}>
          <Container>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Logo width={248} height={86} />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Formulario
                inputs={inputs.map((inputs, index) => ({
                  placeholder: inputs.placeholder,
                  value: formValues[index] ?? "",
                  type: inputs.type,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => {
                    HandleChange(index, (e.target as HTMLInputElement).value);
                  },
                }))}
                button={[
                  {
                    className: `button ${!valid ? "adm" : ""}`,
                    type: "submit",
                    disabled: !valid,
                    children: loading ? "Enviando" : "Enviar",
                    onClick: HandleSubmit,
                  },
                ]}
                menssage={HandleMenssage()}
              />
            </Grid>
            <Grid
              container
              size={{ lg: 12 }}
              sx={{ justifyContent: "center", display: "flex" }}
            >
              <Grid
                size={{ lg: 5 }}
                sx={{ justifyContent: "space-between", display: "flex" }}
              >
                <ButtonsLC />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;

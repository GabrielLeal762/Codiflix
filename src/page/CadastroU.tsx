import { Grid, Container } from "@mui/material";
import Logo from "../Componentes/StyledLogo";
import Formulario from "../Componentes/Formulario";
import ButtonsLC from "../Componentes/ButtonsLoginCadastro";
import type { CadastroUsuario, CadastroData } from "../types";
import type { Menssage } from "../types";

import { useValidation } from "../hooks";

import { RequestPost } from "../hooks";
import type { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
function CadastroU() {
  const navigate = useNavigate();
  const inputs = [
    { type: "text", placeholder: "Nome" },
    { type: "email", placeholder: "Email" },
    { type: "password", placeholder: "Senha" },
  ];
  const { HandleChange, formValues, valid } = useValidation(inputs);

  const { data, loading, Usepost, error, success } = RequestPost<
    CadastroData,
    CadastroUsuario
  >("usuarios");

  const HandleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await Usepost({
      nome: String(formValues[0]),
      email: String(formValues[1]),
      password: String(formValues[2]),
      administrador: "true",
    });
    console.log(data);
    if (result) {
      return navigate("/login", { replace: true });
    }
  };

  const HandleMenssage = (): Menssage => {
    if (success) {
      return {
        type: "success",
        comentario: "Cadastro feito com sucesso",
      };
    }

    if (error === 400) {
      return {
        type: "error",
        comentario: "Email e senha já cadastrados",
      };
    }

    if (error === 404) {
      return {
        type: "error",
        comentario: "Rota não encontrada",
      };
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
            <h1>Cadastre-se</h1>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Formulario
                inputs={inputs.map((inputse, index) => ({
                  placeholder: inputse.placeholder,
                  value: formValues[index] ?? "",
                  type: inputse.type,
                  onChange: (e: ChangeEvent<HTMLInputElement>) => {
                    HandleChange(index, (e.target as HTMLInputElement).value);
                  },
                }))}
                menssage={HandleMenssage()}
                button={[
                  {
                    type: "submit",
                    className: `button ${!valid ? "adm" : ""}`,
                    disabled: !valid,
                    children: loading ? "Enviando" : "Enviar",
                    onClick: HandleSubmit,
                  },
                ]}
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

export default CadastroU;

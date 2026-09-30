import type { Formes } from "../types";

function Formulario(props: Formes) {
  const { inputs, button, menssage } = props;

  return (
    <form>
      {inputs.map((inputs, index) => (
        <input className="input" key={index} {...inputs} />
      ))}

      {button.map((button, index) => (
        <button key={index} {...button} />
      ))}

      {menssage && (
        <span style={{ color: menssage.type == "success" ? "green" : "red" }}>
          {menssage.comentario}
        </span>
      )}
    </form>
  );
}

export default Formulario;

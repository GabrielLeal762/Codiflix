import type React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export type Menssage = {
  type: "success" | "error";
  comentario: string;
};

export interface Formes {
  inputs: InputProps[];
  button: ButtonProps[];
  menssage: Menssage;
}
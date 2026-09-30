import { useState } from "react";
import type { InputProps } from "../types";

export const useValidation = (input: InputProps[]) => {
    const [formValues, setFormValues] = useState(input.map((inputs)=>{return inputs.value ||null}))

    const valid = input.every((inputs, index) => {
        const valor = formValues[index];

        if (inputs.type === "email") {
            return /\S+@\S+\.\S+/.test(String(valor));
        }

        if (inputs.type === "password") {
            return String(valor).length > 7;
        }

        return true;
    });

    const HandleChange = (index: number, value: string) => {
        setFormValues((prevValue) => {
            const newValue = [...prevValue];
            newValue[index] = value;

            return newValue;
        });
    };

    return {
        HandleChange,
        formValues,
        valid,
    };
};
import { validarDataNascimento } from "./validarDataNascimento.js";

export const validarInput = input => {
    const tipo = input.dataset.tipo;
    const validadoresEspecificos = {
        dataNascimento: input => validarDataNascimento(input)
    }

    if (validadoresEspecificos[tipo]) {
        validadoresEspecificos[tipo](input);
    }
};
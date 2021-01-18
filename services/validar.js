import { validarDataNascimento } from "./validarDataNascimento.js";
import { validarCPF } from "./validarCPF.js";

const retornarMensagemDeErro = (tipo, validity) => {

    let mensagemDeErro = "";

    const tiposDeErro = ["valueMissing", "typeMismatch", "tooShort", "rangeUnderflow"];

    const mensagensDeErro = {
        email: {
            valueMissing: "O e-mail é necessário",
            typeMismatch: "Este não é um e-mail válido"
        },
        senha: {
            valueMissing: "A senha é necessária",
            tooShort: "A senha deve ter no mínimo 4 caracteres"
        },
        dataNascimento: {
            valueMissing: "A data de nascimento é necessária",
            rangeUnderflow: "A data mínima é 01/01/1991",
            customError: "A idade mínima é de 18 anos"
        },
        cpf: {
            valueMissing: "O CPF é necessário",
            customError: "Este não é um cpf válido"
        },
        rg: {
            valueMissing: "O RG é necessário",
        },
        cep: {
            valueMissing: "O CEP é necessário",
        },
        logradouro: {
            valueMissing: "O logradouro é necessário",
        },
        cidade: {
            valueMissing: "A cidade é necessária",
        },
        estado: {
            valueMissing: "O estado é necessário",
        }
    }

    tiposDeErro.forEach(erro => {
        if (validity[erro]) {
            mensagemDeErro = mensagensDeErro[tipo][erro];
        }
    });

    return mensagemDeErro;
}

export const validarInput = (input, adicionarErro = true) => {
    const classeElementoErro = "erro-validacao";
    const classeInputErro = "possui-erro-validacao";

    const elementoPai = input.parentNode; // acessamos o elemento pai, no caso a div input-container
    const elementoErroExiste = elementoPai.querySelector(`.${classeElementoErro}`);
    const elementoErro = elementoErroExiste || document.createElement("div");

    const elementoEhValido = input.validity.valid;

    const tipo = input.dataset.tipo;
    const validadoresEspecificos = {
        dataNascimento: input => validarDataNascimento(input),
        cpf: input => validarCPF(input)
    }

    if (validadoresEspecificos[tipo]) {
        validadoresEspecificos[tipo](input);
    }

    if (!elementoEhValido) {
        // não é válido
        elementoErro.className = classeElementoErro;
        elementoErro.textContent = retornarMensagemDeErro(tipo, input.validity);
        if (adicionarErro) {
            input.after(elementoErro);
            input.classList.add(classeInputErro);
        }
    } else {
        // é válido
        elementoErro.remove();
        input.classList.remove(classeInputErro);
    }
};
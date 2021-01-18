import { validarInput } from "./validar.js";

window.onload = () => { // só executa a função quando a página estiver carregada
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            validarInput(input);
        });
    });
}
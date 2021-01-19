import { validarInput } from "./validar.js";

window.onload = () => { // só executa a função quando a página estiver carregada
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        if (input.dataset.tipo === "preco") {
            SimpleMaskMoney.setMask(input, {
                allowNegative: false,
                negativeSignafter: false,
                prefix: "R$ ",
                fixed: true,
                fractionDigits: 2,
                decimalSeparator: ",",
                thousandSeparator: ".",
                cursor: "end"
            });
        }

        input.addEventListener("input", () => {
            validarInput(input, false);
        });

        input.addEventListener('blur', () => {
            validarInput(input);
        })
    });
}
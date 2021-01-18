const ehUmCPFComNumerosRepetidos = (cpf) => {
    const cpfsInvalidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ];

    return cpfsInvalidos.includes(cpf); // se incluir, é porque há algum erro
}

export const validarCPF = input => {
    const cpfNumeros = input.value.replace(/\D/g, ""); // regEx

    if (ehUmCPFComNumerosRepetidos(cpfNumeros)) {
        input.setCustomValidity("Este não é um CPF válido");
        return;
    }

    input.setCustomValidity("");
    return;
}
export const validarDataNascimento = input => {
    const dataNascimento = new Date(input.value);
    const dataAtual = new Date();

    // 13/12/2001
    const verificacaoIdade = new Date(
        dataNascimento.getUTCFullYear() + 18, // ano + 18 
        dataNascimento.getUTCMonth(),
        dataNascimento.getUTCDate());

    if (verificacaoIdade > dataAtual) {
        input.setCustomValidity("A idade mínima é de 18 anos");
        return;
    }

    input.setCustomValidity("");
    return;
}
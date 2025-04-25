const botao = document.getElementById('entrarBtn');
const input = document.getElementById('senhaInput');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', function() {
    resultado.innerHTML = ""; // limpa a tela

    const senha = Number(input.value); // pega o valor digitado

    let i = 0;
    while (i <= senha) { // parecido com o saldo > 0
        resultado.innerHTML += "Senha: " + i + "<br>"; // adiciona o texto no DOM
        i++;
    }
});

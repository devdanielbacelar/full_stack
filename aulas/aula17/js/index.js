function criarPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criarPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criarPessoa('Maria', 'Oliveira', 25);
const pessoa3 = criarPessoa('João', 'Moreira', 25);
const pessoa4 = criarPessoa('Junior', 'Lara', 25);
const pessoa5 = criarPessoa('Jean', 'Otávio', 25);

console.log(pessoa1.nome, pessoa2.sobrenome);
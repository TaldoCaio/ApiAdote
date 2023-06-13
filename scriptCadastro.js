async function postCadastro() {
    const nome = document.getElementById('username').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const cpf = document.getElementById('cpf').value

    await fetch('http://localhost:3100/cadastro', {
        method: "POST",
        body: JSON.stringify({
            nome: nome,
            email: email,
            cpf: cpf,
            senha: senha
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
}

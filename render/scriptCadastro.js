async function postCadastro() {

    document.getElementById('formulario').addEventListener("submit", function(event){
        event.preventDefault()
    });

    const inputnome = document.getElementById('username').value;
    const inputemail = document.getElementById('email').value;
    const inputsenha = document.getElementById('senha').value;
    const inputcpf = document.getElementById('cpf').value;

    await fetch('http://localhost:3100/user/cadastro', {
        method: "POST",
        body: JSON.stringify({
            nome: inputnome,
            email: inputemail,
            cpf: inputcpf,
            senha: inputsenha
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));

        console.log(inputnome,inputemail,inputsenha,inputcpf)
}

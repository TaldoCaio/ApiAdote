async function logar() {
    document.getElementById('loginForm').addEventListener("submit", function (event) {
      event.preventDefault();
    });
  
    const inputemail = document.getElementById('email').value;
    const inputpassword = document.getElementById('password').value;
  
    await fetch('http://localhost:3100/user/login', {
      method: "POST",
      body: JSON.stringify({
        email: inputemail,
        senha: inputpassword
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        if (response.ok) {
          alert("Login bem-sucedido!");
          return response.json();
        } else {
          console.log("Falha no login.");
        }
      })
      .then(json => {
        console.log(json)
        // Verifica se as propriedades estão definidas
        if (json) {
          // Armazena informações no LocalStorage
          localStorage.setItem('user',JSON.stringify(json))
        }

        // Redirecionar para a tela principal
        window.location.href = "../telas/index.html";
      })
      .catch(error => {
        console.log("Erro na solicitação:", error);
      });
  }
  
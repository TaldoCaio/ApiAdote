async function logar() {
    document.getElementById('loginForm').addEventListener("submit", function(event){
        event.preventDefault()
    });

    const inputemail = document.getElementById('email').value
    const inputpassword = document.getElementById('password').value

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
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));

}
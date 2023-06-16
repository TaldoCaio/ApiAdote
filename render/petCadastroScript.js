async function postPet() {

    document.getElementById('formul').addEventListener("submit", function (event) {
        event.preventDefault()
    });

    let racaInput = document.getElementById('raca').value
    let pesoInput = parseInt(document.getElementById('peso').value)
    let idadeInput = parseInt(document.getElementById('idade').value)
    let tipoAnimalInput = parseInt(document.getElementsByName('tipo')[0].value)
    let estaturaInput = parseInt(document.getElementsByName('estatura')[0].value)

    await fetch('http://localhost:3100/pets/cadastro', {
        method: "POST",
        body: JSON.stringify({
            peso: pesoInput,
            raca: racaInput,
            idade: idadeInput,
            animal: tipoAnimalInput,
            estatura: estaturaInput
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));

}
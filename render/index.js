async function renderRaca() {
    //função rodando com npm run carac
    let inputRaca = document.getElementById('racaSelect');
    let inputAnimal;

    // Obter os elementos do tipo "tipo-animal" como um array
    let tipoAnimalElements = Array.from(document.getElementsByName('tipo-animal'));

    // Percorrer o array para encontrar o elemento selecionado
    tipoAnimalElements.forEach(element => {
        if (element.checked) {
            inputAnimal = element.value;
        }
    });

    let tagOp = "";

    if (inputAnimal === "gato") {
        const getRaca = await fetch('http://localhost:3100/caracteristicas/raca/' + 1);
        const resultRaca = await getRaca.json();

        for (let cadaRaca of resultRaca) {
            const raca = cadaRaca.raca;
            const racaID = cadaRaca.racaID;

            tagOp += `<option value=${racaID}>${raca}</option>`;
        }
    } else if (inputAnimal === "cachorro") {
        const getRaca = await fetch('http://localhost:3100/caracteristicas/raca/' + 2);
        const resultRaca = await getRaca.json();

        for (let cadaRaca of resultRaca) {
            const raca = cadaRaca.raca;
            const racaID = cadaRaca.racaID;

            tagOp += `<option value=${racaID}>${raca}</option>`;
        }
    }

    inputRaca.innerHTML = tagOp;

}

renderRaca();

async function postPref() {
    let portePref = parseInt(document.getElementsByName('porte-animal')[0].value);
    let raca = parseInt(document.getElementById('racaSelect').value);
    let idade = parseInt(document.getElementsByName('idade-animal')[0].value);
    let animalInput;
    let inputAnimal;

    // Obter os elementos do tipo "tipo-animal" como um array
    let tipoAnimalElements = Array.from(document.getElementsByName('tipo-animal'));

    // Percorrer o array para encontrar o elemento selecionado
    tipoAnimalElements.forEach(element => {
        if (element.checked) {
            inputAnimal = element.value;
        }
    });

    if (inputAnimal === "gato") {
        animalInput = 1;
    } else if (inputAnimal === "cachorro") {
        animalInput = 2;
    }

    const infoString = localStorage.getItem('user')
    const info = JSON.parse(infoString);

    await fetch('http://localhost:3100/preferencias/insert', {
        method: "POST",
        body: JSON.stringify({
            idUsuario: info.response,
            animal: animalInput,
            estatura: portePref,
            raca: raca,
            idade: idade
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
}


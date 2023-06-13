async function renderRecomendados(){
    const recomendados = await fetch('http://localhost:3100/recomendados/648381539e4221c506211df8')
    const response = await recomendados.json()
    let titulo = document.querySelector('.title')
    let subTitulo = document.querySelector('.secondText')
    let descricao = document.querySelector('.bottomText')
    let textDesc = "";
    let textTitulo = "";
    let textSubTitulo = "";

    for(let cadaRes of response){
        let recomendados = {
            peso: cadaRes.peso,
            raca: cadaRes.raca,
            idade: cadaRes.idade,
            animal: cadaRes.animal,
            estatura: cadaRes.estatura
        };

        const caracAnimal = await fetch('http://localhost:3000/raca/' + recomendados.animal)
        const resAnimal = await caracAnimal.json()
        const caracRaca = await fetch('http://localhost:3000/raca/' + recomendados.raca)
        const resRaca = await caracRaca.json()
        const caracEstatura = await fetch('http://localhost:3000/estatura/' + recomendados.estatura)
        const resEstatura = await caracEstatura.json()

        let carac = {
            
        }


        textDesc += `${JSON.stringify(resAnimal)} macho com ${recomendados.idade} anos de idade
        , animal de ${JSON.stringify(resEstatura)} porte`

        textTitulo += `${resRaca}`

        textSubTitulo += `${resAnimal}`
    }
    titulo.innerHTML = textTitulo
    subTitulo.innerHTML = textSubTitulo
    descricao.innerHTML = textDesc
}

renderRecomendados()
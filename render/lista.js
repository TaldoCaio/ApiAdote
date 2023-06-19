async function renderRecomendados() {
  const pets = await fetch('http://localhost:3100/pets/pet');
  const response = await pets.json();

  let container = document.querySelector('.content');
  container.innerHTML = '';

  for (let cadaRes of response) {
    let card = document.createElement('div');
    card.classList.add('card','mediaCard');

    let topCard = document.createElement('div');
    topCard.classList.add('topCard');

    let titulo = document.createElement('h2');
    titulo.classList.add('title');
    let subTitulo = document.createElement('p');
    subTitulo.classList.add('secondText');

    let bottomCard = document.createElement('div');
    bottomCard.classList.add('bottomCard');
    let descricao = document.createElement('p');
    descricao.classList.add('bottomText');

    // Criar elemento de imagem
    let imagem = document.createElement('img');
    if (cadaRes.animal === 2) {
      imagem.setAttribute('src', '../styles/images/dogbala.jpg');
    } else if (cadaRes.animal === 1) {
      imagem.setAttribute('src', '../styles/images/g1.jpg');
    }

    const caracAnimal = await fetch('http://localhost:3100/caracteristicas/animal/' + cadaRes.animal);
    const resAnimal = await caracAnimal.json();
    const caracRaca = await fetch('http://localhost:3100/caracteristicas/racaByRaca/' + cadaRes.raca);
    const resRaca = await caracRaca.json();
    const caracEstatura = await fetch('http://localhost:3100/caracteristicas/estatura/' + cadaRes.estatura);
    const resEstatura = await caracEstatura.json();
      
    let raca = resRaca.raca
    console.log(raca)

    titulo.innerHTML = raca; // Utilize resRaca[0].raca para obter o nome da raça corretamente
    subTitulo.innerHTML = resAnimal[0].animal; // Utilize resAnimal[0].nome para obter o nome do animal corretamente
    descricao.innerHTML = `${resAnimal[0].animal} macho com ${cadaRes.idade} anos de idade, animal de ${resEstatura[0].nome} porte`; // Utilize resEstatura[0].nome para obter o nome da estatura corretamente

    topCard.appendChild(titulo);
    topCard.appendChild(subTitulo);

    bottomCard.appendChild(imagem); // Adicionar a imagem ao bottomCard
    bottomCard.appendChild(descricao);

    card.appendChild(topCard);
    card.appendChild(bottomCard);

    container.appendChild(card);
  }
}

renderRecomendados();

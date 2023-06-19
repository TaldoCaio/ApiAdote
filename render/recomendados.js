async function renderRecomendados() {
  const infoString = localStorage.getItem('user')

  if (!infoString) {
    console.log('não existe no localstorage'),
      alert('Necessário fazer login para utilizar essa funcionalidade')
  }

  const info = JSON.parse(infoString);

  const recomendados = await fetch(`http://localhost:3100/match/teste/${info.response}`);
  const response = await recomendados.json();

  let container = document.querySelector('.content');
  container.innerHTML = '';

  for (let cadaRes of response) {
    let card = document.createElement('div');
    card.classList.add('card');

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

    const caracAnimal = await fetch('http://localhost:3100/caracteristicas/animal/' + cadaRes.animal);
    const resAnimal = await caracAnimal.json();
    const caracRaca = await fetch(`http://localhost:3100/caracteristicas/racaByRaca/${cadaRes.raca}`);
    const resRaca = await caracRaca.json();
    const caracEstatura = await fetch('http://localhost:3100/caracteristicas/estatura/' + cadaRes.estatura);
    const resEstatura = await caracEstatura.json();

    let raca = resRaca.raca
    console.log(raca)

    titulo.innerHTML = raca; // Utilize resRaca[0].raca para obter o nome da raça corretamente
    subTitulo.innerHTML = resAnimal[0].animal; // Utilize resAnimal[0].nome para obter o nome do animal corretamente
    descricao.innerHTML = `${resAnimal[0].animal} macho com ${cadaRes.idade} anos de idade, animal de ${resEstatura[0].titu_estatura} porte`; // Utilize resEstatura[0].nome para obter o nome da estatura corretamente

    topCard.appendChild(titulo);
    topCard.appendChild(subTitulo);

    bottomCard.appendChild(descricao);

    card.appendChild(topCard);
    card.appendChild(bottomCard);

    container.appendChild(card);
  }
}

renderRecomendados();

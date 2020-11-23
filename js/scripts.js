var pokemonRepository = (function() {
let repository = [
  {name:'Bulbasaur',
  height: 0.7,
  weight:6.9,
  types: ['grass', ' poison']},

  {name:'Pikachu',
  height: 0.4,
  weight: 6,
  types: ['electric']},

  {name: 'Jigglypuff',
  height: 0.5,
  weight: 5.5,
  types: ['fairy', ' normal']},

  {name: 'Horsea',
  height: 0.4,
  weight: 8,
  types: ['water']},

  {name: 'Charizard',
  height: 1.7,
  weight: 90.5,
  types: ['fire', ' flying']},

  {name: 'Butterfree',
  height: 1.1,
  weight: 32,
  types: ['bug', ' flying']}
];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function add(pokemon) {
   repository.push(pokemon);
 }

 function getAll() {
   return repository;
 }

function addListItem(pokemon) {
  let pokemonList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('button-class');
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
  button.addEventListener('click', function(event) {
  showDetails(pokemon);
  })
}

function showDetails(pokemon) {
  console.log(pokemon);
}

function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
}

 return {
   add: add,
   getAll: getAll,
   loadList: loadList,
   loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

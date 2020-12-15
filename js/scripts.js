var pokemonRepository = (function() {
let repository = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
function add(pokemon) {
  if(
    typeof pokemon === "object" &&
    "name" in pokemon
  ){
   repository.push(pokemon);
 } else {
   console.log("pokemon is not correct");
 }
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
  button.classList.add('btn', 'btn-primary');

  button.setAttribute('data-target', '#pokemonModal')
  button.setAttribute('data-toggle', 'modal');

  listItem.appendChild(button);
  pokemonList.appendChild(listItem);
  listItem.classList.add('group-list-item');
  button.addEventListener('click', function(event) {
  showDetails(pokemon);
  })
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
  });
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.weight = details.weight;
    item.types = details.types.map(function(pokemon) {
    return pokemon.type.name;
    });
  }).catch(function (e) {
    console.error(e);
  });
}

function showDetails(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function () {
    showModal(pokemon);
  })}

function showModal(item) {
let modalBody = $('.modal-body');
let modalTitle = $('.modal-title');
modalTitle.empty();
modalBody.empty();

let nameElement = $('<h1>' + item.name + '</h1>');
let imageElement = $('<img class="modal-image">');
imageElement.attr('src', item.imageUrl);
let heightElement = $('<p>' + 'Height: ' + item.height + '</p>');
let weightElement = $('<p>' + 'Weight: ' + item.weight + '</p>');
let typesElement = $('<p>' + 'Types: ' + item.types.join(", ") + '</p>');

modalTitle.append(nameElement);
modalBody.append(imageElement);
modalBody.append(heightElement);
modalBody.append(weightElement);
modalBody.append(typesElement);
}

 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem,
   loadList: loadList,
   loadDetails: loadDetails,
   showDetails: showDetails,
   showModal: showModal,
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  })
});

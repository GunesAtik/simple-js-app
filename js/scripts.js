var pokemonRepository = (function() {
let pokemonList = [
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

function add(pokemon) {
   pokemonList.push(pokemon);
 }

 function getAll() {
   return pokemonList;
 }

 return {
   add: add,
   getAll: getAll
 };
})();

pokemonRepository.add({name: 'Oddish', height: 0.5, weight: 5.4, types: ['grass'
, 'poison']});

pokemonRepository.getAll().forEach(function(pokemon) {
if (pokemon.height > 1.0){

document.write('<p>' + pokemon.name + '<br>' + 'weight: ' + pokemon.weight + '<br>' + 'height: '
+ pokemon.height + ' - Wow, thats big!' + '<br>' + 'Types: ' + pokemon.types + '</p>');

} else {
document.write('<p>' + pokemon.name + '<br>' + 'weight: ' + pokemon.weight + '<br>' + 'height: '
 + pokemon.height + '<br>' + 'Types: ' + pokemon.types + '</p>')};
});

var pokemonRepository = (function() {
let pokemonList = [
  {name:'Bulbasaur',
  height: 0.7,
  weight:6.9,
  types: ['grass', 'poison']},

  {name:'Pikachu',
  height: 0.4,
  weight: 6,
  types: ['electric']},

  {name: 'Jigglypuff',
  height: 0.5,
  weight: 5.5,
  types: ['fairy', 'normal']},

  {name: 'Horsea',
  height: 0.4,
  weight: 8,
  types: ['water']},

  {name: 'Charizard',
  height: 1.7,
  weight: 90.5,
  types: ['fire', 'flying']},

  {name: 'Butterfree',
  height: 1.1,
  weight: 32,
  types: ['bug', 'flying']}
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

console.log(pokemonRepository.getAll());
pokemonRepository.add({name: 'Oddish'});
console.log(pokemonRepository.getAll());

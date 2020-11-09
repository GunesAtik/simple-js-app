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

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 1.0){
document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, thats big! </p>");
} else {
  document.write("<p>" + pokemonList[i].name + " (height: " + pokemonList[i].height + ")</p>");
}
}

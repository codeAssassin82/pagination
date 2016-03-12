'use strict';



$(function(){
 $('#send').click(sendRequest);
});


function sendRequest() {
  $.get(`http://pokeapi.co/api/v2/pokemon/${$('#whosThatPokemon').val()}`)
  .then(function(data){
    console.log(data);
    $("#root").append( $("<h1>").text(data.name.Title.Actors);
  });
}
// var alpha = $.ajax()
//   .done(function() {
//     console.log('success');
//   })
//   .fail(function(){
//     console.log('error');
//   });

//  $.ajax({
//    method: 'GET',
//    url: "http://pokeapi.co/api/v2/pokedex/",
//    success: function (data) {
// console.log($pokemon);
//        var $pokemon = data.pokemon_entries;
//
// function findPokemon() {
//   var name = $('#pokemonSearch')
//     .val.toLowerCase().trim();
//     var filtered = pokedex.filter(function(pokeObj)
//       return pokeObj.pokemon_species.name === name;
// });
// var pokemon = filtered[0];
//
// if(pokemon) {
//   $.get(pokemon.pokemon_species.url, function(data) {
//     console.log('pokemon data:', data);
//     $('#pokemon').append($card);
//   });
//
//   } else {
//     console.log('pokemon not found');
//   }
// },
//    error: function(err) {
//      console.error('error!');
//    }
//  });
//  }
// function makeListElements(item){
// // return $lis
// }

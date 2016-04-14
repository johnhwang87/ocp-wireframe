
$(function() {
    var $pokemons = $('#table tr:last');
    $.ajax({
        type: 'GET',
        url: 'http://pokeapi.co/api/v2/pokemon/',
        success: function(pokemons) {
            console.log(pokemons)
            $.each(pokemons.results, function(i, pokemon){
                console.log(pokemon)
                $pokemons.after('<tr class="table-content"><td></td><td>' +pokemon.name +'</td><td>' +pokemon.url +'</td><td>heart, sports</td><tr>');
            })
        }
    })
});





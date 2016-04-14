
// $(function() {
//     var $pokemons = $('#table tr:last');
//     $.ajax({
//         type: 'GET',
//         url: 'http://pokeapi.co/api/v2/pokemon/',
//         success: function(pokemons) {
//             console.log(pokemons)
//             $.each(pokemons.results, function(i, pokemon){
//                 console.log(pokemon)
//                 $pokemons.after('<tr class="table-content"><td></td><td>' +pokemon.name +'</td><td>' +pokemon.url +'</td><td>heart, sports</td><tr>');
//             })
//         }
//     })
// });


// search for clients
$(function() {
    var $clients = $('#table tr:last');
    $.ajax({
        type: 'GET',
        url: 'http://registry-api-staging.optimispt.com/clients/search?q=Umang',
        success: function(clients) {
            console.log(clients)
            $.each(clients, function(i, client){
                console.log(client)
                $clients.after('<tr class="table-content"><td></td><td>' +client.first_name +'</td><td>' + client.last_name +'</td><td>heart, sports</td><tr>');
            })
        }
    })
});

$(function(){
    console.log('ready');

    $('#submit').click(function(){
        var search_term = {
            q: 'umang'
        };
        console.dir(search_term)
    });
});



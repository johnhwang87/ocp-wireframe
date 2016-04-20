



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
// $(function() {

//     var current_query = $('#searchBox').val();



//     var $clients = $('#table tr:last');
//     $.ajax({
//         type: 'GET',
//         url: 'http://registry-api-staging.optimispt.com/clients/search?q='+current_query,
//         success: function(clients) {
//             console.log(clients)
//             for(x in clients){
//               console.log(clients[x]['first-name'])
//               $clients.after('<tr class="table-content"><td></td><td> ' + clients[x]['first-name'] +'</td><td>' + clients[x]['last-name'] +'</td><td>heart, sports</td><tr>')
//             }
//             // $.each(clients, function(i, client){
//             //     console.log(client.first-name)
//             //     console.log(i)
//                 // $clients.after('<tr class="table-content"><td></td><td> ' + client.first_name +'</td><td>' + "dsfds" +'</td><td>heart, sports</td><tr>');
//             }

//     })
// });

// mock data



(function () {
  $(init);

  function init(){
    // clicking submit will initiate searchClient function
    $("#searchClient").click(searchClient);
    // assigning clientName to the id of the input id
    var clientName = $("#clientName");
    // assigning table to table id
    var table = $("#results");
    // finding child of table
    var tbody = table.find("tbody");
    function searchClient(){

      // value of the searchbox
      var client = clientName.val();
      alert("searchClient: " + client);

        $.ajax({
          url: 'http://registry-api-staging.optimispt.com/clients/search?q='+ client,
          type: 'GET',
          // notify when the call is finished with a success callback function
          success: renderClients
        });
        // function for rendering clients info
        function renderClients (clients){
          console.log(clients);
          // blows away content you have in the tbody
          tbody.empty();

          for(var c in clients) {
            var client = clients[c];
            console.log(clients[c]['first-name'])
            var first_name = clients[c]['first-name'];
            // var last_name = client.['last-name'];

            // creating a table row
            var tr = $("<tr>");
            // creating table data
            var first_nameTd = $("<td>").append(clients[c]['first-name']);
            var last_nameTd = $("<td>").append(clients[c]['last-name']);
            // appending table data to table row
            tr.append(first_nameTd);
            tr.append(last_nameTd);
            // appending to tbody
            tbody.append(tr);
            // var last_nameTd = $("<td>").append(last_name);

          }
        }
    }
  }
})();

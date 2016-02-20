 var a = {};
            $.getJSON('js/data.json', function (data) {
                a =  data;
                var items = [];
                $.each( data, function( key, val ) {
                  for(i=0; i< val.length; i++) {
                    items.push('<tr><td>' + val[i].Pvm + '</td><td>' + val[i].Aihe + '</td><td>' + val[i].Tunnit + '</td></tr>');
                    }; 
                });
                $('#table1').append(items);
          });
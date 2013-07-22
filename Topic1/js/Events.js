

        $(document).ready(function() {
            alert('Hello World!');
            $('#alias').focus();
            $('#boton1').click(function() {                          
              $.ajax({
                url: 'http://bootcamp.aws.af.cm/welcome/Marcelo',
                success: function(response) {    
                  var resHighlight =  response.response.replace("Marcelo", "<span style="+"'color:green'"+">"+"Marcelo"+"</span>");                                
                  $('#res').append(resHighlight);                              
                  document.getElementById('alias2').value = '123';
                  //document.getElementById('alias2').css = '123';
                } ,
                //falta manejar errores
                error: function() {
                  $('#res').css('background-color', 'red');
                }
              });           
            });

            $('#boton2').click(function() {
              $.ajax({
                url: 'http://search.twitter.com/search.json',
                data: 'q=html5',
                dataType: 'jsonp',
                success: function(response) {                    
                  //console.log(response);
                  var aux_markup = '';
                  for (var i = response.results.length - 1; i >= 0; i--) {   
                      aux_markup +=  '<span class="tweets">‏‏&rlm;</span>';
                      aux_markup += '<p>User: '+response.results[i].from_user+'</p>';                                      
                      aux_markup += '<p>Text: '+response.results[i].text+'</p>';
                      aux_markup += '<p>Created_At: '+response.results[i].created_at+'</p>';
                      aux_markup += '<p>Profile_image_url: '+response.results[i].profile_image_url+'</p></div>';                                            
                      
                  }; 
                  $('#res2').append(aux_markup);  
                  $('#over_lay').css('height', $(document).height()).show();              
                } ,
                
                error: function() {
                  alert('An error was generated');
                  $('#res2').css('background-color', 'red');
                }
              });           
            });


        });      

$(onReady);

function onReady() {
  console.log('hello');

  $('#login').on('click', function() {
    $.ajax({
      type: 'GET',
      url: 'auth/spotify/login',
      success: function(res) {
        console.log('back from the server with', res);
      }
    }); //end ajax
  });
}

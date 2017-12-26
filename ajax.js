document.addEventListener("DOMContentLoaded", function() {

  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count',
    method: 'GET',
    data: {},
    dataType: 'text'
  })

});

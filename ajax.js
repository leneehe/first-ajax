document.addEventListener("DOMContentLoaded", function() {

  var requestbtn = document.querySelector('#step12 button');

  requestbtn.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: {},
      dataType: 'text'
    })
  })


});

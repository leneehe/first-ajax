document.addEventListener("DOMContentLoaded", function() {

  var requestbtn = document.querySelector('#step12 button'),
      pingPongbtn = document.querySelector('#step3456 button');

  requestbtn.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    })
  })

  pingPongbtn.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text',
    }).done(function (responseData) {
      console.log(responseData);
      var section = document.querySelector('#step3456'),
          spanText = document.createElement('span');
      spanText.innerText = responseData;
      section.appendChild(spanText);
    })
  })


});

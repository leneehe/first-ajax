document.addEventListener("DOMContentLoaded", function() {

  var requestbtn = document.querySelector('#step12 button'),
      section = document.querySelector('#step3456'),
      pingPongbtn = section.querySelector('button');

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
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text',
    }).done(function (responseData) {
      console.log(responseData);
      var spanText = document.createElement('span');
      spanText.innerText = responseData;
      section.appendChild(spanText);
    }).fail(function (response) {
      console.log(response.responseText);
      var spanText = document.createElement('span');
      spanText.appendChild(document.createTextNode(response.responseText));
      section.appendChild(spanText);
    })
  })


});

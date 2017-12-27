document.addEventListener("DOMContentLoaded", function() {

  var requestbtn = document.querySelector('#step12 button'),
      section = document.querySelector('#step3456'),
      pingPongbtn = section.querySelector('button'),
      countbtn = document.querySelector('#step7 button');

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
    }).always(function () {
      console.log('Hey the request is complete!');
    })
  })

  countbtn.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text',
    }).done(function (responseData) {
      console.log(responseData);
      var spanCount = document.createElement('span');
      spanCount.innerText = responseData;
      section = document.querySelector('#step7');
      section.appendChild(document.createElement('br'));
      section.appendChild(spanCount);
    })
  })

});

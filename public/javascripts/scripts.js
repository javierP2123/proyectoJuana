window.onload = function(e) {
  document.getElementById('form1').addEventListener('submit', function(e) {
    event.preventDefault();

    var form = document.getElementById('form1');
    var aaa = document.getElementById('a').value;
    var bbb = document.getElementById('b').value;
    var ccc = document.getElementById('c').value;
    if(document.getElementsByName('d')[0].checked){
      var ddd = document.getElementsByName('d')[0].value;
    }else{
      var ddd = document.getElementsByName('d')[1].value;
    }
    var data = {
      a: aaa,
      b: bbb,
      c: ccc,
      d: ddd
    };
    // var data = new FormData(form);
    console.log('datos del formulario: ' + JSON.stringify(data));

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        renderResults(JSON.parse(this.response));
      }
    };
    xmlhttp.open("POST", "/calcular", true);
    xmlhttp.setRequestHeader("content-type", "application/json");

    xmlhttp.send(JSON.stringify(data));
  });
}

function renderResults(response) {
  console.log('respuesta:' + JSON.stringify(response));
  var resultado = document.getElementsByClassName('resultado')[0];
  resultado.innerHTML = '<h4>Usted tiene un ' + response.resultado+' riesgo de padecer esta enfermedad</h4>';
  //pintar el resultado obtenido en la pagina
}
// Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demodots");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}

// Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demodots");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  };
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}

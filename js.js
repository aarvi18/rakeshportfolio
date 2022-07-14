// document.getElementById('button-1').addEventListener('click',
//     function () {
//         document.querySelector('.show').style.display = 'flex';
//     });

// document.getElementById('button').addEventListener("click", function () {
//     document.querySelector('.bg-modal').style.display = "flex";
// });

// // document.querySelector('.close').addEventListener("click", function() {
// // 	document.querySelector('.bg-modal').style.display = "none";
// // });

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > padding-top: 0rem;";
  document.body.appendChild(css);
};


function workingProject() {
  var txt;
  if (confirm("Oops :( ")) {
    txt = "Please wait i am working on this project";
  } else {
    txt = "Please Wait :)";
  }
  document.getElementById("demo").innerHTML = txt;
}

function popup() {
  alert('Oops :( I am working on this');
}
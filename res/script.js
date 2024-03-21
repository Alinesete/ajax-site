let btnPgUp = document.getElementById("pg-up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    btnPgUp.style.display = "block";
  } else {
    btnPgUp.style.display = "none";
  }
}

function pgUp() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}
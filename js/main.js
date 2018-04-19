 function openEnve(){
  let chain = document.getElementById('enve');
  chain.innerHTML = "&#xf2b6;";

  setTimeout(function() {
    chain.innerHTML = "&#xf0e0;";
  },1000);
}

openEnve();

setInterval(openEnve, 2000);



function goArr(){
  let chain = document.getElementById('arr');
  chain.innerHTML = "&#xf101;";

  setTimeout(function() {
    chain.innerHTML = "&#xf105;";
  },1000);
}

goArr();

setInterval(goArr, 2000);
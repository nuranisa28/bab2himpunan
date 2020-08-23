function ftampil(){
  /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    console.log(dropdown.length);
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
  }
}

function dafis(){
  let dafis = document.getElementById("dafis");
  let main = document.getElementById("main");

  if (dafis.className.indexOf("dafis-hilang") == -1){
    dafis.className += "dafis-hilang";
    main.className = main.className.replace("main","main-penuh");
  } else{
    dafis.className = dafis.className.replace("dafis-hilang","");
    main.className = main.className.replace("main-penuh","main");
  }
}

//top button
// When the user scrolls down 20px from the top of the document,we will show the button
window.onscroll = function(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("js-top").style.display = "block";
  } else{
    document.getElementById("js-top").style.display = "none";
  }
};

function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 30);
    } else clearTimeout(scrollAnimation);
}

function tjk2(tjk2) {
  var x = document.getElementById(tjk2);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}

/*buka soal*/
function bukaSoal(evt, nmrSoal) {
  var i, soal, nomorsoal;
  //isi soal
  soal = document.getElementsByClassName("soal");
  for (i = 0; i < soal.length; i++) {
    soal[i].style.display = "none";
  }
  //nomor soal
  nomorsoal = document.getElementsByClassName("nomorsoal");
  for (i = 0; i < nomorsoal.length; i++) {
    nomorsoal[i].className = nomorsoal[i].className.replace(" nmrAktif", "");
  }
  document.getElementById(nmrSoal).style.display = "block";
  evt.currentTarget.className += " nmrAktif";
}

/*soal 1*/
function him1(){
  var bhim = document.getElementById("bhim1");
  var bahasbnr = document.getElementById("bahasbnr1");

  bhim.className += " hilang";
  document.getElementById('icon1').innerHTML = "<img src='../img/true.png' width='15px'>";
  bahasbnr.className = bahasbnr.className.replace("hilang","");
}
function bhim1(){
  var him = document.getElementById("him1");
  var bahasslh = document.getElementById("bahasslh1");
  var ulang = document.getElementById('ulang1');

  him.className += " hilang";
  document.getElementById('icon1').innerHTML = "<img src='../img/false.png' width='15px'>";
  bahasslh.className = bahasslh.className.replace('hilang',"");
  ulang.className = ulang.className.replace("hilang","");
}
function ulang1(){
  var him = document.getElementById("him1");
  var ulang = document.getElementById("ulang1");
  var bahasslh = document.getElementById("bahasslh1");

  him.className = him.className.replace("hilang", "");
  document.getElementById("icon1").innerHTML = "";
  ulang.className += " hilang";
  bahasslh.className += " hilang";
}

/*soal 2*/
function him2(){
  var bhim = document.getElementById("bhim2");
  var bahasslh = document.getElementById("bahasslh2");
  var ulang = document.getElementById('ulang2');

  bhim.className += " hilang";
  document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
  bahasslh.className = bahasslh.className.replace('hilang',"");
  ulang.className = ulang.className.replace("hilang","");
}
function bhim2(){
  var him = document.getElementById("him2");
  var bahasbnr = document.getElementById("bahasbnr2");

  him.className += " hilang";
  document.getElementById('icon2').innerHTML = "<img src='../img/true.png' width='15px'>";
  bahasbnr.className = bahasbnr.className.replace("hilang","");
}
function ulang2(){
  var bhim = document.getElementById("bhim2");
  var ulang = document.getElementById("ulang2");
  var bahasslh = document.getElementById("bahasslh2");

  bhim.className = bhim.className.replace("hilang", "");
  document.getElementById("icon2").innerHTML = "";
  ulang.className += " hilang";
  bahasslh.className += " hilang";
}

/*soal 3*/
function him3(){
  var bhim = document.getElementById("bhim3");
  var bahasslh = document.getElementById("bahasslh3");
  var ulang = document.getElementById('ulang3');

  bhim.className += " hilang";
  document.getElementById('icon3').innerHTML = "<img src='../img/false.png' width='15px'>";
  bahasslh.className = bahasslh.className.replace('hilang',"");
  ulang.className = ulang.className.replace("hilang","");
}
function bhim3(){
  var him = document.getElementById("him3");
  var bahasbnr = document.getElementById("bahasbnr3");

  him.className += " hilang";
  document.getElementById('icon3').innerHTML = "<img src='../img/true.png' width='15px'>";
  bahasbnr.className = bahasbnr.className.replace("hilang","");
}
function ulang3(){
  var bhim = document.getElementById("bhim3");
  var ulang = document.getElementById("ulang3");
  var bahasslh = document.getElementById("bahasslh3");

  bhim.className = bhim.className.replace("hilang", "");
  document.getElementById("icon3").innerHTML = "";
  ulang.className += " hilang";
  bahasslh.className += " hilang";
}

/*soal 4*/
function him4(){
  var bhim = document.getElementById("bhim4");
  var bahasbnr = document.getElementById("bahasbnr4");

  bhim.className += " hilang";
  document.getElementById('icon4').innerHTML = "<img src='../img/true.png' width='15px'>";
  bahasbnr.className = bahasbnr.className.replace("hilang","");
}
function bhim4(){
  var him = document.getElementById("him4");
  var bahasslh = document.getElementById("bahasslh4");
  var ulang = document.getElementById('ulang4');

  him.className += " hilang";
  document.getElementById('icon4').innerHTML = "<img src='../img/false.png' width='15px'>";
  bahasslh.className = bahasslh.className.replace('hilang',"");
  ulang.className = ulang.className.replace("hilang","");
}
function ulang4(){
  var him = document.getElementById("him4");
  var ulang = document.getElementById("ulang4");
  var bahasslh = document.getElementById("bahasslh4");

  him.className = him.className.replace("hilang", "");
  document.getElementById("icon4").innerHTML = "";
  ulang.className += " hilang";
  bahasslh.className += " hilang";
}

/*soal 5*/
function him5(){
  var bhim = document.getElementById("bhim5");
  var bahasbnr = document.getElementById("bahasbnr5");

  bhim.className += " hilang";
  document.getElementById('icon5').innerHTML = "<img src='../img/true.png' width='15px'>";
  bahasbnr.className = bahasbnr.className.replace("hilang","");
}
function bhim5(){
  var him = document.getElementById("him5");
  var bahasslh = document.getElementById("bahasslh5");
  var ulang = document.getElementById('ulang5');

  him.className += " hilang";
  document.getElementById('icon5').innerHTML = "<img src='../img/false.png' width='15px'>";
  bahasslh.className = bahasslh.className.replace('hilang',"");
  ulang.className = ulang.className.replace("hilang","");
}
function ulang5(){
  var him = document.getElementById("him5");
  var ulang = document.getElementById("ulang5");
  var bahasslh = document.getElementById("bahasslh5");

  him.className = him.className.replace("hilang", "");
  document.getElementById("icon5").innerHTML = "";
  ulang.className += " hilang";
  bahasslh.className += " hilang";
}
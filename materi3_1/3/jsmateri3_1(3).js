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

function tjk1(tjk1) {
  var x = document.getElementById(tjk1);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}

function tjk2(tjk2) {
  var x = document.getElementById(tjk2);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}

function cek1(){
  var s = document.getElementById("s1");
  var sa = document.getElementById("sa1");
  var tabel2 = document.getElementById("tabel2");
  var ulang = document.getElementById("ulang1");
  var tabel1 = document.getElementById("tabel1");

  var x = sa.value;

  //memecah input sa1 dan na1 menjadi array dengan tanda koma
  var angsa = x.split(",");

  //array anggota himpunan
  var himpS = [1,2,3,4,5];

  //cek array himpunan S
  var a = 0;
  for (var i = 0; i < 5; i++){
    for (var j = 0; j < 5; j++){
      if(himpS[i]==angsa[j]){
        a=a+1;
      }
    }
  }

  //cek
  if(s.value=="S" && a==5){
      document.getElementById("icon1").innerHTML = "<img src='../img/true.png' width='15px'>";
      tabel2.className = tabel2.className.replace("hilang","");
      tabel1.scrollIntoView();
  } else {
    document.getElementById("icon1").innerHTML = "<img src='../img/false.png' width='15px'>";
    ulang.className = ulang.className.replace("hilang","");
  }

  //jika salah box merah
  if(s.value!="S"){
    s.className += " boxmerah";
  }
  if(a!=5){
    sa.className += " boxmerah";
  }
}
function ulang1(){
  var s = document.getElementById("s1");
  var sa = document.getElementById("sa1");
  var ulang = document.getElementById("ulang1");

  s.value = "";
  sa.value = "";
  document.getElementById("icon1").innerHTML = "";
  ulang.className += " hilang";

  //menghilangan kotak merah
  if(s.className.indexOf("benar") == -1){
    s.className = s.className.replace("boxmerah","");
  }
  if(sa.className.indexOf("benar") == -1){
    sa.className = sa.className.replace("boxmerah","");
  }
}

function cek2(){
  var n = document.getElementById("n1");
  var na = document.getElementById("na1");
  var soalgambar = document.getElementById("soalgambar");
  var ulang = document.getElementById("ulang2");
  var tabel2 = document.getElementById("tabel2");

  var y = na.value;

  //memecah input sa1 dan na1 menjadi array dengan tanda koma
  var angna = y.split(",");

  //array anggota himpunan
  var himpN = [2,3,5];

  //cek array himpunan N
  var b = 0;
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if(himpN[i]==angna[j]){
        b=b+1;
      }
    }
  }

  if (n.value=="N" && b==3){
    document.getElementById("icon2").innerHTML = "<img src='../img/true.png' width='15px'>";
    soalgambar.className = soalgambar.className.replace("hilang","");
    document.getElementById('scratch').src = document.getElementById('scratch').src;
    tabel2.scrollIntoView();
  } else {
    ulang.className = ulang.className.replace("hilang","");
    document.getElementById("icon2").innerHTML = "<img src='../img/false.png' width='15px'>";
  }

  //jika salah box merah
  if(n.value!="N"){
    n.className += " boxmerah";
  }
  if(b!=3){
    na.className += " boxmerah";
  }
}
function ulang2(){
  var n = document.getElementById("n1");
  var na = document.getElementById("na1");
  var ulang = document.getElementById("ulang2");

  n.value = "";
  na.value = "";
  document.getElementById("icon2").innerHTML = "";
  ulang.className += " hilang";

  //menghilangan kotak merah
  if(n.className.indexOf("benar") == -1){
    n.className = n.className.replace("boxmerah","");
  }
  if(na.className.indexOf("benar") == -1){
    na.className = na.className.replace("boxmerah","");
  }
}
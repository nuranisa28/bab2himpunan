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

function cek1(){
  var s = document.getElementById("s1");
  var sa = document.getElementById("sa1");
  var ulang = document.getElementById("ulang1");
  var lanjut = document.getElementById('lanjut1');

  var x = sa.value;
  var angsa = x.split(",");
  var himpS = [1,2,3,4,5,6,7,8];

  var a = 0;
  for (var i = 0; i < 8; i++){
    for (var j = 0; j < 8; j++){
      if(himpS[i]==angsa[j]){
        a=a+1;
      }
    }
  }

  //cek
  if(s.value=="S" && a==8){
    lanjut.className = lanjut.className.replace('hilang','');
      document.getElementById("icon1").innerHTML = "<img src='../img/true.png' width='15px'>";
  } else {
    ulang.className = ulang.className.replace('hilang','');
    document.getElementById("icon1").innerHTML = "<img src='../img/false.png' width='15px'>";
  }

  if(s.value!="S"){
    s.className += " boxmerah";
  }
  if(a!=8){
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
  var g = document.getElementById("g1");
  var ga = document.getElementById("ga1");
  var ulang = document.getElementById("ulang2");
  var lanjut = document.getElementById('lanjut2');

  var y = ga.value;
  var angga = y.split(",");
  var himpG = [2,3,7,6,8];

  //cek array himpunan G
  var b = 0;
  for (var i = 0; i < 5; i++){
    for (var j = 0; j < 5; j++){
      if(himpG[i]==angga[j]){
        b=b+1;
      }
    }
  }

  if (g.value=="A" && b==5){
    lanjut.className = lanjut.className.replace('hilang','');
    document.getElementById("icon2").innerHTML = "<img src='../img/true.png' width='15px'>";
  } else {
    ulang.className = ulang.className.replace('hilang','');
    document.getElementById("icon2").innerHTML = "<img src='../img/false.png' width='15px'>";
  }

  if(g.value!="A"){
    g.className += " boxmerah";
  }
  if(b!=5){
    ga.className += " boxmerah";
  }
}

function ulang2(){
  var g = document.getElementById("g1");
  var ga = document.getElementById("ga1");
  var ulang = document.getElementById("ulang2");
  var lanjut = document.getElementById('lanjut2');

  g.value = "";
  ga.value = "";
  document.getElementById("icon2").innerHTML = "";
  ulang.className += " hilang";

  if(g.className.indexOf("benar") == -1){
    g.className = g.className.replace("boxmerah","");
  }
  if(ga.className.indexOf("benar") == -1){
    ga.className = ga.className.replace("boxmerah","");
  }
}

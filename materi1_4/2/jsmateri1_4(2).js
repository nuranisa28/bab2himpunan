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

/*pertanyaan*/
function bukaTanya(evt, nmrTanya) {
  var i, pertanya, nomortanya;
  pertanya = document.getElementsByClassName("pertanya");
  for (i = 0; i < pertanya.length; i++) {
    pertanya[i].style.display = "none";
  }
  nomortanya = document.getElementsByClassName("nomortanya");
  for (i = 0; i < nomortanya.length; i++) {
    nomortanya[i].className = nomortanya[i].className.replace(" tmblAktif", "");
  }
  document.getElementById(nmrTanya).style.display = "block";
  evt.currentTarget.className += " tmblAktif";
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
//cek jawaban
function cek21(){
  var n = document.getElementById("n1");
  var a = document.getElementById("a1");
  var ulang = document.getElementById("ulang21");

  var x = n.value;
  var y = a.value;

  //menghapus spasi
  x = x.replace(/\s+/g, '');
  y = y.replace(/\s+/g, '');

  //cek
  if(x=="n(B)" && y==3){
    document.getElementById("icon1").innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById("ket1").innerHTML = "Jawaban Kamu Benar";
    document.getElementById("ket1").style.color = "green";
  } else{
    document.getElementById("icon1").innerHTML = "<img src='../img/false.png' width='15px'>";
    ulang.className = ulang.className.replace('hilang','');
    document.getElementById("ket1").innerHTML = "Jawaban Kamu Salah";
    document.getElementById("ket1").style.color = "red";
  }

  //box merah
  if(x!="n(B)"){
    n.className += " boxmerah";
  }
  if(y!=3){
    a.className += " boxmerah";
  }
}
//ulang
function ulang21(){
  var n = document.getElementById("n1");
  var a = document.getElementById("a1");
  var ulang = document.getElementById("ulang21");

  n.value = "";
  n.className = n.className.replace("boxmerah","");
  a.value = "";
  a.className = a.className.replace("boxmerah","");
  document.getElementById("icon1").innerHTML = "";
  ulang.className += " hilang";
  document.getElementById("ket1").innerHTML = "";
}

/*soal 2*/
//cek jawaban
function cek22(){
  var n = document.getElementById("n2");
  var a = document.getElementById("a2");
  var ulang = document.getElementById("ulang22");

  var x = n.value;
  var y = a.value;

  //menghapus spasi
  x = x.replace(/\s+/g, '');
  y = y.replace(/\s+/g, '');

  //cek
  if(x=="n(I)" && y==7){
    document.getElementById("icon2").innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById("ket2").innerHTML = "Jawaban Kamu Benar";
    document.getElementById("ket2").style.color = "green";
  } else{
    document.getElementById("icon2").innerHTML = "<img src='../img/false.png' width='15px'>";
    ulang.className = ulang.className.replace('hilang','');
    document.getElementById("ket2").innerHTML = "Jawaban Kamu Salah";
    document.getElementById("ket2").style.color = "red";
  }

  //box merah
  if(x!="n(I)"){
    n.className += " boxmerah";
  }
  if(y!=7){
    a.className += " boxmerah";
  }
}
//ulang
function ulang22(){
  var n = document.getElementById("n2");
  var a = document.getElementById("a2");
  var ulang = document.getElementById("ulang22");

  n.value = "";
  n.className = n.className.replace("boxmerah","");
  a.value = "";
  a.className = a.className.replace("boxmerah","");
  document.getElementById("icon2").innerHTML = "";
  ulang.className += " hilang";
  document.getElementById("ket2").innerHTML = "";
}

/*soal 3*/
//cek jawaban
function cek23(){
  var n = document.getElementById("n3");
  var a = document.getElementById("a3");
  var ulang = document.getElementById("ulang23");

  var x = n.value;
  var y = a.value;

  //menghapus spasi
  x = x.replace(/\s+/g, '');
  y = y.replace(/\s+/g, '');

  //cek
  if(x=="n(G)" && y==5){
    document.getElementById("icon3").innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById("ket3").innerHTML = "Jawaban Kamu Benar";
    document.getElementById("ket3").style.color = "green";
  } else{
    document.getElementById("icon3").innerHTML = "<img src='../img/false.png' width='15px'>";
    ulang.className = ulang.className.replace('hilang','');
    document.getElementById("ket3").innerHTML = "Jawaban Kamu Salah";
    document.getElementById("ket3").style.color = "red";
  }

  //box merah
  if(x!="n(G)"){
    n.className += " boxmerah";
  }
  if(y!=5){
    a.className += " boxmerah";
  }
}
//ulang
function ulang23(){
  var n = document.getElementById("n3");
  var a = document.getElementById("a3");
  var ulang = document.getElementById("ulang23");

  n.value = "";
  n.className = n.className.replace("boxmerah","");
  a.value = "";
  a.className = a.className.replace("boxmerah","");
  document.getElementById("icon3").innerHTML = "";
  ulang.className += " hilang";
  document.getElementById("ket3").innerHTML = "";
}

/*soal 4*/
//cek jawaban
function cek24(){
  var n = document.getElementById("n4");
  var a = document.getElementById("a4");
  var ulang = document.getElementById("ulang24");

  var x = n.value;
  var y = a.value;

  //menghapus spasi
  x = x.replace(/\s+/g, '');
  y = y.replace(/\s+/g, '');

  //cek
  if(x=="n(A)" && y==16){
    document.getElementById("icon4").innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById("ket4").innerHTML = "Jawaban Kamu Benar";
    document.getElementById("ket4").style.color = "green";
  } else{
    document.getElementById("icon4").innerHTML = "<img src='../img/false.png' width='15px'>";
    ulang.className = ulang.className.replace('hilang','');
    document.getElementById("ket4").innerHTML = "Jawaban Kamu Salah";
    document.getElementById("ket4").style.color = "red";
  }

  //box merah
  if(x!="n(A)"){
    n.className += " boxmerah";
  }
  if(y!=16){
    a.className += " boxmerah";
  }
}
//ulang
function ulang24(){
  var n = document.getElementById("n4");
  var a = document.getElementById("a4");
  var ulang = document.getElementById("ulang24");

  n.value = "";
  n.className = n.className.replace("boxmerah","");
  a.value = "";
  a.className = a.className.replace("boxmerah","");
  document.getElementById("icon4").innerHTML = "";
  ulang.className += " hilang";
  document.getElementById("ket4").innerHTML = "";
}

/*soal 5*/
//cek jawaban
function cek25(){
  var n = document.getElementById("n5");
  var a = document.getElementById("a5");
  var ulang = document.getElementById("ulang25");

  var x = n.value;
  var y = a.value;

  //menghapus spasi
  x = x.replace(/\s+/g, '');
  y = y.replace(/\s+/g, '');

  //cek
  if(x=="n(D)" && y==12){
    document.getElementById("icon5").innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById("ket5").innerHTML = "Jawaban Kamu Benar";
    document.getElementById("ket5").style.color = "green";
  } else{
    document.getElementById("icon5").innerHTML = "<img src='../img/false.png' width='15px'>";
    ulang.className = ulang.className.replace('hilang','');
    document.getElementById("ket5").innerHTML = "Jawaban Kamu Salah";
    document.getElementById("ket5").style.color = "red";
  }

  //box merah
  if(x!="n(D)"){
    n.className += " boxmerah";
  }
  if(y!=12){
    a.className += " boxmerah";
  }
}
//ulang
function ulang25(){
  var n = document.getElementById("n5");
  var a = document.getElementById("a5");
  var ulang = document.getElementById("ulang25");

  n.value = "";
  n.className = n.className.replace("boxmerah","");
  a.value = "";
  a.className = a.className.replace("boxmerah","");
  document.getElementById("icon5").innerHTML = "";
  ulang.className += " hilang";
  document.getElementById("ket5").innerHTML = "";
}
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
function ya1(){
  var tidak = document.getElementById("tidak1");
  var bahasslh = document.getElementById("bahasslh1");
  var ulang = document.getElementById("ulang1");
  tidak.className += " hilang";
  ulang.className += " tampil";
  bahasslh.className += " tampil";
  
}
function tidak1(){
  var ya = document.getElementById("ya1");
  var bahasbnr = document.getElementById("bahasbnr1");
  ya.className += " hilang";
  bahasbnr.className += " tampil";
}
function ulang1(){
  var tidak = document.getElementById("tidak1");
  var bahasslh = document.getElementById("bahasslh1");
  var ulang = document.getElementById("ulang1");
  tidak.className = tidak.className.replace("hilang","");
  ulang.className = ulang.className.replace("tampil","");
  bahasslh.className = bahasslh.className.replace("tampil","");
}

/*soal 2*/
function ya2(){
  var tidak = document.getElementById("tidak2");
  var bahasbnr = document.getElementById("bahasbnr2");
  tidak.className += " hilang";
  bahasbnr.className += " tampil";
}
function tidak2(){
  var ya = document.getElementById("ya2");
  var bahasslh = document.getElementById("bahasslh2");
  var ulang = document.getElementById("ulang2");
  ulang.className += " tampil";
  ya.className += " hilang";
  bahasslh.className += " tampil";
}
function ulang2(){
  var ya = document.getElementById("ya2");
  var bahasslh = document.getElementById("bahasslh2");
  var ulang = document.getElementById("ulang2");
  ya.className = ya.className.replace("hilang","");
  ulang.className = ulang.className.replace("tampil","");
  bahasslh.className = bahasslh.className.replace("tampil","");
}

/*soal 3*/
function ya3(){
  var tidak = document.getElementById("tidak3");
  var bahasbnr = document.getElementById("bahasbnr3");
  tidak.className += " hilang";
  bahasbnr.className += " tampil";
}
function tidak3(){
  var ya = document.getElementById("ya3");
  var bahasslh = document.getElementById("bahasslh3");
  var ulang = document.getElementById("ulang3");
  ulang.className += " tampil";
  ya.className += " hilang";
  bahasslh.className += " tampil";
}
function ulang3(){
  var ya = document.getElementById("ya3");
  var bahasslh = document.getElementById("bahasslh3");
  var ulang = document.getElementById("ulang3");
  ya.className = ya.className.replace("hilang","");
  ulang.className = ulang.className.replace("tampil","");
  bahasslh.className = bahasslh.className.replace("tampil","");
}

/*soal 4*/
function ya4(){
  var tidak = document.getElementById("tidak4");
  var bahasslh = document.getElementById("bahasslh4");
  var ulang = document.getElementById("ulang4");
  tidak.className += " hilang";
  ulang.className += " tampil";
  bahasslh.className += " tampil";
}
function tidak4(){
  var ya = document.getElementById("ya4");
  var bahasbnr = document.getElementById("bahasbnr4");
  ya.className += " hilang";
  bahasbnr.className += " tampil";
}
function ulang4(){
  var tidak = document.getElementById("tidak4");
  var bahasslh = document.getElementById("bahasslh4");
  var ulang = document.getElementById("ulang4");
  tidak.className = tidak.className.replace("hilang","");
  ulang.className = ulang.className.replace("tampil","");
  bahasslh.className = bahasslh.className.replace("tampil","");
}

/*soal 5*/
function ya5(){
  var tidak = document.getElementById("tidak5");
  var bahasbnr = document.getElementById("bahasbnr5");
  tidak.className += " hilang";
  bahasbnr.className += " tampil";
}
function tidak5(){
  var ya = document.getElementById("ya5");
  var bahasslh = document.getElementById("bahasslh5");
  var ulang = document.getElementById("ulang5");
  ulang.className += " tampil";
  ya.className += " hilang";
  bahasslh.className += " tampil";
}
function ulang5(){
  var ya = document.getElementById("ya5");
  var bahasslh = document.getElementById("bahasslh5");
  var ulang = document.getElementById("ulang5");
  ya.className = ya.className.replace("hilang","");
  ulang.className = ulang.className.replace("tampil","");
  bahasslh.className = bahasslh.className.replace("tampil","");
}

/*buka soal*/
function bukaSoal2(evt, nmrSoal) {
  var i, soal, nomorsoal;
  //isi soal
  soal = document.getElementsByClassName("soall");
  for (i = 0; i < soal.length; i++) {
    soal[i].style.display = "none";
  }
  //nomor soal
  nomorsoal = document.getElementsByClassName("nomorsoal2");
  for (i = 0; i < nomorsoal.length; i++) {
    nomorsoal[i].className = nomorsoal[i].className.replace(" nmrAktif", "");
  }
  document.getElementById(nmrSoal).style.display = "block";
  evt.currentTarget.className += " nmrAktif";
}

/*soal 1*/
function cek1(){
  var x = document.getElementsByName("pilihan1");
  var bahasbnr = document.getElementById("bahasbnrr1");
  var bahasslh = document.getElementById("bahasslhh1");
  var ulang = document.getElementById("ulangg1");
  var checked = false;
  var benar = 0;
  var salah = 0;

  for (var i=0; i < x.length; i++){
    if(x[i].checked){
      checked = true;
      if(x[i].value == "1"){
        benar = benar+1;
      } else{
        salah = salah+1;
      }
    }
  }

  if(benar==2 && salah==0){
    bahasbnr.className += " tampil";
  } 
  if (benar!=2 || salah>0){
    bahasslh.className += " tampil";
    document.getElementById('salah1').innerHTML = "Kamu menjawab benar sebanyak " + benar + ". <span class='slh'>Ada " + salah + " jawabanmu yang masih keliru</span>. Silahkan tekan tombol ulang dan periksa kembali jawabanmu.";
    ulang.className += " tampil";
  }
  if(checked==false){
    alert('Ups! Kamu belum menjawab soal. Jawab terlebih dahulu ya~');
  }
}
function ulangg1(){
  var x = document.getElementsByName("pilihan1");
  var bahasslh = document.getElementById("bahasslhh1");
  var ulang = document.getElementById("ulangg1");

  for(var i=0; i<x.length ;i++){
    x[i].checked = false;
  }
  ulang.className = ulang.className.replace("tampil","");
  bahasslh.className = bahasslh.className.replace("tampil","");
  document.getElementById('salah1').innerHTML = "";
}

/*soal 2*/
function cek2(){
  var x = document.getElementsByName("pilihan2");
  var bahasbnr = document.getElementById("bahasbnrr2");
  var bahasslh = document.getElementById("bahasslhh2");
  var ulang = document.getElementById("ulangg2");
  var checked = false;
  var benar = 0;
  var salah = 0;

  for (var i=0; i < x.length; i++){
    if(x[i].checked){
      checked = true;
      if(x[i].value == "1"){
        benar = benar+1;
      } else{
        salah = salah+1;
      }
    }
  }

  if(benar==2 && salah==0){
    bahasbnr.className += " tampil";
  } 
  if (benar!=2 || salah>0){
    bahasslh.className += " tampil";
    document.getElementById('salah2').innerHTML = "Kamu menjawab benar sebanyak " + benar + ". <span class='slh'>Ada " + salah + " jawabanmu yang masih keliru</span>. Silahkan tekan tombol ulang dan periksa kembali jawabanmu.";
    ulang.className += " tampil";
  }
  if(checked==false){
    alert('Ups! Kamu belum menjawab soal. Jawab terlebih dahulu ya~');
  }
}
function ulangg2(){
  var x = document.getElementsByName("pilihan2");
  var bahasslh = document.getElementById("bahasslhh2");
  var ulang = document.getElementById("ulangg2");

  for(var i=0; i<x.length ;i++){
    x[i].checked = false;
  }
  ulang.className = ulang.className.replace("tampil","");
  bahasslh.className = bahasslh.className.replace("tampil","");
  document.getElementById('salah2').innerHTML = "";
}
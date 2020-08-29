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

function tjk1(tjk1) {
  var x = document.getElementById(tjk1);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}

function cek11(){
  var s = document.getElementById("s1");
  var sa = document.getElementById("sa1");
  var ulang = document.getElementById("ulang11");
  var lanjut = document.getElementById('lanjut1');

  var x = sa.value;
  var angsa = x.split(",");
  var himpS = [-3,-2,-1,0,1,2,3];

  //cek array himpunan S
  var a = 0;
  for (var i = 0; i < 7; i++){
    for (var j = 0; j < 7; j++){
      if(himpS[i]==angsa[j]){
        a=a+1;
      }
    }
  }

  //cek
  if(s.value=="S" && a==7){
    lanjut.className = lanjut.className.replace('hilang','');
      document.getElementById("icon1").innerHTML = "<img src='../img/true.png' width='15px'>";
  } else {
    ulang.className = ulang.className.replace('hilang','');
    document.getElementById("icon1").innerHTML = "<img src='../img/false.png' width='15px'>";
  }

  if(s.value!="S"){
    s.className += " boxmerah";
  }
  if(a!=7){
    sa.className += " boxmerah";
  }
}

function ulang11(){
  var s = document.getElementById("s1");
  var sa = document.getElementById("sa1");
  var ulang = document.getElementById("ulang11");

  s.value = "";
  sa.value = "";
  document.getElementById("icon1").innerHTML = "";
  ulang.className += " hilang";
  if(s.className.indexOf("benar") == -1){
      s.className = s.className.replace("boxmerah","");
    }
  if(sa.className.indexOf("benar") == -1){
    sa.className = sa.className.replace("boxmerah","");
  }
}

function cek12(){
  var n = document.getElementById("n1");
  var na = document.getElementById("na1");
  var ulang = document.getElementById("ulang12");
  var lanjut = document.getElementById('lanjut2');

  var y = na.value;
  var angna = y.split(",");
  var himpN = [2,3];

  var b = 0;
  for (var i = 0; i < 2; i++){
    for (var j = 0; j < 2; j++){
      if(himpN[i]==angna[j]){
        b=b+1;
      }
    }
  }

  if (n.value=="N" && b==2){
    lanjut.className = lanjut.className.replace('hilang','');
    document.getElementById("icon2").innerHTML = "<img src='../img/true.png' width='15px'>";
  } else {
    ulang.className = ulang.className.replace('hilang','');
    document.getElementById("icon2").innerHTML = "<img src='../img/false.png' width='15px'>";
  }

  if(n.value!="N"){
    n.className += " boxmerah";
  }
  if(b!=2){
    na.className += " boxmerah";
  }
}

function ulang12(){
  var n = document.getElementById("n1");
  var na = document.getElementById("na1");
  var ulang = document.getElementById("ulang12");

  n.value = "";
  na.value = "";
  document.getElementById("icon2").innerHTML = "";
  ulang.className += " hilang";
  if(n.className.indexOf("benar") == -1){
    n.className = n.className.replace("boxmerah","");
  }
  if(na.className.indexOf("benar") == -1){
    na.className = na.className.replace("boxmerah","");
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

function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

function cek1(){
  var a = 0;
    var b = 0;
    var lang1 = document.getElementById("lang1");
    var lang2 = document.getElementById("lang2");
    var lang3 = document.getElementById("lang3");
    var lang4 = document.getElementById("lang4");
    var ulang = document.getElementById("ulang1");
    var lanjut = document.getElementById('lanjut3');

    var langkah4 = document.getElementById("langkah4").innerText;
    var langkah1 = document.getElementById("langkah1").innerText;
    var langkah3 = document.getElementById("langkah3").innerText;
    var langkah2 = document.getElementById("langkah2").innerText;

    //cek langkah 1
    if(lang1.innerText==langkah1){
      document.getElementById("icon21").innerHTML = "<img src='../img/true.png' width='15px' height='15px'>";
      a += 1;
    } else{
      document.getElementById("icon21").innerHTML = "<img src='../img/false.png' width='15px' height='15px'>";
      b += 1;
    }

    //cek langkah 2
    if(lang2.innerText==langkah2){
      document.getElementById("icon22").innerHTML = "<img src='../img/true.png' width='15px' height='15px'>";
      a += 1;
    } else{
      document.getElementById("icon22").innerHTML = "<img src='../img/false.png' width='15px' height='15px'>";
      b += 1;
    }

    //cek langkah 3
    if(lang3.innerText==langkah3){
      document.getElementById("icon23").innerHTML = "<img src='../img/true.png' width='15px' height='15px'>";
      a += 1;
    } else{
      document.getElementById("icon23").innerHTML = "<img src='../img/false.png' width='15px' height='15px'>";
      b += 1;
    }

    //cek langkah 3
    if(lang4.innerText==langkah4){
      document.getElementById("icon24").innerHTML = "<img src='../img/true.png' width='15px' height='15px'>";
      a += 1;
    } else{
      document.getElementById("icon24").innerHTML = "<img src='../img/false.png' width='15px' height='15px'>";
      b += 1;
    }

    if(a==4 && b==0){
      document.getElementById("info2").innerHTML = "Jawaban kamu benar";
      document.getElementById("info2").style.color = "green";
      lanjut.className = lanjut.className.replace('hilang','');
      document.getElementById('scratch').src = document.getElementById('scratch').src
    } else{
      document.getElementById("info2").innerHTML = "Jawaban kamu salah";
      document.getElementById("info2").style.color = "red";
      ulang.className = ulang.className.replace("hilang","");
    }
}

function ulang1(){
  var lang1 = document.getElementById("lang1");
    var lang2 = document.getElementById("lang2");
    var lang3 = document.getElementById("lang3");
    var lang4 = document.getElementById("lang4");
    var ulang = document.getElementById("ulang1");

    //isi
    var langkah4 = "<span class='pilihan' id='langkah4' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan yang menjadi fokus pembicaran di luar lingkaran.</span>";
    var langkah1 = "<span class='pilihan' id='langkah1' draggable='true' ondragstart='drag(event)'>Buatlah persegipanjang dan lambang S pada sudut kiri atas persegipanjang.</span>";
    var langkah3 = "<span class='pilihan' id='langkah3' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan yang menjadi fokus pembicaraan dengan noktah/titik di dalam lingkaran.</span>";
    var langkah2 = "<span class='pilihan' id='langkah2' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan yang menjadi fokus pembicaraan dengan lingkaran/kurva tertutup.</span>";

    //menghilangkan teks
    lang1.innerText = "";
    lang2.innerText = "";
    lang3.innerText = "";
    lang4.innerText = "";
    for(var i=1; i<=4; i++){
      document.getElementById("icon2"+i).innerHTML = "";
    }
    ulang.className += " hilang";
    document.getElementById("info2").innerHTML = "";

    //mengembalikan teks
    document.getElementById("ket1").innerHTML = langkah4;
    document.getElementById("ket2").innerHTML = langkah1;
    document.getElementById("ket3").innerHTML = langkah3;
    document.getElementById("ket4").innerHTML = langkah2;
}

function tjk3(tjk3) {
  var x = document.getElementById(tjk3);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}

function tjk4(tjk4) {
  var x = document.getElementById(tjk4);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}

function cek31(){
  var s = document.getElementById("s11");
  var sa = document.getElementById("sa11");
  var ulang = document.getElementById("ulang31");
  var lanjut = document.getElementById('lanjut4');

  var x = sa.value;
  var angsa = x.split(",");
  var himpS = [1,2,3,4,5,6,7,8,9];

  var a = 0;
  for (var i = 0; i < 9; i++){
    for (var j = 0; j < 9; j++){
      if(himpS[i]==angsa[j]){
        a=a+1;
      }
    }
  }

  if(s.value=="S" && a==9){
    lanjut.className = lanjut.className.replace('hilang','');
      document.getElementById("ikon1").innerHTML = "<img src='../img/true.png' width='15px'>";
  } else {
    ulang.className = ulang.className.replace('hilang','');
    document.getElementById("ikon1").innerHTML = "<img src='../img/false.png' width='15px'>";
  }

  if(s.value!="S"){
    s.className += " boxmerah";
  }
  if(a!=9){
    sa.className += " boxmerah";
  }
}

function ulang31(){
  var s = document.getElementById("s11");
  var sa = document.getElementById("sa11");
  var ulang = document.getElementById("ulang31");

  s.value = "";
  sa.value = "";
  document.getElementById("ikon1").innerHTML = "";
  ulang.className += " hilang";
  if(s.className.indexOf("benar") == -1){
    s.className = s.className.replace("boxmerah","");
  }
  if(sa.className.indexOf("benar") == -1){
    sa.className = sa.className.replace("boxmerah","");
  }
}

function cek32(){
  var m = document.getElementById("m1");
  var ma = document.getElementById("ma1");
  var ulang = document.getElementById("ulang32");
  var lanjut = document.getElementById('lanjut5');

  var y = ma.value;
  var angma = y.split(",");
  var himpM = [1,2,3,4,5];

  var b = 0;
  for (var i = 0; i < 5; i++){
    for (var j = 0; j < 5; j++){
      if(himpM[i]==angma[j]){
        b=b+1;
      }
    }
  }

  if (m.value=="M" && b==5){
    lanjut.className = lanjut.className.replace('hilang','');
    document.getElementById("ikon2").innerHTML = "<img src='../img/true.png' width='15px'>";
  } else {
    ulang.className = ulang.className.replace('hilang','');
    document.getElementById("ikon2").innerHTML = "<img src='../img/false.png' width='15px'>";
  }

  if(m.value!="M"){
    m.className += " boxmerah";
  }
  if(b!=5){
    ma.className += " boxmerah";
  }
}

function ulang32(){
  var m = document.getElementById("m1");
  var ma = document.getElementById("ma1");
  var ulang = document.getElementById("ulang32");

  m.value = "";
  ma.value = "";
  document.getElementById("ikon2").innerHTML = "";
  ulang.className += " hilang";
  if(m.className.indexOf("benar") == -1){
    m.className = m.className.replace("boxmerah","");
  }
  if(ma.className.indexOf("benar") == -1){
    ma.className = ma.className.replace("boxmerah","");
  }
}
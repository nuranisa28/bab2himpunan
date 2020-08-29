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

//pertanyaan 1
//cek
  function cek1(){
    var benar = 0;
    var salah = 0;
    var p2 = document.getElementById("p2").innerText;
    var p3 = document.getElementById("p3").innerText;
    var p7 = document.getElementById("p7").innerText;
    var p8 = document.getElementById("p8").innerText;
    var p9 = document.getElementById("p9").innerText;
    var p10 = document.getElementById("p10").innerText;
    var ulang = document.getElementById("ulang1");
    var bahasbnr = document.getElementById("bahasbnr1");
    var bahasslh = document.getElementById("bahasslh1");

    //cek berhingga
    for(var i=1; i<=3; i++){
      var berhingga = document.getElementById("b"+i);
      if(berhingga.innerText==p3 || berhingga.innerText==p7 || berhingga.innerText==p10){
        document.getElementById("iconb"+i).innerHTML = "<img src='../img/true.png' width='15px'>";
        benar += 1;
      } else{
        document.getElementById("iconb"+i).innerHTML = "<img src='../img/false.png' width='15px'>";
        berhingga.className += " boxmerah";
        salah += 1;
      }
    }

    //cek tak berhingga
    for(var i=1; i<=3; i++){
      var takhingga = document.getElementById("tb"+i);
      if(takhingga.innerText==p2 || takhingga.innerText==p8 || takhingga.innerText==p9){
        document.getElementById("icontb"+i).innerHTML = "<img src='../img/true.png' width='15px'>";
        benar += 1;
      } else{
        document.getElementById("icontb"+i).innerHTML = "<img src='../img/false.png' width='15px'>";
        takhingga.className += " boxmerah";
        salah += 1;
      }
    }

    //bahas
    if(benar==6){
      bahasbnr.className += " tampil";
    } else if(salah>0){
      ulang.className += " tampil";
      bahasslh.className += " tampil";
    }
  }
//ulang
  function ulang1(){
    var ulang = document.getElementById("ulang1");
    var bahasslh = document.getElementById("bahasslh1");

    //mengosongkan
    for(var i=1; i<=3; i++){
      var berhingga = document.getElementById("b"+i);
      var takhingga = document.getElementById("tb"+i);
      berhingga.innerText = "";
      berhingga.className = berhingga.className.replace("boxmerah", "");
      document.getElementById("iconb"+i).innerHTML = "";
      takhingga.innerText = "";
      takhingga.className = takhingga.className.replace("boxmerah", "");
      document.getElementById("icontb"+i).innerHTML = "";
    }
    ulang.className = ulang.className.replace("tampil", "");
    bahasslh.className = bahasslh.className.replace("tampil", "");

    //mengembalikan teks
    document.getElementById("pil2").innerHTML = "<span class='pilihan' id='p2' draggable='true' ondragstart='drag(event)'>B = {5, 10, 15, ...}</span>";
    document.getElementById("pil3").innerHTML = "<span class='pilihan' id='p3' draggable='true' ondragstart='drag(event)'>C = {1, 2, 4, 7, 10}</span>";
    document.getElementById("pil7").innerHTML = "<span class='pilihan' id='p7' draggable='true' ondragstart='drag(event)'>G = {1, 2, 4, ..., 256}</span>";
    document.getElementById("pil8").innerHTML = "<span class='pilihan' id='p8' draggable='true' ondragstart='drag(event)'>F = {0, 1, 2, 3, ...}</span>";
    document.getElementById("pil9").innerHTML = "<span class='pilihan' id='p9' draggable='true' ondragstart='drag(event)'>A = {7, 14, 21, 28, ...}</span>";
    document.getElementById("pil10").innerHTML = "<span class='pilihan' id='p10' draggable='true' ondragstart='drag(event)'>D = {1, 4, 9, 16, 25}</span>";
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
  if(x=="n(J)" && y==5){
    document.getElementById("icon1").innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById("ket1").innerHTML = "Jawaban kamu benar";
    document.getElementById("ket1").style.color = "green";
  } else{
    document.getElementById("icon1").innerHTML = "<img src='../img/false.png' width='15px'>";
    ulang.className += " tampil";
    document.getElementById("ket1").innerHTML = "Jawaban kamu salah";
    document.getElementById("ket1").style.color = "red";
  }

  //box merah
  if(x!="n(J)"){
    n.className += " boxmerah";
  }
  if(y!=5){
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
  ulang.className = ulang.className.replace("tampil","");
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
  if(x=="n(D)" && y==6){
    document.getElementById("icon2").innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById("ket2").innerHTML = "Jawaban kamu benar";
    document.getElementById("ket2").style.color = "green";
  } else{
    document.getElementById("icon2").innerHTML = "<img src='../img/false.png' width='15px'>";
    ulang.className += " tampil";
    document.getElementById("ket2").innerHTML = "Jawaban kamu salah";
    document.getElementById("ket2").style.color = "red";
  }

  //box merah
  if(x!="n(D)"){
    n.className += " boxmerah";
  }
  if(y!=6){
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
  ulang.className = ulang.className.replace("tampil","");
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
  if(x=="n(K)" && y==6){
    document.getElementById("icon3").innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById("ket3").innerHTML = "Jawaban kamu benar";
    document.getElementById("ket3").style.color = "green";
  } else{
    document.getElementById("icon3").innerHTML = "<img src='../img/false.png' width='15px'>";
    ulang.className += " tampil";
    document.getElementById("ket3").innerHTML = "Jawaban kamu salah";
    document.getElementById("ket3").style.color = "red";
  }

  //box merah
  if(x!="n(K)"){
    n.className += " boxmerah";
  }
  if(y!=6){
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
  ulang.className = ulang.className.replace("tampil","");
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
  if(x=="n(C)" && y==7){
    document.getElementById("icon4").innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById("ket4").innerHTML = "Jawaban kamu benar";
    document.getElementById("ket4").style.color = "green";
  } else{
    document.getElementById("icon4").innerHTML = "<img src='../img/false.png' width='15px'>";
    ulang.className += " tampil";
    document.getElementById("ket4").innerHTML = "Jawaban kamu salah";
    document.getElementById("ket4").style.color = "red";
  }

  //box merah
  if(x!="n(C)"){
    n.className += " boxmerah";
  }
  if(y!=7){
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
  ulang.className = ulang.className.replace("tampil","");
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
  if(x=="n(H)" && y==8){
    document.getElementById("icon5").innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById("ket5").innerHTML = "Jawaban kamu benar";
    document.getElementById("ket5").style.color = "green";
  } else{
    document.getElementById("icon5").innerHTML = "<img src='../img/false.png' width='15px'>";
    ulang.className += " tampil";
    document.getElementById("ket5").innerHTML = "Jawaban kamu salah";
    document.getElementById("ket5").style.color = "red";
  }

  //box merah
  if(x!="n(H)"){
    n.className += " boxmerah";
  }
  if(y!=8){
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
  ulang.className = ulang.className.replace("tampil","");
  document.getElementById("ket5").innerHTML = "";
}
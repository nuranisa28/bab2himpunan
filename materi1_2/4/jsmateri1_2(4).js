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

function tjk2(tjk2) {
  var x = document.getElementById(tjk2);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}

/*drag and drop*/
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

/*soal 1*/
function cek1(){
  var jwb = document.getElementById("no1").innerText;
  var p1 = document.getElementById("p11").innerText;
  var ulang = document.getElementById("ulang1");
  var bahasbnr = document.getElementById("bahasbnr1");
  var bahasslh = document.getElementById("bahasslh1");
  //cek
  if(jwb == p1){
    document.getElementById("icon1").innerHTML = "<img src='../img/true.png' style='width:15px'>";
    bahasbnr.className += " tampil";
  } else if(jwb==""){
    alert("Jawabanmu masih kosong! Isi jawabanmu terlebih dahulu ya~");
  }else{
    ulang.className += " tampil";
    document.getElementById("icon1").innerHTML = "<img src='../img/false.png' style='width:15px'>";
    bahasslh.className += " tampil";
  }
}
function ulang1(){
  var pil1 = "<td draggable='true' ondragstart='drag(event)' id='p11' class='pilihan'>∈</td>";
  var pil2 = "<td draggable='true' ondragstart='drag(event)' id='p12' class='pilihan'>∉</td>";
  var ulang = document.getElementById("ulang1");
  var bahasslh = document.getElementById("bahasslh1");
  //menghapus semua
  document.getElementById("no1").innerHTML="";
  document.getElementById("pil1").innerHTML = pil1 + pil2;
  document.getElementById("icon1").innerHTML = "";
  ulang.className = ulang.className.replace("tampil", "");
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/*soal 2*/
function cek2(){
  var jwb = document.getElementById("no2").innerText;
  var p2 = document.getElementById("p22").innerText;
  var ulang = document.getElementById("ulang2");
  var bahasbnr = document.getElementById("bahasbnr2");
  var bahasslh = document.getElementById("bahasslh2");
  //cek
  if(jwb == p2){
    document.getElementById("icon2").innerHTML = "<img src='../img/true.png' style='width:15px'>";
    bahasbnr.className += " tampil";
  } else if(jwb==""){
    alert("Jawabanmu masih kosong! Isi jawabanmu terlebih dahulu ya~");
  }else{
    ulang.className += " tampil";
    document.getElementById("icon2").innerHTML = "<img src='../img/false.png' style='width:15px'>";
    bahasslh.className += " tampil";
  }
}
function ulang2(){
  var pil1 = "<td draggable='true' ondragstart='drag(event)' id='p21' class='pilihan'>∈</td>";
  var pil2 = "<td draggable='true' ondragstart='drag(event)' id='p22' class='pilihan'>∉</td>";
  var ulang = document.getElementById("ulang2");
  var bahasslh = document.getElementById("bahasslh2");
  //menghapus semua
  document.getElementById("no2").innerHTML="";
  document.getElementById("pil2").innerHTML = pil1 + pil2;
  document.getElementById("icon2").innerHTML = "";
  ulang.className = ulang.className.replace("tampil", "");
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/*soal 3*/
function cek3(){
  var jwb = document.getElementById("no3").innerText;
  var p1 = document.getElementById("p31").innerText;
  var ulang = document.getElementById("ulang3");
  var bahasbnr = document.getElementById("bahasbnr3");
  var bahasslh = document.getElementById("bahasslh3");
  //cek
  if(jwb == p1){
    document.getElementById("icon3").innerHTML = "<img src='../img/true.png' style='width:15px'>";
    bahasbnr.className += " tampil";
  } else if(jwb==""){
    alert("Jawabanmu masih kosong! Isi jawabanmu terlebih dahulu ya~");
  }else{
    ulang.className += " tampil";
    document.getElementById("icon3").innerHTML = "<img src='../img/false.png' style='width:15px'>";
    bahasslh.className += " tampil";
  }
}
function ulang3(){
  var pil1 = "<td class='pilihan' id='p31' draggable='true' ondragstart='drag(event)'>Museum Wasaka</td>";
  var pil2 = "<td class='pilihan' id='p32' draggable='true' ondragstart='drag(event)'>Museum Lambung Mangkurat</td>";
  var ulang = document.getElementById("ulang3");
  var bahasslh = document.getElementById("bahasslh3");
  //menghapus semua
  document.getElementById("no3").innerHTML="";
  document.getElementById("pil3").innerHTML = pil1 + pil2;
  document.getElementById("icon3").innerHTML = "";
  ulang.className = ulang.className.replace("tampil", "");
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/*soal 4*/
function cek4(){
  var jwb = document.getElementById("no4").innerText;
  var p1 = document.getElementById("p41").innerText;
  var ulang = document.getElementById("ulang4");
  var bahasbnr = document.getElementById("bahasbnr4");
  var bahasslh = document.getElementById("bahasslh4");
  //cek
  if(jwb == p1){
    document.getElementById("icon4").innerHTML = "<img src='../img/true.png' style='width:15px'>";
    bahasbnr.className += " tampil";
  } else if(jwb==""){
    alert("Jawabanmu masih kosong! Isi jawabanmu terlebih dahulu ya~");
  }else{
    ulang.className += " tampil";
    document.getElementById("icon4").innerHTML = "<img src='../img/false.png' style='width:15px'>";
    bahasslh.className += " tampil";
  }
}
function ulang4(){
  var pil1 = "<td class='pilihan' id='p41' draggable='true' ondragstart='drag(event)'>anggota</td>";
  var pil2 = "<td class='pilihan' id='p42' draggable='true' ondragstart='drag(event)'>bukan anggota</td>";
  var ulang = document.getElementById("ulang4");
  var bahasslh = document.getElementById("bahasslh4");
  //menghapus semua
  document.getElementById("no4").innerHTML="";
  document.getElementById("pil4").innerHTML = pil1 + pil2;
  document.getElementById("icon4").innerHTML = "";
  ulang.className = ulang.className.replace("tampil", "");
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/*soal 5*/
function cek5(){
  var jwb = document.getElementById("no5").innerText;
  var p2 = document.getElementById("p52").innerText;
  var ulang = document.getElementById("ulang5");
  var bahasbnr = document.getElementById("bahasbnr5");
  var bahasslh = document.getElementById("bahasslh5");
  //cek
  if(jwb == p2){
    document.getElementById("icon5").innerHTML = "<img src='../img/true.png' style='width:15px'>";
    bahasbnr.className += " tampil";
  } else if(jwb==""){
    alert("Jawabanmu masih kosong! Isi jawabanmu terlebih dahulu ya~");
  }else{
    ulang.className += " tampil";
    document.getElementById("icon5").innerHTML = "<img src='../img/false.png' style='width:15px'>";
    bahasslh.className += " tampil";
  }
}
function ulang5(){
  var pil1 = "<td class='pilihan' id='p51' draggable='true' ondragstart='drag(event)'>anggota</td>";
  var pil2 = "<td class='pilihan' id='p52' draggable='true' ondragstart='drag(event)'>bukan anggota</td>";
  var ulang = document.getElementById("ulang5");
  var bahasslh = document.getElementById("bahasslh5");
  //menghapus semua
  document.getElementById("no5").innerHTML="";
  document.getElementById("pil5").innerHTML = pil1 + pil2;
  document.getElementById("icon5").innerHTML = "";
  ulang.className = ulang.className.replace("tampil", "");
  bahasslh.className = bahasslh.className.replace("tampil", "");
}
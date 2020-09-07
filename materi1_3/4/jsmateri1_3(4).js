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

/*buka Soal 1*/
function bukaSoal1(evt, nmrSoal) {
  var i, soal, nomorsoal;
  //isi soal
  soal = document.getElementsByClassName("soal1");
  for (i = 0; i < soal.length; i++) {
    soal[i].style.display = "none";
  }
  //nomor soal
  nomorsoal = document.getElementsByClassName("nomorsoal1");
  for (i = 0; i < nomorsoal.length; i++) {
    nomorsoal[i].className = nomorsoal[i].className.replace(" nmrAktif", "");
  }
  document.getElementById(nmrSoal).style.display = "block";
  evt.currentTarget.className += " nmrAktif";
}

/*metode deskripsi 1*/
//cek
function cek11(){
  var himp = document.getElementById("himp11");
  var metode = document.getElementById("metdes1");
  var ulang = document.getElementById("ulang11");
  var bahasbnr = document.getElementById("bahasbnr11");
  var bahasslh = document.getElementById("bahasslh11");
    
  var x = "bilanganaslikelipatan2kurangdari15";
  //mengubah menjadi huruf kecil dan hapus spasi
  var y = metode.value.toLowerCase();
  y = y.replace(/\s+/g, '');

  //cek
  if(himp.value=="A" && y==x){
    document.getElementById("icon11").innerHTML = "<img src='../img/true.png' width='15px'>";
    bahasbnr.className += " tampil";
  } else{
    ulang.className += " tampil";
    document.getElementById("icon11").innerHTML = "<img src='../img/false.png' width='15px'>";
    bahasslh.className += " tampil";
  }

  //boxmerah
  if(himp.value!="A"){
    himp.className += " boxmerah";
  }
  if(y!=x){
    metode.className += " boxmerah";
  }
}
//ulang
function ulang11(){
  var himp = document.getElementById("himp11");
  var metode = document.getElementById("metdes1");
  var ulang = document.getElementById("ulang11");
  var bahasslh = document.getElementById("bahasslh11");
  himp.value = "";
  metode.value = "";
  himp.className = himp.className.replace("boxmerah","");
  metode.className = metode.className.replace("boxmerah","");
  ulang.className = ulang.className.replace("tampil", "");
  document.getElementById("icon11").innerHTML = "";
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/*metode bersyarat 1*/
//memunculkan variabel
let variabel = document.getElementById('var11');
// function agar saat di enter tidak dijalankan 
  variabel.addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
      });

  variabel.addEventListener('keyup', function(){
    document.getElementById('var12').innerHTML = variabel.value;
    document.getElementById('var13').innerHTML = variabel.value;
  })
//cek
function cek12(){
  var himp = document.getElementById("himp12");
  var var1 = document.getElementById("var11");
  var ang = document.getElementById("ang1");
  var metode = document.getElementById("metber1");
  var ulang = document.getElementById("ulang12");
  var bahasbnr = document.getElementById("bahasbnr12");
  var bahasslh = document.getElementById("bahasslh12");

  //mengecek apakah variabel yang dimasukkan angka
    var numbers = /^[-+]?[0-9]+$/;
    if (var1.value.match(numbers)){
      var x = 0;
      document.getElementById("ket11").innerHTML = "Variabel di isi dengan huruf. Bukan dengan angka.";
      document.getElementById("ket11").style.color = "red";
    }

    //mengecek apakah variabel yang dimasukkan huruf kapital
    var capital = /^[A-Z]/;
    if (var1.value.match(capital)){
      var y = 0;
      document.getElementById("ket11").innerHTML = "Variabel di isi dengan huruf kecil. Bukan huruf kapital.";
      document.getElementById("ket11").style.color = "red";
    }
  
  var w = "bilanganaslikelipatan2";
  //mengubah menjadi huruf kecil dan hapus spasi
  var z = metode.value.toLowerCase();
  z = z.replace(/\s+/g, '');
  
  //cek
  if(himp.value=="A" && x!=0 && y!==0 && ang.value==15 && z==w){
    document.getElementById("icon12").innerHTML = "<img src='../img/true.png' width='15px'>";
    bahasbnr.className += " tampil";
    for(var i=1; i<=3; i++){
      document.getElementById('vari1'+i).innerHTML = var1.value;
    }
  } else{
    ulang.className += " tampil";
    document.getElementById("icon12").innerHTML = "<img src='../img/false.png' width='15px'>";
    bahasslh.className += " tampil";
  }
  
  //boxmerah
  if(himp.value!="A"){
    himp.className += " boxmerah";
  }
  if(x==0 || y==0 || var1.value==""){
    var1.className += " boxmerah";
    for(var i=2; i<=3; i++){
        document.getElementById("var1"+i).style.color = "red";
      }
  }
  if(ang.value!=15){
    ang.className += " boxmerah";
  }
  if(z!=w){
    metode.className += " boxmerah";
  }
}
//ulang
function ulang12(){
  var himp = document.getElementById("himp12");
  var var1 = document.getElementById("var11");
  var ang = document.getElementById("ang1");
  var metode = document.getElementById("metber1");
  var ulang = document.getElementById("ulang12");
  var bahasslh = document.getElementById("bahasslh12");

  himp.value = "";
  himp.className = himp.className.replace("boxmerah","");
  var1.value = "";
  var1.className = var1.className.replace("boxmerah","");
  for(var i=2; i<=3; i++){
    document.getElementById("var1"+i).innerHTML = "";
    document.getElementById("var1"+i).style.color = "black";
  }
  ang.value = "";
  ang.className = ang.className.replace("boxmerah","");
  metode.value = "";
  metode.className = metode.className.replace("boxmerah","");
  document.getElementById("ket11").innerHTML = "";
  ulang.className = ulang.className.replace("tampil","");
  document.getElementById("icon12").innerHTML = "";
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/*metode tabulasi 1*/
//cek
function cek13(){
  var himp = document.getElementById("himp13");
  var metode = document.getElementById("mettab1");
  var ulang = document.getElementById("ulang13");
  var bahasbnr = document.getElementById("bahasbnr13");
  var bahasslh = document.getElementById("bahasslh13");
    
  var x = metode.value;
  //menghapus spasi
  x = x.replace(/\s+/g, '');

  //memecah inputan mettab1 menjadi array dengan tanda koma
  var anghimp = x.split(",");

  //array anggota himpunan
  var anggota = [2,4,6,8,10,12,14];

  //cek array
  var a = 0;
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
      if (anggota[i]==anghimp[j]) {
        a=a+1;
        anggota[i]="";
      }
    }
  }

  //cek
  if(himp.value=="A" && a==7){
    document.getElementById("icon13").innerHTML = "<img src='../img/true.png' width='15px'>";
    bahasbnr.className += " tampil";
  } else{
    ulang.className += " tampil";
    document.getElementById("icon13").innerHTML = "<img src='../img/false.png' width='15px'>";
    bahasslh.className += " tampil";
  }

  //boxmerah
  if(himp.value!="A"){
    himp.className += " boxmerah";
  }
  if(a!=7){
    metode.className += " boxmerah";
  }
}
//ulang
function ulang13(){
  var himp = document.getElementById("himp13");
  var metode = document.getElementById("mettab1");
  var ulang = document.getElementById("ulang13");
  var bahasslh = document.getElementById("bahasslh13");

  himp.value = "";
  himp.className = himp.className.replace("boxmerah","");
  metode.value = "";
  metode.className = metode.className.replace("boxmerah","");
  ulang.className = ulang.className.replace("tampil", "");
  document.getElementById("icon13").innerHTML = "";
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/*buka Soal 2*/
function bukaSoal2(evt, nmrSoal) {
  var i, soal, nomorsoal;
  //isi soal
  soal = document.getElementsByClassName("soal2");
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

/*metode deskripsi 2*/
//cek
function cek21(){
  var himp = document.getElementById("himp21");
  var metode = document.getElementById("metdes2");
  var ulang = document.getElementById("ulang21");
  var bahasbnr = document.getElementById("bahasbnr21");
  var bahasslh = document.getElementById("bahasslh21");
    
  var x = "bilangancacahkurangdarisamadengan1";
  //mengubah menjadi huruf kecil dan hapus spasi
  var y = metode.value.toLowerCase();
  y = y.replace(/\s+/g, '');

  //cek
  if(himp.value=="C" && y==x){
    document.getElementById("icon21").innerHTML = "<img src='../img/true.png' width='15px'>";
    bahasbnr.className += " tampil";
  } else{
    ulang.className += " tampil";
    document.getElementById("icon21").innerHTML = "<img src='../img/false.png' width='15px'>";
    bahasslh.className += " tampil";
  }

  //boxmerah
  if(himp.value!="C"){
    himp.className += " boxmerah";
  }
  if(y!=x){
    metode.className += " boxmerah";
  }
}
//ulang
function ulang21(){
  var himp = document.getElementById("himp21");
  var metode = document.getElementById("metdes2");
  var ulang = document.getElementById("ulang21");
  var bahasslh = document.getElementById("bahasslh21");
  himp.value = "";
  metode.value = "";
  himp.className = himp.className.replace("boxmerah","");
  metode.className = metode.className.replace("boxmerah","");
  ulang.className = ulang.className.replace("tampil", "");
  document.getElementById("icon21").innerHTML = "";
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/*metode bersyarat 2*/
//memunculkan variabel
let variabel2 = document.getElementById('var21');
// function agar saat di enter tidak dijalankan 
  variabel2.addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
      });

  variabel2.addEventListener('keyup', function(){
    document.getElementById('var22').innerHTML = variabel2.value;
    document.getElementById('var23').innerHTML = variabel2.value;
  })
//cek
function cek22(){
  var himp = document.getElementById("himp22");
  var var1 = document.getElementById("var21");
  var ang = document.getElementById("ang2");
  var metode = document.getElementById("metber2");
  var ulang = document.getElementById("ulang22");
  var bahasbnr = document.getElementById("bahasbnr22");
  var bahasslh = document.getElementById("bahasslh22");

  //mengecek apakah variabel yang dimasukkan angka
    var numbers = /^[-+]?[0-9]+$/;
    if (var1.value.match(numbers)){
      var x = 0;
      document.getElementById("ket21").innerHTML = "Variabel di isi dengan huruf. Bukan dengan angka.";
      document.getElementById("ket21").style.color = "red";
    }

    //mengecek apakah variabel yang dimasukkan huruf kapital
    var capital = /^[A-Z]/;
    if (var1.value.match(capital)){
      var y = 0;
      document.getElementById("ket21").innerHTML = "Variabel di isi dengan huruf kecil. Bukan huruf kapital.";
      document.getElementById("ket21").style.color = "red";
    }
  
  var w = "bilangancacah";
  //mengubah menjadi huruf kecil dan hapus spasi
  var z = metode.value.toLowerCase();
  z = z.replace(/\s+/g, '');
  
  //cek
  if(himp.value=="C" && x!=0 && y!==0 && ang.value==1 && z==w){
    document.getElementById("icon22").innerHTML = "<img src='../img/true.png' width='15px'>";
    bahasbnr.className += " tampil";
    for(var i=1; i<=3; i++){
      document.getElementById('vari2'+i).innerHTML = var1.value;
    }
  } else{
    ulang.className += " tampil";
    document.getElementById("icon22").innerHTML = "<img src='../img/false.png' width='15px'>";
    bahasslh.className += " tampil";
  }
  
  //boxmerah
  if(himp.value!="C"){
    himp.className += " boxmerah";
  }
  if(x==0 || y==0 || var1.value==""){
    var1.className += " boxmerah";
    for(var i=2; i<=3; i++){
        document.getElementById("var2"+i).style.color = "red";
      }
  }
  if(ang.value!=1){
    ang.className += " boxmerah";
  }
  if(z!=w){
    metode.className += " boxmerah";
  }
}
//ulang
function ulang22(){
  var himp = document.getElementById("himp22");
  var var1 = document.getElementById("var21");
  var ang = document.getElementById("ang2");
  var metode = document.getElementById("metber2");
  var ulang = document.getElementById("ulang22");
  var bahasslh = document.getElementById("bahasslh22");

  himp.value = "";
  himp.className = himp.className.replace("boxmerah","");
  var1.value = "";
  var1.className = var1.className.replace("boxmerah","");
  for(var i=2; i<=3; i++){
    document.getElementById("var2"+i).innerHTML = "";
    document.getElementById("var2"+i).style.color = "black";
  }
  ang.value = "";
  ang.className = ang.className.replace("boxmerah","");
  metode.value = "";
  metode.className = metode.className.replace("boxmerah","");
  document.getElementById("ket21").innerHTML = "";
  ulang.className = ulang.className.replace("tampil","");
  document.getElementById("icon22").innerHTML = "";
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/*metode tabulasi 2*/
//cek
function cek23(){
  var himp = document.getElementById("himp23");
  var metode = document.getElementById("mettab2");
  var ulang = document.getElementById("ulang23");
  var bahasbnr = document.getElementById("bahasbnr23");
  var bahasslh = document.getElementById("bahasslh23");
    
  var x = metode.value;
  //menghapus spasi
  x = x.replace(/\s+/g, '');

  //memecah inputan mettab1 menjadi array dengan tanda koma
  var anghimp = x.split(",");

  //array anggota himpunan
  var anggota = [0,1];

  //cek array
  var a = 0;
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
      if (anggota[i]==anghimp[j]) {
        a=a+1;
        anggota[i]="";
      }
    }
  }

  //cek
  if(himp.value=="C" && a==2){
    document.getElementById("icon23").innerHTML = "<img src='../img/true.png' width='15px'>";
    bahasbnr.className += " tampil";
  } else{
    ulang.className += " tampil";
    document.getElementById("icon23").innerHTML = "<img src='../img/false.png' width='15px'>";
    bahasslh.className += " tampil";
  }

  //boxmerah
  if(himp.value!="C"){
    himp.className += " boxmerah";
  }
  if(a!=2){
    metode.className += " boxmerah";
  }
}
//ulang
function ulang23(){
  var himp = document.getElementById("himp23");
  var metode = document.getElementById("mettab2");
  var ulang = document.getElementById("ulang23");
  var bahasslh = document.getElementById("bahasslh23");

  himp.value = "";
  himp.className = himp.className.replace("boxmerah","");
  metode.value = "";
  metode.className = metode.className.replace("boxmerah","");
  ulang.className = ulang.className.replace("tampil", "");
  document.getElementById("icon23").innerHTML = "";
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/*buka Soal 3*/
function bukaSoal3(evt, nmrSoal) {
  var i, soal, nomorsoal;
  //isi soal
  soal = document.getElementsByClassName("soal3");
  for (i = 0; i < soal.length; i++) {
    soal[i].style.display = "none";
  }
  //nomor soal
  nomorsoal = document.getElementsByClassName("nomorsoal3");
  for (i = 0; i < nomorsoal.length; i++) {
    nomorsoal[i].className = nomorsoal[i].className.replace(" nmrAktif", "");
  }
  document.getElementById(nmrSoal).style.display = "block";
  evt.currentTarget.className += " nmrAktif";
}

/*metode deskripsi 3*/
//cek
function cek31(){
  var himp = document.getElementById("himp31");
  var metode = document.getElementById("metdes3");
  var ulang = document.getElementById("ulang31");
  var bahasbnr = document.getElementById("bahasbnr31");
  var bahasslh = document.getElementById("bahasslh31");
    
  var x = "bilanganganjilantara2dan16";
  //mengubah menjadi huruf kecil dan hapus spasi
  var y = metode.value.toLowerCase();
  y = y.replace(/\s+/g, '');

  //cek
  if(himp.value=="D" && y==x){
    document.getElementById("icon31").innerHTML = "<img src='../img/true.png' width='15px'>";
    bahasbnr.className += " tampil";
  } else{
    ulang.className += " tampil";
    document.getElementById("icon31").innerHTML = "<img src='../img/false.png' width='15px'>";
    bahasslh.className += " tampil";
  }

  //boxmerah
  if(himp.value!="D"){
    himp.className += " boxmerah";
  }
  if(y!=x){
    metode.className += " boxmerah";
  }
}
//ulang
function ulang31(){
  var himp = document.getElementById("himp31");
  var metode = document.getElementById("metdes3");
  var ulang = document.getElementById("ulang31");
  var bahasslh = document.getElementById("bahasslh31");
  himp.value = "";
  metode.value = "";
  himp.className = himp.className.replace("boxmerah","");
  metode.className = metode.className.replace("boxmerah","");
  ulang.className = ulang.className.replace("tampil", "");
  document.getElementById("icon31").innerHTML = "";
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/*metode bersyarat 3*/
//memunculkan variabel
let variabel3 = document.getElementById('var31');
// function agar saat di enter tidak dijalankan 
  variabel3.addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
      });

  variabel3.addEventListener('keyup', function(){
    document.getElementById('var32').innerHTML = variabel3.value;
    document.getElementById('var33').innerHTML = variabel3.value;
  })
//cek
function cek32(){
  var himp = document.getElementById("himp32");
  var var1 = document.getElementById("var31");
  var ang1 = document.getElementById("ang31");
  var ang2 = document.getElementById("ang32");
  var metode = document.getElementById("metber3");
  var ulang = document.getElementById("ulang32");
  var bahasbnr = document.getElementById("bahasbnr32");
  var bahasslh = document.getElementById("bahasslh32");

  //mengecek apakah variabel yang dimasukkan angka
    var numbers = /^[-+]?[0-9]+$/;
    if (var1.value.match(numbers)){
      var x = 0;
      document.getElementById("ket31").innerHTML = "Variabel di isi dengan huruf. Bukan dengan angka.";
      document.getElementById("ket31").style.color = "red";
    }

    //mengecek apakah variabel yang dimasukkan huruf kapital
    var capital = /^[A-Z]/;
    if (var1.value.match(capital)){
      var y = 0;
      document.getElementById("ket31").innerHTML = "Variabel di isi dengan huruf kecil. Bukan huruf kapital.";
      document.getElementById("ket31").style.color = "red";
    }
  
  var w = "bilanganganjil";
  //mengubah menjadi huruf kecil dan hapus spasi
  var z = metode.value.toLowerCase();
  z = z.replace(/\s+/g, '');
  
  //cek
  if(himp.value=="D" && x!=0 && y!==0 && ang1.value==2 && ang2.value==16 && z==w){
    document.getElementById("icon32").innerHTML = "<img src='../img/true.png' width='15px'>";
    bahasbnr.className += " tampil";
    for(var i=1; i<=3; i++){
      document.getElementById('vari3'+i).innerHTML = var1.value;
    }
  } else{
    ulang.className += " tampil";
    document.getElementById("icon32").innerHTML = "<img src='../img/false.png' width='15px'>";
    bahasslh.className += " tampil";
  }
  
  //boxmerah
  if(himp.value!="D"){
    himp.className += " boxmerah";
  }
  if(x==0 || y==0 || var1.value==""){
    var1.className += " boxmerah";
    for(var i=2; i<=3; i++){
        document.getElementById("var3"+i).style.color = "red";
      }
  }
  if(ang1.value!=2){
    ang1.className += " boxmerah";
  }
  if(ang2.value!=16){
    ang2.className += " boxmerah";
  }
  if(z!=w){
    metode.className += " boxmerah";
  }
}
//ulang
function ulang32(){
  var himp = document.getElementById("himp32");
  var var1 = document.getElementById("var31");
  var metode = document.getElementById("metber3");
  var ulang = document.getElementById("ulang32");
  var bahasslh = document.getElementById("bahasslh32");

  himp.value = "";
  himp.className = himp.className.replace("boxmerah","");
  var1.value = "";
  var1.className = var1.className.replace("boxmerah","");
  for(var i=2; i<=3; i++){
    document.getElementById("var3"+i).innerHTML = "";
    document.getElementById("var3"+i).style.color = "black";
  }
  for(var i=1; i<=2; i++){
    var angka = document.getElementById("ang3"+i);
    angka.value = "";
    angka.className = angka.className.replace("boxmerah","");
  }
  metode.value = "";
  metode.className = metode.className.replace("boxmerah","");
  document.getElementById("ket31").innerHTML = "";
  ulang.className = ulang.className.replace("tampil","");
  document.getElementById("icon32").innerHTML = "";
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/*metode tabulasi 3*/
//cek
function cek33(){
  var himp = document.getElementById("himp33");
  var metode = document.getElementById("mettab3");
  var ulang = document.getElementById("ulang33");
  var bahasbnr = document.getElementById("bahasbnr33");
  var bahasslh = document.getElementById("bahasslh33");
    
  var x = metode.value;
  //menghapus spasi
  x = x.replace(/\s+/g, '');

  //memecah inputan mettab1 menjadi array dengan tanda koma
  var anghimp = x.split(",");

  //array anggota himpunan
  var anggota = [3,5,7,9,11,13,15];

  //cek array
  var a = 0;
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 7; j++) {
      if (anggota[i]==anghimp[j]) {
        a=a+1;
        anggota[i]="";
      }
    }
  }

  //cek
  if(himp.value=="D" && a==7){
    document.getElementById("icon33").innerHTML = "<img src='../img/true.png' width='15px'>";
    bahasbnr.className += " tampil";
  } else{
    ulang.className += " tampil";
    document.getElementById("icon33").innerHTML = "<img src='../img/false.png' width='15px'>";
    bahasslh.className += " tampil";
  }

  //boxmerah
  if(himp.value!="D"){
    himp.className += " boxmerah";
  }
  if(a!=7){
    metode.className += " boxmerah";
  }
}
//ulang
function ulang33(){
  var himp = document.getElementById("himp33");
  var metode = document.getElementById("mettab3");
  var ulang = document.getElementById("ulang33");
  var bahasslh = document.getElementById("bahasslh33");

  himp.value = "";
  himp.className = himp.className.replace("boxmerah","");
  metode.value = "";
  metode.className = metode.className.replace("boxmerah","");
  ulang.className = ulang.className.replace("tampil", "");
  document.getElementById("icon33").innerHTML = "";
  bahasslh.className = bahasslh.className.replace("tampil", "");
}
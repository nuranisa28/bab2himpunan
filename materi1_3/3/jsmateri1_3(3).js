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

/*metode deskripsi*/
  //petunjuk
  function ubah1_1(){
    var nama = document.getElementById("h11");
    nama.className += "tebalbiru";
  }
  function ubah1_2(){
    var syarat = document.getElementById("h12");
    syarat.className += "tebalbiru";
  }
  //cek jawaban
  function cek1(){
    var himp = document.getElementById("himp1");
    var metode = document.getElementById("metdes1");
    var ulang = document.getElementById("ulang1");
    var bahasbnr = document.getElementById("bahasbnr1");
    var bahasslh = document.getElementById("bahasslh1");
    
    var x = "bilanganasliantara4dan10";
    //mengubah menjadi huruf kecil dan hapus spasi
    var y = metode.value.toLowerCase();
    y = y.replace(/\s+/g, '');

    //cek
    if(himp.value=="B" && y==x){
      document.getElementById("icon1").innerHTML = "<img src='../img/true.png' width='15px'>";
      bahasbnr.className += " tampil";
    } else{
      ulang.className += " tampil";
      document.getElementById("icon1").innerHTML = "<img src='../img/false.png' width='15px'>";
      bahasslh.className += " tampil";
    }

    if(himp.value=="" || metode.value==""){
      alert("Ups! Jawabanmu masih belum lengkap");
    }

    //boxmerah
    if(himp.value!="B"){
        himp.className += " boxmerah";
    }
    if(y!=x){
      metode.className += " boxmerah";
    }
  }
  //ulang
  function ulang1(){
    var nama = document.getElementById("h11");
    var syarat = document.getElementById("h12");
    var himp = document.getElementById("himp1");
    var metode = document.getElementById("metdes1");
    var ulang = document.getElementById("ulang1");
    var bahasslh = document.getElementById("bahasslh1");

    nama.className = nama.className.replace("tebalbiru","");
    syarat.className = syarat.className.replace("tebalbiru","");
    himp.value = "";
    metode.value = "";
    himp.className = himp.className.replace("boxmerah","");
    metode.className = metode.className.replace("boxmerah","");
    ulang.className = ulang.className.replace("tampil", "");
    document.getElementById("icon1").innerHTML = "";
    bahasslh.className = bahasslh.className.replace("tampil", "");
  }

/*metode bersyarat*/
  //petunjuk
  function ubah2_1(){
    var nama = document.getElementById("h21");
    nama.className += "tebalbiru";
  }
  function ubah2_2(){
    var syarat = document.getElementById("h22");
    syarat.className += "tebalbiru";
  }
  function ubah2_3(){
    var nama = document.getElementById("h23");
    nama.className += "tebalbiru";
  }
  function ubah2_4(){
    var syarat = document.getElementById("h24");
    syarat.className += "tebalbiru";
  }
  function info() {
    var popup = document.getElementById("infovar");
    popup.classList.toggle("show");
  }
  //memunculkan variabel
  let variabel = document.getElementById('var1');
  // function agar saat di enter tidak dijalankan 
  variabel.addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
      });

  variabel.addEventListener('keyup', function(){
    document.getElementById('var2').innerHTML = variabel.value;
    document.getElementById('var3').innerHTML = variabel.value;
  })

  //cek
  function cek2(){
    var himp = document.getElementById("himp2");
    var var1 = document.getElementById("var1");
    var ang1 = document.getElementById("ang1");
    var ang2 = document.getElementById("ang2");
    var metode = document.getElementById("metber1");
    var ulang = document.getElementById("ulang2");
    var bahasbnr = document.getElementById("bahasbnr2");
    var bahasslh = document.getElementById("bahasslh2");
    
    //mengecek apakah variabel yang dimasukkan angka
    var numbers = /^[-+]?[0-9]+$/;
    if (var1.value.match(numbers)){
      var x = 0;
      document.getElementById("ket").innerHTML = "Variabel di isi dengan huruf. Bukan dengan angka.";
      document.getElementById("ket").style.color = "red";
    }

    //mengecek apakah variabel yang dimasukkan huruf kapital
    var capital = /^[A-Z]/;
    if (var1.value.match(capital)){
      var y = 0;
      document.getElementById("ket").innerHTML = "Variabel di isi dengan huruf kecil. Bukan huruf kapital.";
      document.getElementById("ket").style.color = "red";
    }

    var w = "bilanganasli";
    //mengubah menjadi huruf kecil dan hapus spasi
    var z = metode.value.toLowerCase();
    z = z.replace(/\s+/g, '');


    //cek
    if(himp.value=="B" && x!=0 && y!==0 && ang1.value==4 && ang2.value==10 && z==w){
      document.getElementById("icon2").innerHTML = "<img src='../img/true.png' width='15px'>";
      bahasbnr.className += " tampil";
      for(var i=1; i<=7; i++){
        document.getElementById('kett'+i).innerHTML = var1.value;
      }
    } else{
      ulang.className += " tampil";
      document.getElementById("icon2").innerHTML = "<img src='../img/false.png' width='15px'>";
      bahasslh.className += " tampil";
    }

    if(himp.value=="" || var1.value == "" || ang1.value=="" || ang2.value=="" || metode.value==""){
      alert("Ups! Jawabanmu masih belum lengkap");
    }

    //box merah
    if(himp.value!="B"){
      himp.className += " boxmerah";
    }
    if(x==0 || y==0 || var1.value==""){
      var1.className += " boxmerah";
      for(var i=2; i<=3; i++){
        document.getElementById("var"+i).style.color = "red";
      }
    }
    if(ang1.value!=4){
      ang1.className += " boxmerah";
    }
    if(ang2.value!=10){
      ang2.className += " boxmerah";
    }
    if(z!=w){
      metode.className += " boxmerah";
    }
  }
  //ulang
  function ulang2(){
    var himp = document.getElementById("himp2");
    var var1 = document.getElementById("var1");
    var metode = document.getElementById("metber1");
    var ulang = document.getElementById("ulang2");
    var bahasslh = document.getElementById("bahasslh2");

    //mengosongkan
    himp.value = "";
    var1.value = "";
    for(var i=2; i<=3; i++){
        document.getElementById("var"+i).style.color = "black";
        document.getElementById("var"+i).innerHTML = "";
      }
    for(var i=1; i<=2; i++){
      var ang = document.getElementById("ang"+i);
      ang.value = "";
      ang.className = ang.className.replace("boxmerah","");
    }
    metode.value = "";
    document.getElementById("ket").innerHTML = "";
    ulang.className = ulang.className.replace("tampil","");
    document.getElementById("icon2").innerHTML = "";
    bahasslh.className = bahasslh.className.replace("tampil", "");

    //menghilangkan petunjuk
    for(var i=1; i<=4; i++){
      var h = document.getElementById("h2"+i);
      h.className = h.className.replace("tebalbiru","");
    }

    //menghilangkan box merah
    himp.className = himp.className.replace("boxmerah","");
    var1.className = var1.className.replace("boxmerah","");
    metode.className = metode.className.replace("boxmerah","");
  }

/*metode tabulasi*/
  //petunjuk
  function ubah3_1(){
    var nama = document.getElementById("h31");
    nama.className += "tebalbiru";
  }
  function ubah3_2(){
    var nama = document.getElementById("h32");
    nama.className += " tebalbiru";

    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show1");
  }
  //cek
  function cek3(){
    var himp = document.getElementById("himp3");
    var metode = document.getElementById("mettab1");
    var ulang = document.getElementById("ulang3");
    var bahasbnr = document.getElementById("bahasbnr3");
    var bahasslh = document.getElementById("bahasslh3");
    
    //mengecek apakah mettab1 diisi dengan huruf atau angka
    var letters = /^[A-Za-z]+$/;
    if(metode.value.match(letters)){
      var y = 0;
      document.getElementById("ket2").innerHTML = "Isilah bagian anggota himpunan dengan angka, bukan huruf. Sesuai dengan petunjuk yang diberikan";
      document.getElementById("ket2").style.color = "red";
    }

    var x = metode.value;
    /*menghapus spasi pada inputan mettab1*/
    x = x.replace(/\s+/g, '');

    //memecah inputan mettab1 menjadi array dengan tanda koma
    var anghimp3 = x.split(",");

    //array anggota himpunan
    var anggota3 = [5,6,7,8,9];

    //cek array
    var a = 0;
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        if (anggota3[i]==anghimp3[j]) {
          a=a+1;
          anggota3[i]="";
        }
      }
    }

    //cek
    if(himp.value=="B" && a==5){
      document.getElementById("icon3").innerHTML = "<img src='../img/true.png' width='15px'>";
      bahasbnr.className += " tampil";
    } else{
      ulang.className += " tampil";
      document.getElementById("icon3").innerHTML = "<img src='../img/false.png' width='15px'>";
      bahasslh.className += " tampil";
    }

    if(himp.value=="" || metode.value==""){
      alert("Ups! Jawabanmu masih belum lengkap");
    }

    //boxmerah
    if(himp.value!="B"){
        himp.className += " boxmerah";
    }
    if(a!=5){
      metode.className += " boxmerah";
    }
  }
  //ulang
  function ulang3(){
    var himp = document.getElementById("himp3");
    var metode = document.getElementById("mettab1");
    var ulang = document.getElementById("ulang3");
    var bahasslh = document.getElementById("bahasslh3");

    himp.value = "";
    metode.value = "";
    ulang.className = ulang.className.replace("tampil","");
    document.getElementById("icon3").innerHTML = "";
    bahasslh.className = bahasslh.className.replace("tampil", "");

    //menghilangkan box merah
    himp.className = himp.className.replace("boxmerah","");
    metode.className = metode.className.replace("boxmerah","");

    //menghilangkan petunjuk
    for(var i=1; i<=2; i++){
      var h = document.getElementById("h3"+i);
      h.className = h.className.replace("tebalbiru","");
    }
  }
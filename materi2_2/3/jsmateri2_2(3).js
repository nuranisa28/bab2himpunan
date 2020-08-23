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

/*pertanyaan 1*/
//cek
function cek1(){
    var a = 0;
    var b = 0;
    var s1 = document.getElementById("s11");
    var s2 = document.getElementById("s12");
    var s3 = document.getElementById("s13");
    var bahasbnr = document.getElementById("bahasbnr1");
    var bahasslh = document.getElementById("bahasslh1");
    var ulang = document.getElementById("ulang1");

    var p1 = document.getElementById("p11").innerText;
    var p2 = document.getElementById("p12").innerText;
    var p3 = document.getElementById("p13").innerText;
    var p4 = document.getElementById("p14").innerText;
    var p5 = document.getElementById("p15").innerText;
    var p6 = document.getElementById("p16").innerText;

    //cek semesta 1
    if(s1.innerText==p1 || s1.innerText==p2 || s1.innerText==p4){
      document.getElementById("icon11").innerHTML = "<img src='../img/true.png' width='15px' height='15px'>";
      a=a+1;
    }else{
      document.getElementById("icon11").innerHTML = "<img src='../img/false.png' width='15px' height='15px'>";
      s1.className += " salah";
      b=b+1;
    }
    //cek semesta 2
    if(s2.innerText==p1 || s2.innerText==p2 || s2.innerText==p4){
      document.getElementById("icon12").innerHTML = "<img src='../img/true.png' width='15px' height='15px'>";
      a=a+1;
    }else{
      document.getElementById("icon12").innerHTML = "<img src='../img/false.png' width='15px' height='15px'>";
      s2.className += " salah";
      b=b+1;
    }
    //cek semesta 3
    if(s3.innerText==p1 || s3.innerText==p2 || s3.innerText==p4){
      document.getElementById("icon13").innerHTML = "<img src='../img/true.png' width='15px' height='15px'>";
      a=a+1;
    }else{
      document.getElementById("icon13").innerHTML = "<img src='../img/false.png' width='15px' height='15px'>";
      s3.className += " salah";
      b=b+1;
    }

    //info
    if (a==3){
      bahasbnr.className += " tampil";
    } else if (b>0){
      ulang.className += " tampil";
      bahasslh.className += " tampil";
    }
}
//ulang
function ulang1(){
    var s1 = document.getElementById("s11");
    var s2 = document.getElementById("s12");
    var s3 = document.getElementById("s13");
    var bahasslh = document.getElementById("bahasslh1");
    var ulang = document.getElementById("ulang1");

    //isi
    var p1 = "<span class='pilihan' id='p11' draggable='true' ondragstart='drag(event)'>{x | 1 < x < 12, x &isin; bilangan bulat}</span>";
    var p2 = "<span class='pilihan' id='p12' draggable='true' ondragstart='drag(event)'>{x | x < 12, x &isin; bilangan cacah}</span>";
    var p3 = "<span class='pilihan' id='p13' draggable='true' ondragstart='drag(event)'>{x | 1 < x &le; 11, x &isin; bilangan ganjil}</span>";
    var p4 = "<span class='pilihan' id='p14' draggable='true' ondragstart='drag(event)'>{2, 3, 4, 5, 6, 7, 8, 9, 10, 11}</span>";
    var p5 = "<span class='pilihan' id='p15' draggable='true' ondragstart='drag(event)'>{bilangan asli yang mempunyai sisa bagi 1}</span>";
    var p6 = "<span class='pilihan' id='p16' draggable='true' ondragstart='drag(event)'>{bilangan genap}</span>";

    //menghilangkan text
    s1.innerText = "";
    s2.innerText = "";
    s3.innerText = "";
    document.getElementById("icon11").innerHTML = "";
    document.getElementById("icon12").innerHTML = "";
    document.getElementById("icon13").innerHTML = "";
    ulang.className = ulang.className.replace("tampil","");
    bahasslh.className = bahasslh.className.replace("tampil","");

    //mengembalikan teks
    document.getElementById("pil11").innerHTML = p1;
    document.getElementById("pil12").innerHTML = p2;
    document.getElementById("pil13").innerHTML = p3;
    document.getElementById("pil14").innerHTML = p4;
    document.getElementById("pil15").innerHTML = p5;
    document.getElementById("pil16").innerHTML = p6;

    //menghilangkan kotak merah
    if (s1.className.indexOf("benar") == -1){
      s1.className = s1.className.replace("salah", "");
    }
    if (s2.className.indexOf("benar") == -1){
      s2.className = s2.className.replace("salah", "");
    }
    if (s3.className.indexOf("benar") == -1){
      s3.className = s3.className.replace("salah", "");
    }
  }


/*pertanyaan 2*/
function cek2(){
    var a = 0;
    var b = 0;
    var s1 = document.getElementById("s21");
    var s2 = document.getElementById("s22");
    var s3 = document.getElementById("s23");
    var bahasbnr = document.getElementById("bahasbnr2");
    var bahasslh = document.getElementById("bahasslh2");
    var ulang = document.getElementById("ulang2");

    var p1 = document.getElementById("p21").innerText;
    var p2 = document.getElementById("p22").innerText;
    var p3 = document.getElementById("p23").innerText;
    var p4 = document.getElementById("p24").innerText;
    var p5 = document.getElementById("p25").innerText;
    var p6 = document.getElementById("p26").innerText;

    //cek semesta 1
    if(s1.innerText==p1 || s1.innerText==p4 || s1.innerText==p5){
      document.getElementById("icon21").innerHTML = "<img src='../img/true.png' width='15px' height='15px'>";
      a=a+1;
    }else{
      document.getElementById("icon21").innerHTML = "<img src='../img/false.png' width='15px' height='15px'>";
      s1.className += " salah";
      b=b+1;
    }
    //cek semesta 2
    if(s2.innerText==p1 || s2.innerText==p4 || s2.innerText==p5){
      document.getElementById("icon22").innerHTML = "<img src='../img/true.png' width='15px' height='15px'>";
      a=a+1;
    }else{
      document.getElementById("icon22").innerHTML = "<img src='../img/false.png' width='15px' height='15px'>";
      s2.className += " salah";
      b=b+1;
    }
    //cek semesta 3
    if(s3.innerText==p1 || s3.innerText==p4 || s3.innerText==p5){
      document.getElementById("icon23").innerHTML = "<img src='../img/true.png' width='15px' height='15px'>";
      a=a+1;
    }else{
      document.getElementById("icon23").innerHTML = "<img src='../img/false.png' width='15px' height='15px'>";
      s3.className += " salah";
      b=b+1;
    }

    //info
    if (a==3){
      bahasbnr.className += " tampil";
    } else if (b>0){
      ulang.className += " tampil";
      bahasslh.className += " tampil";
    }
}
//ulang
function ulang2(){
    var s1 = document.getElementById("s21");
    var s2 = document.getElementById("s22");
    var s3 = document.getElementById("s23");
    var bahasslh = document.getElementById("bahasslh2");
    var ulang = document.getElementById("ulang2");

    //isi
    var p1 = "<span class='pilihan' id='p21' draggable='true' ondragstart='drag(event)'>{wilayah Indonesia bagian tengah (WITA)}</span>";
    var p2 = "<span class='pilihan' id='p22' draggable='true' ondragstart='drag(event)'>{nama ibu kota provinsi di pulau Sulawesi}</span>";
    var p3 = "<span class='pilihan' id='p23' draggable='true' ondragstart='drag(event)'>{nama ibu kota di negara Australia}</span>";
    var p4 = "<span class='pilihan' id='p24' draggable='true' ondragstart='drag(event)'>{nama ibu kota provinsi}</span>";
    var p5 = "<span class='pilihan' id='p25' draggable='true' ondragstart='drag(event)'>{nama ibu kota provinsi di pulau Kalimantan}</span>";
    var p6 = "<span class='pilihan' id='p26' draggable='true' ondragstart='drag(event)'>{wilayah Indonesia bagian barat (WIB)}</span>";

    //menghilangkan text
    s1.innerText = "";
    s2.innerText = "";
    s3.innerText = "";
    document.getElementById("icon21").innerHTML = "";
    document.getElementById("icon22").innerHTML = "";
    document.getElementById("icon23").innerHTML = "";
    ulang.className = ulang.className.replace("tampil","");
    bahasslh.className = bahasslh.className.replace("tampil","");

    //mengembalikan teks
    document.getElementById("pil21").innerHTML = p1;
    document.getElementById("pil22").innerHTML = p2;
    document.getElementById("pil23").innerHTML = p3;
    document.getElementById("pil24").innerHTML = p4;
    document.getElementById("pil25").innerHTML = p5;
    document.getElementById("pil26").innerHTML = p6;

    //menghilangkan kotak merah
    if (s1.className.indexOf("benar") == -1){
      s1.className = s1.className.replace("salah", "");
    }
    if (s2.className.indexOf("benar") == -1){
      s2.className = s2.className.replace("salah", "");
    }
    if (s3.className.indexOf("benar") == -1){
      s3.className = s3.className.replace("salah", "");
    }
  }
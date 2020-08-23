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
  var pil1 = "<td draggable='true' ondragstart='drag(event)' id='p11' class='pilihan'>⊂</td>";
  var pil2 = "<td draggable='true' ondragstart='drag(event)' id='p12' class='pilihan'>⊄</td>";
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
  var pil1 = "<td draggable='true' ondragstart='drag(event)' id='p21' class='pilihan'>⊂</td>";
  var pil2 = "<td draggable='true' ondragstart='drag(event)' id='p22' class='pilihan'>⊄</td>";
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
  var pil1 = "<td draggable='true' ondragstart='drag(event)' id='p31' class='pilihan'>⊂</td>";
  var pil2 = "<td draggable='true' ondragstart='drag(event)' id='p32' class='pilihan'>⊄</td>";
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
  var pil1 = "<td draggable='true' ondragstart='drag(event)' id='p41' class='pilihan'>⊂</td>";
  var pil2 = "<td draggable='true' ondragstart='drag(event)' id='p42' class='pilihan'>⊄</td>";
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
  var pil1 = "<td class='pilihan' id='p51' draggable='true' ondragstart='drag(event)'>⊂</td>";
  var pil2 = "<td class='pilihan' id='p52' draggable='true' ondragstart='drag(event)'>⊄</td>";
  var ulang = document.getElementById("ulang5");
  var bahasslh = document.getElementById("bahasslh5");
  //menghapus semua
  document.getElementById("no5").innerHTML="";
  document.getElementById("pil5").innerHTML = pil1 + pil2;
  document.getElementById("icon5").innerHTML = "";
  ulang.className = ulang.className.replace("tampil", "");
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/////////soal 1
let jawab1 = document.querySelectorAll('.jawab1');

for(let i=0; i<jawab1.length; i++){

  // function agar saat di enter tidak dijalankan 
  jawab1[i].addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
              e.preventDefault();
              return false;
          }
  });

  jawab1[i].addEventListener('keyup', function(){

    if (jawab1[i].value.length == 0) {
      if(jawab1[i].className.indexOf('boxhijau') == -1){
        jawab1[i].className = jawab1[i].className.replace('boxmerah', "");
      }
      if (jawab1[i].className.indexOf('boxmerah') == -1){
        jawab1[i].className = jawab1[i].className.replace('boxhijau', "");
      }
      document.getElementById('ikon1'+i).innerHTML = "";
    }

    if (jawab1[i].value.length == 1 || jawab1[i].value.length == 2){

      if(i==0){

        if(jawab1[0].value==6){
          if (jawab1[0].className.indexOf('boxhijau') == -1) {
            if (jawab1[0].className.indexOf('boxmerah') == -1) {
              jawab1[0].className += ' boxhijau';
            } else {
              jawab1[0].className = jawab1[0].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon1'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut11').className = document.getElementById('lanjut11').className.replace('hilang','');
        } else{
          document.getElementById('ikon1'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab1[0].className.indexOf('boxmerah') == -1) {
            if (jawab1[0].className.indexOf('boxhijau') == -1) {
              jawab1[0].className += ' boxmerah';
            } else {
              jawab1[0].className = jawab1[0].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==1){

        if(jawab1[1].value==64){
          if (jawab1[1].className.indexOf('boxhijau') == -1) {
            if (jawab1[1].className.indexOf('boxmerah') == -1) {
              jawab1[1].className += ' boxhijau';
            } else {
              jawab1[1].className = jawab1[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon1'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut12').className = document.getElementById('lanjut12').className.replace('hilang','');
        } else{
          document.getElementById('ikon1'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab1[1].className.indexOf('boxmerah') == -1) {
            if (jawab1[1].className.indexOf('boxhijau') == -1) {
              jawab1[1].className += ' boxmerah';
            } else {
              jawab1[1].className = jawab1[1].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==2){

        if(jawab1[2].value==20){
          if (jawab1[2].className.indexOf('boxhijau') == -1) {
            if (jawab1[2].className.indexOf('boxmerah') == -1) {
              jawab1[2].className += ' boxhijau';
            } else {
              jawab1[2].className = jawab1[2].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon1'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut13').className = document.getElementById('lanjut13').className.replace('hilang','');
        } else{
          document.getElementById('ikon1'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab1[2].className.indexOf('boxmerah') == -1) {
            if (jawab1[2].className.indexOf('boxhijau') == -1) {
              jawab1[2].className += ' boxmerah';
            } else {
              jawab1[2].className = jawab1[2].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==3){

        if(jawab1[3].value==22){
          if (jawab1[3].className.indexOf('boxhijau') == -1) {
            if (jawab1[3].className.indexOf('boxmerah') == -1) {
              jawab1[3].className += ' boxhijau';
            } else {
              jawab1[3].className = jawab1[3].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon1'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut14').className = document.getElementById('lanjut14').className.replace('hilang','');
        } else{
          document.getElementById('ikon1'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab1[3].className.indexOf('boxmerah') == -1) {
            if (jawab1[3].className.indexOf('boxhijau') == -1) {
              jawab1[3].className += ' boxmerah';
            } else {
              jawab1[3].className = jawab1[3].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

  })

}

///////soal 2
let jawab2 = document.querySelectorAll('.jawab2');

for(let i=0; i<jawab2.length; i++){

  // function agar saat di enter tidak dijalankan 
  jawab2[i].addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
              e.preventDefault();
              return false;
          }
  });

  jawab2[i].addEventListener('keyup', function(){

    if (jawab2[i].value.length == 0) {
      if(jawab2[i].className.indexOf('boxhijau') == -1){
        jawab2[i].className = jawab2[i].className.replace('boxmerah', "");
      }
      if (jawab2[i].className.indexOf('boxmerah') == -1){
        jawab2[i].className = jawab2[i].className.replace('boxhijau', "");
      }
      document.getElementById('ikon2'+i).innerHTML = "";
    }

    if (jawab2[i].value.length == 1 || jawab2[i].value.length == 2){

      if(i==0){

        if(jawab2[0].value==5){
          if (jawab2[0].className.indexOf('boxhijau') == -1) {
            if (jawab2[0].className.indexOf('boxmerah') == -1) {
              jawab2[0].className += ' boxhijau';
            } else {
              jawab2[0].className = jawab2[0].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon2'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut21').className = document.getElementById('lanjut21').className.replace('hilang','');
        } else{
          document.getElementById('ikon2'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab2[0].className.indexOf('boxmerah') == -1) {
            if (jawab2[0].className.indexOf('boxhijau') == -1) {
              jawab2[0].className += ' boxmerah';
            } else {
              jawab2[0].className = jawab2[0].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==1){

        if(jawab2[1].value==32){
          if (jawab2[1].className.indexOf('boxhijau') == -1) {
            if (jawab2[1].className.indexOf('boxmerah') == -1) {
              jawab2[1].className += ' boxhijau';
            } else {
              jawab2[1].className = jawab2[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon2'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut22').className = document.getElementById('lanjut22').className.replace('hilang','');
        } else{
          document.getElementById('ikon2'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab2[1].className.indexOf('boxmerah') == -1) {
            if (jawab2[1].className.indexOf('boxhijau') == -1) {
              jawab2[1].className += ' boxmerah';
            } else {
              jawab2[1].className = jawab2[1].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==2){

        if(jawab2[2].value==1){
          if (jawab2[2].className.indexOf('boxhijau') == -1) {
            if (jawab2[2].className.indexOf('boxmerah') == -1) {
              jawab2[2].className += ' boxhijau';
            } else {
              jawab2[2].className = jawab2[2].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon2'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut23').className = document.getElementById('lanjut23').className.replace('hilang','');
        } else{
          document.getElementById('ikon2'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab2[2].className.indexOf('boxmerah') == -1) {
            if (jawab2[2].className.indexOf('boxhijau') == -1) {
              jawab2[2].className += ' boxmerah';
            } else {
              jawab2[2].className = jawab2[2].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==3){

        if(jawab2[3].value==16){
          if (jawab2[3].className.indexOf('boxhijau') == -1) {
            if (jawab2[3].className.indexOf('boxmerah') == -1) {
              jawab2[3].className += ' boxhijau';
            } else {
              jawab2[3].className = jawab2[3].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon2'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut24').className = document.getElementById('lanjut24').className.replace('hilang','');
        } else{
          document.getElementById('ikon2'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab2[3].className.indexOf('boxmerah') == -1) {
            if (jawab2[3].className.indexOf('boxhijau') == -1) {
              jawab2[3].className += ' boxmerah';
            } else {
              jawab2[3].className = jawab2[3].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

  })

}

///////soal 3
let jawab3 = document.querySelectorAll('.jawab3');

for(let i=0; i<jawab3.length; i++){

  // function agar saat di enter tidak dijalankan 
  jawab3[i].addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
              e.preventDefault();
              return false;
          }
  });

  jawab3[i].addEventListener('keyup', function(){

    if (jawab3[i].value.length == 0) {
      if(jawab3[i].className.indexOf('boxhijau') == -1){
        jawab3[i].className = jawab3[i].className.replace('boxmerah', "");
      }
      if (jawab3[i].className.indexOf('boxmerah') == -1){
        jawab3[i].className = jawab3[i].className.replace('boxhijau', "");
      }
      document.getElementById('ikon3'+i).innerHTML = "";
    }

    if (jawab3[i].value.length == 1 || jawab3[i].value.length == 2){

      if(i==0){

        if(jawab3[0].value==4){
          if (jawab3[0].className.indexOf('boxhijau') == -1) {
            if (jawab3[0].className.indexOf('boxmerah') == -1) {
              jawab3[0].className += ' boxhijau';
            } else {
              jawab3[0].className = jawab3[0].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon3'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut31').className = document.getElementById('lanjut31').className.replace('hilang','');
        } else{
          document.getElementById('ikon3'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab3[0].className.indexOf('boxmerah') == -1) {
            if (jawab3[0].className.indexOf('boxhijau') == -1) {
              jawab3[0].className += ' boxmerah';
            } else {
              jawab3[0].className = jawab3[0].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==1){

        if(jawab3[1].value==16){
          if (jawab3[1].className.indexOf('boxhijau') == -1) {
            if (jawab3[1].className.indexOf('boxmerah') == -1) {
              jawab3[1].className += ' boxhijau';
            } else {
              jawab3[1].className = jawab3[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon3'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut32').className = document.getElementById('lanjut32').className.replace('hilang','');
        } else{
          document.getElementById('ikon3'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab3[1].className.indexOf('boxmerah') == -1) {
            if (jawab3[1].className.indexOf('boxhijau') == -1) {
              jawab3[1].className += ' boxmerah';
            } else {
              jawab3[1].className = jawab3[1].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==2){

        if(jawab3[2].value==6){
          if (jawab3[2].className.indexOf('boxhijau') == -1) {
            if (jawab3[2].className.indexOf('boxmerah') == -1) {
              jawab3[2].className += ' boxhijau';
            } else {
              jawab3[2].className = jawab3[2].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon3'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut33').className = document.getElementById('lanjut33').className.replace('hilang','');
        } else{
          document.getElementById('ikon3'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab3[2].className.indexOf('boxmerah') == -1) {
            if (jawab3[2].className.indexOf('boxhijau') == -1) {
              jawab3[2].className += ' boxmerah';
            } else {
              jawab3[2].className = jawab3[2].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==3){

        if(jawab3[3].value==15){
          if (jawab3[3].className.indexOf('boxhijau') == -1) {
            if (jawab3[3].className.indexOf('boxmerah') == -1) {
              jawab3[3].className += ' boxhijau';
            } else {
              jawab3[3].className = jawab3[3].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon3'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut34').className = document.getElementById('lanjut34').className.replace('hilang','');
        } else{
          document.getElementById('ikon3'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab3[3].className.indexOf('boxmerah') == -1) {
            if (jawab3[3].className.indexOf('boxhijau') == -1) {
              jawab3[3].className += ' boxmerah';
            } else {
              jawab3[3].className = jawab3[3].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

  })

}
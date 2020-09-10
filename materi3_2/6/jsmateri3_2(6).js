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

/*soal 1*/
function bnr1(){
  var salah = document.getElementById("slh1");
  var bahasbnr = document.getElementById("bahasbnr1");
  document.getElementById('icon1').innerHTML = "<img src='../img/true.png' width='15px'>";
  salah.className += " hilang";
  bahasbnr.className += " tampil";
  
}
function slh1(){
  var benar = document.getElementById("bnr1");
  var bahasslh = document.getElementById("bahasslh1");
  var ulang = document.getElementById("ulang1");
  document.getElementById('icon1').innerHTML = "<img src='../img/false.png' width='15px'>";
  benar.className += " hilang";
  ulang.className += " tampil";
  bahasslh.className += " tampil";
}
function ulang1(){
  var benar = document.getElementById("bnr1");
  var bahasslh = document.getElementById("bahasslh1");
  var ulang = document.getElementById("ulang1");
  document.getElementById('icon1').innerHTML = "";
  benar.className = benar.className.replace("hilang","");
  ulang.className = ulang.className.replace("tampil","");
  bahasslh.className = bahasslh.className.replace("tampil","");
}

/*soal 2*/
function bnr2(){
  var salah = document.getElementById("slh2");
  var bahasbnr = document.getElementById("bahasbnr2");
  document.getElementById('icon2').innerHTML = "<img src='../img/true.png' width='15px'>";
  salah.className += " hilang";
  bahasbnr.className += " tampil";
  
}
function slh2(){
  var benar = document.getElementById("bnr2");
  var bahasslh = document.getElementById("bahasslh2");
  var ulang = document.getElementById("ulang2");
  document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
  benar.className += " hilang";
  ulang.className += " tampil";
  bahasslh.className += " tampil";
}
function ulang2(){
  var benar = document.getElementById("bnr2");
  var bahasslh = document.getElementById("bahasslh2");
  var ulang = document.getElementById("ulang2");
  document.getElementById('icon2').innerHTML = "";
  benar.className = benar.className.replace("hilang","");
  ulang.className = ulang.className.replace("tampil","");
  bahasslh.className = bahasslh.className.replace("tampil","");
}

/*soal 3*/
function bnr3(){
  var salah = document.getElementById("slh3");
  var bahasbnr = document.getElementById("bahasbnr3");
  document.getElementById('icon3').innerHTML = "<img src='../img/true.png' width='15px'>";
  salah.className += " hilang";
  bahasbnr.className += " tampil";
  
}
function slh3(){
  var benar = document.getElementById("bnr3");
  var bahasslh = document.getElementById("bahasslh3");
  var ulang = document.getElementById("ulang3");
  document.getElementById('icon3').innerHTML = "<img src='../img/false.png' width='15px'>";
  benar.className += " hilang";
  ulang.className += " tampil";
  bahasslh.className += " tampil";
}
function ulang3(){
  var benar = document.getElementById("bnr3");
  var bahasslh = document.getElementById("bahasslh3");
  var ulang = document.getElementById("ulang3");
  document.getElementById('icon3').innerHTML = "";
  benar.className = benar.className.replace("hilang","");
  ulang.className = ulang.className.replace("tampil","");
  bahasslh.className = bahasslh.className.replace("tampil","");
}

/*soal 4*/
function bnr4(){
  var salah = document.getElementById("slh4");
  var bahasbnr = document.getElementById("bahasbnr4");
  document.getElementById('icon4').innerHTML = "<img src='../img/true.png' width='15px'>";
  salah.className += " hilang";
  bahasbnr.className += " tampil";
  
}
function slh4(){
  var benar = document.getElementById("bnr4");
  var bahasslh = document.getElementById("bahasslh4");
  var ulang = document.getElementById("ulang4");
  document.getElementById('icon4').innerHTML = "<img src='../img/false.png' width='15px'>";
  benar.className += " hilang";
  ulang.className += " tampil";
  bahasslh.className += " tampil";
}
function ulang4(){
  var benar = document.getElementById("bnr4");
  var bahasslh = document.getElementById("bahasslh4");
  var ulang = document.getElementById("ulang4");
  document.getElementById('icon4').innerHTML = "";
  benar.className = benar.className.replace("hilang","");
  ulang.className = ulang.className.replace("tampil","");
  bahasslh.className = bahasslh.className.replace("tampil","");
}

/*soal 5*/
function bnr5(){
  var salah = document.getElementById("slh5");
  var bahasbnr = document.getElementById("bahasbnr5");
  document.getElementById('icon5').innerHTML = "<img src='../img/true.png' width='15px'>";
  salah.className += " hilang";
  bahasbnr.className += " tampil";
  
}
function slh5(){
  var benar = document.getElementById("bnr5");
  var bahasslh = document.getElementById("bahasslh5");
  var ulang = document.getElementById("ulang5");
  document.getElementById('icon5').innerHTML = "<img src='../img/false.png' width='15px'>";
  benar.className += " hilang";
  ulang.className += " tampil";
  bahasslh.className += " tampil";
}
function ulang5(){
  var benar = document.getElementById("bnr5");
  var bahasslh = document.getElementById("bahasslh5");
  var ulang = document.getElementById("ulang5");
  document.getElementById('icon5').innerHTML = "";
  benar.className = benar.className.replace("hilang","");
  ulang.className = ulang.className.replace("tampil","");
  bahasslh.className = bahasslh.className.replace("tampil","");
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

///////soal 4
let jawab4 = document.querySelectorAll('.jawab4');

for(let i=0; i<jawab4.length; i++){

  // function agar saat di enter tidak dijalankan 
  jawab4[i].addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
              e.preventDefault();
              return false;
          }
  });

  jawab4[i].addEventListener('keyup', function(){

    if (jawab4[i].value.length == 0) {
      if(jawab4[i].className.indexOf('boxhijau') == -1){
        jawab4[i].className = jawab4[i].className.replace('boxmerah', "");
      }
      if (jawab4[i].className.indexOf('boxmerah') == -1){
        jawab4[i].className = jawab4[i].className.replace('boxhijau', "");
      }
      document.getElementById('ikon4'+i).innerHTML = "";
    }

    if (jawab4[i].value.length == 1 || jawab4[i].value.length == 2 || jawab4[i].value.length == 3){

      if(i==0){

        if(jawab4[0].value==8){
          if (jawab4[0].className.indexOf('boxhijau') == -1) {
            if (jawab4[0].className.indexOf('boxmerah') == -1) {
              jawab4[0].className += ' boxhijau';
            } else {
              jawab4[0].className = jawab4[0].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon4'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut41').className = document.getElementById('lanjut41').className.replace('hilang','');
        } else{
          document.getElementById('ikon4'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab4[0].className.indexOf('boxmerah') == -1) {
            if (jawab4[0].className.indexOf('boxhijau') == -1) {
              jawab4[0].className += ' boxmerah';
            } else {
              jawab4[0].className = jawab4[0].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==1){

        if(jawab4[1].value==256){
          if (jawab4[1].className.indexOf('boxhijau') == -1) {
            if (jawab4[1].className.indexOf('boxmerah') == -1) {
              jawab4[1].className += ' boxhijau';
            } else {
              jawab4[1].className = jawab4[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon4'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut42').className = document.getElementById('lanjut42').className.replace('hilang','');
        } else{
          document.getElementById('ikon4'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab4[1].className.indexOf('boxmerah') == -1) {
            if (jawab4[1].className.indexOf('boxhijau') == -1) {
              jawab4[1].className += ' boxmerah';
            } else {
              jawab4[1].className = jawab4[1].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==2){

        if(jawab4[2].value==70){
          if (jawab4[2].className.indexOf('boxhijau') == -1) {
            if (jawab4[2].className.indexOf('boxmerah') == -1) {
              jawab4[2].className += ' boxhijau';
            } else {
              jawab4[2].className = jawab4[2].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon4'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut43').className = document.getElementById('lanjut43').className.replace('hilang','');
        } else{
          document.getElementById('ikon4'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab4[2].className.indexOf('boxmerah') == -1) {
            if (jawab4[2].className.indexOf('boxhijau') == -1) {
              jawab4[2].className += ' boxmerah';
            } else {
              jawab4[2].className = jawab4[2].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==3){

        if(jawab4[3].value==93){
          if (jawab4[3].className.indexOf('boxhijau') == -1) {
            if (jawab4[3].className.indexOf('boxmerah') == -1) {
              jawab4[3].className += ' boxhijau';
            } else {
              jawab4[3].className = jawab4[3].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon4'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut44').className = document.getElementById('lanjut44').className.replace('hilang','');
        } else{
          document.getElementById('ikon4'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab4[3].className.indexOf('boxmerah') == -1) {
            if (jawab4[3].className.indexOf('boxhijau') == -1) {
              jawab4[3].className += ' boxmerah';
            } else {
              jawab4[3].className = jawab4[3].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

  })

}

///////soal 5
let jawab5 = document.querySelectorAll('.jawab5');

for(let i=0; i<jawab5.length; i++){

  // function agar saat di enter tidak dijalankan 
  jawab5[i].addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
              e.preventDefault();
              return false;
          }
  });

  jawab5[i].addEventListener('keyup', function(){

    if (jawab5[i].value.length == 0) {
      if(jawab5[i].className.indexOf('boxhijau') == -1){
        jawab5[i].className = jawab5[i].className.replace('boxmerah', "");
      }
      if (jawab5[i].className.indexOf('boxmerah') == -1){
        jawab5[i].className = jawab5[i].className.replace('boxhijau', "");
      }
      document.getElementById('ikon5'+i).innerHTML = "";
    }

    if (jawab5[i].value.length == 1 || jawab5[i].value.length == 2 || jawab5[i].value.length == 3){

      if(i==0){

        if(jawab5[0].value==7){
          if (jawab5[0].className.indexOf('boxhijau') == -1) {
            if (jawab5[0].className.indexOf('boxmerah') == -1) {
              jawab5[0].className += ' boxhijau';
            } else {
              jawab5[0].className = jawab5[0].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon5'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut51').className = document.getElementById('lanjut51').className.replace('hilang','');
        } else{
          document.getElementById('ikon5'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab5[0].className.indexOf('boxmerah') == -1) {
            if (jawab5[0].className.indexOf('boxhijau') == -1) {
              jawab5[0].className += ' boxmerah';
            } else {
              jawab5[0].className = jawab5[0].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==1){

        if(jawab5[1].value==128){
          if (jawab5[1].className.indexOf('boxhijau') == -1) {
            if (jawab5[1].className.indexOf('boxmerah') == -1) {
              jawab5[1].className += ' boxhijau';
            } else {
              jawab5[1].className = jawab5[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon5'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut52').className = document.getElementById('lanjut52').className.replace('hilang','');
        } else{
          document.getElementById('ikon5'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab5[1].className.indexOf('boxmerah') == -1) {
            if (jawab5[1].className.indexOf('boxhijau') == -1) {
              jawab5[1].className += ' boxmerah';
            } else {
              jawab5[1].className = jawab5[1].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==2){

        if(jawab5[2].value==35){
          if (jawab5[2].className.indexOf('boxhijau') == -1) {
            if (jawab5[2].className.indexOf('boxmerah') == -1) {
              jawab5[2].className += ' boxhijau';
            } else {
              jawab5[2].className = jawab5[2].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon5'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut53').className = document.getElementById('lanjut53').className.replace('hilang','');
        } else{
          document.getElementById('ikon5'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab5[2].className.indexOf('boxmerah') == -1) {
            if (jawab5[2].className.indexOf('boxhijau') == -1) {
              jawab5[2].className += ' boxmerah';
            } else {
              jawab5[2].className = jawab5[2].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==3){

        if(jawab5[3].value==120){
          if (jawab5[3].className.indexOf('boxhijau') == -1) {
            if (jawab5[3].className.indexOf('boxmerah') == -1) {
              jawab5[3].className += ' boxhijau';
            } else {
              jawab5[3].className = jawab5[3].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('ikon5'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut54').className = document.getElementById('lanjut54').className.replace('hilang','');
        } else{
          document.getElementById('ikon5'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab5[3].className.indexOf('boxmerah') == -1) {
            if (jawab5[3].className.indexOf('boxhijau') == -1) {
              jawab5[3].className += ' boxmerah';
            } else {
              jawab5[3].className = jawab5[3].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

  })

}
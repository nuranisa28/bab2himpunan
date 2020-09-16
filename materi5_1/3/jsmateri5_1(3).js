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

function syarat(syarat) {
  var x = document.getElementById(syarat);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}


function tujuan(tujuan) {
  var x = document.getElementById(tujuan);
  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
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

///////////////////

let jawaban = document.querySelectorAll('.input1');
let icon = document.querySelectorAll('.icon1');

for (let i=0; i<jawaban.length; i++){

  // function agar saat di enter tidak dijalankan 
  jawaban[i].addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
              e.preventDefault();
              return false;
          }
  });

  jawaban[i].addEventListener('keyup', function(){

    if (jawaban[i].value.length == 0) {
      if(jawaban[i].className.indexOf('boxhijau') == -1){
        jawaban[i].className = jawaban[i].className.replace('boxmerah', "");
      }
      if (jawaban[i].className.indexOf('boxmerah') == -1){
        jawaban[i].className = jawaban[i].className.replace('boxhijau', "");
      }
    }

    if (i==0) {

      if(jawaban[0].value.length==2){

        if(jawaban[0].value==13){
          //box warna
          icon[0].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[0].className.indexOf('boxhijau') == -1) {
            if (jawaban[0].className.indexOf('boxmerah') == -1) {
              jawaban[0].className += ' boxhijau';
            } else {
              jawaban[0].className = jawaban[0].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan11').className = document.getElementById('lan11').className.replace('hilang','');
            document.getElementById('lan12').className = document.getElementById('lan12').className.replace('hilang','');
          }, 500)
        } else{
          icon[0].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawaban[0].className.indexOf('boxmerah') == -1) {
            if (jawaban[0].className.indexOf('boxhijau') == -1) {
              jawaban[0].className += ' boxmerah';
            } else {
              jawaban[0].className = jawaban[0].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if (i==1){

      if(jawaban[1].value.length==2){

        if(jawaban[1].value==13){
          //boxwarna
          icon[1].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[1].className.indexOf('boxhijau') == -1) {
            if (jawaban[1].className.indexOf('boxmerah') == -1) {
              jawaban[1].className += ' boxhijau';
            } else {
              jawaban[1].className = jawaban[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan13').className = document.getElementById('lan13').className.replace('hilang','');
            document.getElementById('lan14').className = document.getElementById('lan14').className.replace('hilang','');
          }, 500)
        } else{
          icon[1].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawaban[1].className.indexOf('boxmerah') == -1) {
            if (jawaban[1].className.indexOf('boxhijau') == -1) {
              jawaban[1].className += ' boxmerah';
            } else {
              jawaban[1].className = jawaban[1].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==2){

      if(jawaban[2].value.length==1){

        if(jawaban[2].value==7){
          //boxwarna
          icon[2].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[2].className.indexOf('boxhijau') == -1) {
            if (jawaban[2].className.indexOf('boxmerah') == -1) {
              jawaban[2].className += ' boxhijau';
            } else {
              jawaban[2].className = jawaban[2].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan15').className = document.getElementById('lan15').className.replace('hilang','');
            document.getElementById('lan16').className = document.getElementById('lan16').className.replace('hilang','');
          }, 500)
        } else{
          icon[2].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawaban[2].className.indexOf('boxmerah') == -1) {
            if (jawaban[2].className.indexOf('boxhijau') == -1) {
              jawaban[2].className += ' boxmerah';
            } else {
              jawaban[2].className = jawaban[2].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

  })


}

////////////////////

let jawab2 = document.querySelectorAll('.input2');
let icon2 = document.querySelectorAll('.icon2');

for (let i=0; i<jawab2.length; i++){

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
    }

    if (i==0) {

      if(jawab2[0].value.length==1){

        if(jawab2[0].value==5){
          //box warna
          icon2[0].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab2[0].className.indexOf('boxhijau') == -1) {
            if (jawab2[0].className.indexOf('boxmerah') == -1) {
              jawab2[0].className += ' boxhijau';
            } else {
              jawab2[0].className = jawab2[0].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan21').className = document.getElementById('lan21').className.replace('hilang','');
            document.getElementById('lan22').className = document.getElementById('lan22').className.replace('hilang','');
          }, 500)
        } else{
          icon2[0].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab2[0].className.indexOf('boxmerah') == -1) {
            if (jawab2[0].className.indexOf('boxhijau') == -1) {
              jawab2[0].className += ' boxmerah';
            } else {
              jawab2[0].className = jawab2[0].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if (i==1) {

      if(jawab2[1].value.length==1){

        if(jawab2[1].value==9){
          //box warna
          icon2[1].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab2[1].className.indexOf('boxhijau') == -1) {
            if (jawab2[1].className.indexOf('boxmerah') == -1) {
              jawab2[1].className += ' boxhijau';
            } else {
              jawab2[1].className = jawab2[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan23').className = document.getElementById('lan23').className.replace('hilang','');
            document.getElementById('lan24').className = document.getElementById('lan24').className.replace('hilang','');
          }, 500)
        } else{
          icon2[1].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab2[1].className.indexOf('boxmerah') == -1) {
            if (jawab2[1].className.indexOf('boxhijau') == -1) {
              jawab2[1].className += ' boxmerah';
            } else {
              jawab2[1].className = jawab2[1].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if (i==2) {

      if(jawab2[2].value.length==1){

        if(jawab2[2].value==4){
          //box warna
          icon2[2].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab2[2].className.indexOf('boxhijau') == -1) {
            if (jawab2[2].className.indexOf('boxmerah') == -1) {
              jawab2[2].className += ' boxhijau';
            } else {
              jawab2[2].className = jawab2[2].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan25').className = document.getElementById('lan25').className.replace('hilang','');
            document.getElementById('lan26').className = document.getElementById('lan26').className.replace('hilang','');
          }, 500)
        } else{
          icon2[2].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab2[2].className.indexOf('boxmerah') == -1) {
            if (jawab2[2].className.indexOf('boxhijau') == -1) {
              jawab2[2].className += ' boxmerah';
            } else {
              jawab2[2].className = jawab2[2].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

  })

}

//////////////////////////

let jawab3 = document.querySelectorAll('.input3');
let icon3 = document.querySelectorAll('.icon3');

for (let i=0; i<jawab3.length; i++){

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
    }

    if (i==0) {

      if(jawab3[0].value.length==2){

        if(jawab3[0].value==11){
          //box warna
          icon3[0].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab3[0].className.indexOf('boxhijau') == -1) {
            if (jawab3[0].className.indexOf('boxmerah') == -1) {
              jawab3[0].className += ' boxhijau';
            } else {
              jawab3[0].className = jawab3[0].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan31').className = document.getElementById('lan31').className.replace('hilang','');
            document.getElementById('lan32').className = document.getElementById('lan32').className.replace('hilang','');
          }, 500)
        } else{
          icon3[0].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab3[0].className.indexOf('boxmerah') == -1) {
            if (jawab3[0].className.indexOf('boxhijau') == -1) {
              jawab3[0].className += ' boxmerah';
            } else {
              jawab3[0].className = jawab3[0].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if (i==1) {

      if(jawab3[1].value.length==2){

        if(jawab3[1].value==31){
          //box warna
          icon3[1].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab3[1].className.indexOf('boxhijau') == -1) {
            if (jawab3[1].className.indexOf('boxmerah') == -1) {
              jawab3[1].className += ' boxhijau';
            } else {
              jawab3[1].className = jawab3[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan33').className = document.getElementById('lan33').className.replace('hilang','');
            document.getElementById('lan34').className = document.getElementById('lan34').className.replace('hilang','');
          }, 500)
        } else{
          icon3[1].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab3[1].className.indexOf('boxmerah') == -1) {
            if (jawab3[1].className.indexOf('boxhijau') == -1) {
              jawab3[1].className += ' boxmerah';
            } else {
              jawab3[1].className = jawab3[1].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if (i==2) {

      if(jawab3[2].value.length==2){

        if(jawab3[2].value==14){
          //box warna
          icon3[2].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab3[2].className.indexOf('boxhijau') == -1) {
            if (jawab3[2].className.indexOf('boxmerah') == -1) {
              jawab3[2].className += ' boxhijau';
            } else {
              jawab3[2].className = jawab3[2].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan35').className = document.getElementById('lan35').className.replace('hilang','');
            document.getElementById('lan36').className = document.getElementById('lan36').className.replace('hilang','');
          }, 500)
        } else{
          icon3[2].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab3[2].className.indexOf('boxmerah') == -1) {
            if (jawab3[2].className.indexOf('boxhijau') == -1) {
              jawab3[2].className += ' boxmerah';
            } else {
              jawab3[2].className = jawab3[2].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

  })

}

//////////////////////////

let jawab4 = document.querySelectorAll('.input4');
let icon4 = document.querySelectorAll('.icon4');

for (let i=0; i<jawab4.length; i++){

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
    }

    if (i==0) {

      if(jawab4[0].value.length==2){

        if(jawab4[0].value==39){
          //box warna
          icon4[0].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab4[0].className.indexOf('boxhijau') == -1) {
            if (jawab4[0].className.indexOf('boxmerah') == -1) {
              jawab4[0].className += ' boxhijau';
            } else {
              jawab4[0].className = jawab4[0].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan41').className = document.getElementById('lan41').className.replace('hilang','');
            document.getElementById('lan42').className = document.getElementById('lan42').className.replace('hilang','');
          }, 500)
        } else{
          icon4[0].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab4[0].className.indexOf('boxmerah') == -1) {
            if (jawab4[0].className.indexOf('boxhijau') == -1) {
              jawab4[0].className += ' boxmerah';
            } else {
              jawab4[0].className = jawab4[0].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if (i==1) {

      if(jawab4[1].value.length==2){

        if(jawab4[1].value==22){
          //box warna
          icon4[1].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab4[1].className.indexOf('boxhijau') == -1) {
            if (jawab4[1].className.indexOf('boxmerah') == -1) {
              jawab4[1].className += ' boxhijau';
            } else {
              jawab4[1].className = jawab4[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan43').className = document.getElementById('lan43').className.replace('hilang','');
            document.getElementById('lan44').className = document.getElementById('lan44').className.replace('hilang','');
          }, 500)
        } else{
          icon4[1].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab4[1].className.indexOf('boxmerah') == -1) {
            if (jawab4[1].className.indexOf('boxhijau') == -1) {
              jawab4[1].className += ' boxmerah';
            } else {
              jawab4[1].className = jawab4[1].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if (i==2) {

      if(jawab4[2].value.length==1){

        if(jawab4[2].value==8){
          //box warna
          icon4[2].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab4[2].className.indexOf('boxhijau') == -1) {
            if (jawab4[2].className.indexOf('boxmerah') == -1) {
              jawab4[2].className += ' boxhijau';
            } else {
              jawab4[2].className = jawab4[2].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan45').className = document.getElementById('lan45').className.replace('hilang','');
            document.getElementById('lan46').className = document.getElementById('lan46').className.replace('hilang','');
          }, 500)
        } else{
          icon4[2].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab4[2].className.indexOf('boxmerah') == -1) {
            if (jawab4[2].className.indexOf('boxhijau') == -1) {
              jawab4[2].className += ' boxmerah';
            } else {
              jawab4[2].className = jawab4[2].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

  })

}

//////////////////////////

let jawab5 = document.querySelectorAll('.input5');
let icon5 = document.querySelectorAll('.icon5');

for (let i=0; i<jawab5.length; i++){

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
    }

    if (i==0) {

      if(jawab5[0].value.length==2){

        if(jawab5[0].value==13){
          //box warna
          icon5[0].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab5[0].className.indexOf('boxhijau') == -1) {
            if (jawab5[0].className.indexOf('boxmerah') == -1) {
              jawab5[0].className += ' boxhijau';
            } else {
              jawab5[0].className = jawab5[0].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan51').className = document.getElementById('lan51').className.replace('hilang','');
            document.getElementById('lan52').className = document.getElementById('lan52').className.replace('hilang','');
          }, 500)
        } else{
          icon5[0].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab5[0].className.indexOf('boxmerah') == -1) {
            if (jawab5[0].className.indexOf('boxhijau') == -1) {
              jawab5[0].className += ' boxmerah';
            } else {
              jawab5[0].className = jawab5[0].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if (i==1) {

      if(jawab5[1].value.length==1){

        if(jawab5[1].value==2){
          //box warna
          icon5[1].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab5[1].className.indexOf('boxhijau') == -1) {
            if (jawab5[1].className.indexOf('boxmerah') == -1) {
              jawab5[1].className += ' boxhijau';
            } else {
              jawab5[1].className = jawab5[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan53').className = document.getElementById('lan53').className.replace('hilang','');
            document.getElementById('lan54').className = document.getElementById('lan54').className.replace('hilang','');
          }, 500)
        } else{
          icon5[1].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab5[1].className.indexOf('boxmerah') == -1) {
            if (jawab5[1].className.indexOf('boxhijau') == -1) {
              jawab5[1].className += ' boxmerah';
            } else {
              jawab5[1].className = jawab5[1].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if (i==2) {

      if(jawab5[2].value.length==2){

        if(jawab5[2].value==33){
          //box warna
          icon5[2].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab5[2].className.indexOf('boxhijau') == -1) {
            if (jawab5[2].className.indexOf('boxmerah') == -1) {
              jawab5[2].className += ' boxhijau';
            } else {
              jawab5[2].className = jawab5[2].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan55').className = document.getElementById('lan55').className.replace('hilang','');
            document.getElementById('lan56').className = document.getElementById('lan56').className.replace('hilang','');
          }, 500)
        } else{
          icon5[2].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab5[2].className.indexOf('boxmerah') == -1) {
            if (jawab5[2].className.indexOf('boxhijau') == -1) {
              jawab5[2].className += ' boxmerah';
            } else {
              jawab5[2].className = jawab5[2].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

  })

}
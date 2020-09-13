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

function penjelasan(evt, pascal) {
  var i, jelas;
  jelas = document.getElementsByClassName("jelas");
  for (i = 0; i < jelas.length; i++) {
    jelas[i].style.display = "none";
  }
  document.getElementById(pascal).style.display = "block";
}

function penjelasan2(evt, pascal) {
  var i, jelas;
  jelas = document.getElementsByClassName("jelas2");
  for (i = 0; i < jelas.length; i++) {
    jelas[i].style.display = "none";
  }
  document.getElementById(pascal).style.display = "block";
}

function penjelasan3(evt, pascal) {
  var i, jelas;
  jelas = document.getElementsByClassName("jelas3");
  for (i = 0; i < jelas.length; i++) {
    jelas[i].style.display = "none";
  }
  document.getElementById(pascal).style.display = "block";
}

function penjelasan4(evt, pascal) {
  var i, jelas;
  jelas = document.getElementsByClassName("jelas4");
  for (i = 0; i < jelas.length; i++) {
    jelas[i].style.display = "none";
  }
  document.getElementById(pascal).style.display = "block";
}

function penjelasan5(evt, pascal) {
  var i, jelas;
  jelas = document.getElementsByClassName("jelas5");
  for (i = 0; i < jelas.length; i++) {
    jelas[i].style.display = "none";
  }
  document.getElementById(pascal).style.display = "block";
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

let jawaban = document.querySelectorAll('.input1');

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

        if(jawaban[0].value==51){
          //box warna
          if (jawaban[0].className.indexOf('boxhijau') == -1) {
            if (jawaban[0].className.indexOf('boxmerah') == -1) {
              jawaban[0].className += ' boxhijau';
            } else {
              jawaban[0].className = jawaban[0].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
            document.getElementById('lanjutt1').className = document.getElementById('lanjutt1').className.replace('hilang','');
          }, 500)
        } else{
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

        if(jawaban[1].value==11){
          //boxwarna
          icon[0].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[1].className.indexOf('boxhijau') == -1) {
            if (jawaban[1].className.indexOf('boxmerah') == -1) {
              jawaban[1].className += ' boxhijau';
            } else {
              jawaban[1].className = jawaban[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
            document.getElementById('lanjut3').className = document.getElementById('lanjut3').className.replace('hilang','');
          }, 500)
        } else{
          icon[0].innerHTML = "<img src='../img/false.png' width='15px'>";
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

      if(jawaban[2].value.length==2){

        if(jawaban[2].value==11){
          //boxwarna
          if (jawaban[2].className.indexOf('boxhijau') == -1) {
            if (jawaban[2].className.indexOf('boxmerah') == -1) {
              jawaban[2].className += ' boxhijau';
            } else {
              jawaban[2].className = jawaban[2].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut4').className = document.getElementById('lanjut4').className.replace('hilang','');
          }, 500)
        } else{
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

    if(i==3){

      if(jawaban[3].value.length==2){

        if(jawaban[3].value==13){
          //boxwarna
          icon[1].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[3].className.indexOf('boxhijau') == -1) {
            if (jawaban[3].className.indexOf('boxmerah') == -1) {
              jawaban[3].className += ' boxhijau';
            } else {
              jawaban[3].className = jawaban[3].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut5').className = document.getElementById('lanjut5').className.replace('hilang','');
            document.getElementById('lanjut6').className = document.getElementById('lanjut6').className.replace('hilang','');
          }, 500)
        } else{
          icon[1].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawaban[3].className.indexOf('boxmerah') == -1) {
            if (jawaban[3].className.indexOf('boxhijau') == -1) {
              jawaban[3].className += ' boxmerah';
            } else {
              jawaban[3].className = jawaban[3].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==4){

      if(jawaban[4].value.length==2){

        if(jawaban[4].value==11){
          //boxwarna
          if (jawaban[4].className.indexOf('boxhijau') == -1) {
            if (jawaban[4].className.indexOf('boxmerah') == -1) {
              jawaban[4].className += ' boxhijau';
            } else {
              jawaban[4].className = jawaban[4].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut7').className = document.getElementById('lanjut7').className.replace('hilang','');
          }, 500)
        } else{
          if (jawaban[4].className.indexOf('boxmerah') == -1) {
            if (jawaban[4].className.indexOf('boxhijau') == -1) {
              jawaban[4].className += ' boxmerah';
            } else {
              jawaban[4].className = jawaban[4].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==5){

      if(jawaban[5].value.length==2){

        if(jawaban[5].value==12){
          //boxwarna
          icon[2].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[5].className.indexOf('boxhijau') == -1) {
            if (jawaban[5].className.indexOf('boxmerah') == -1) {
              jawaban[5].className += ' boxhijau';
            } else {
              jawaban[5].className = jawaban[5].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut8').className = document.getElementById('lanjut8').className.replace('hilang','');
            document.getElementById('lanjut9').className = document.getElementById('lanjut9').className.replace('hilang','');
          }, 500)
        } else{
          icon[2].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawaban[5].className.indexOf('boxmerah') == -1) {
            if (jawaban[5].className.indexOf('boxhijau') == -1) {
              jawaban[5].className += ' boxmerah';
            } else {
              jawaban[5].className = jawaban[5].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }


  })


}

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

        if(jawab2[0].value==7){
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

        if(jawab2[1].value==7){
          //box warna
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

      if(jawab2[2].value.length==2){

        if(jawab2[2].value==10){
          //box warna
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

    if (i==3) {

      if(jawab2[3].value.length==2){

        if(jawab2[3].value==25){
          //box warna
          icon2[1].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab2[3].className.indexOf('boxhijau') == -1) {
            if (jawab2[3].className.indexOf('boxmerah') == -1) {
              jawab2[3].className += ' boxhijau';
            } else {
              jawab2[3].className = jawab2[3].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan27').className = document.getElementById('lan27').className.replace('hilang','');
            document.getElementById('lan28').className = document.getElementById('lan28').className.replace('hilang','');
          }, 500)
        } else{
          icon2[1].innerHTML = "<img src='../img/false.png' width='15px'>";
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

    if (i==4) {

      if(jawab2[4].value.length==2){

        if(jawab2[4].value==25){
          //box warna
          if (jawab2[4].className.indexOf('boxhijau') == -1) {
            if (jawab2[4].className.indexOf('boxmerah') == -1) {
              jawab2[4].className += ' boxhijau';
            } else {
              jawab2[4].className = jawab2[4].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan29').className = document.getElementById('lan29').className.replace('hilang','');
          }, 500)
        } else{
          if (jawab2[4].className.indexOf('boxmerah') == -1) {
            if (jawab2[4].className.indexOf('boxhijau') == -1) {
              jawab2[4].className += ' boxmerah';
            } else {
              jawab2[4].className = jawab2[4].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if (i==5) {

      if(jawab2[5].value.length==2){

        if(jawab2[5].value==12){
          //box warna
          icon2[2].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawab2[5].className.indexOf('boxhijau') == -1) {
            if (jawab2[5].className.indexOf('boxmerah') == -1) {
              jawab2[5].className += ' boxhijau';
            } else {
              jawab2[5].className = jawab2[5].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lan210').className = document.getElementById('lan210').className.replace('hilang','');
            document.getElementById('lan211').className = document.getElementById('lan211').className.replace('hilang','');
          }, 500)
        } else{
          icon2[2].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawab2[5].className.indexOf('boxmerah') == -1) {
            if (jawab2[5].className.indexOf('boxhijau') == -1) {
              jawab2[5].className += ' boxmerah';
            } else {
              jawab2[5].className = jawab2[5].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

  })

}
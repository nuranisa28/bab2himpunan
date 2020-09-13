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
  jelas = document.getElementsByClassName("jelass");
  for (i = 0; i < jelas.length; i++) {
    jelas[i].style.display = "none";
  }
  document.getElementById(pascal).style.display = "block";
}

let jawaban = document.querySelectorAll('.input1');
let icon = document.querySelectorAll('.icon');

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

        if(jawaban[0].value==48){
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

      if(jawaban[1].value.length==1){

        if(jawaban[1].value==8){
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

      if(jawaban[2].value.length==1){

        if(jawaban[2].value==8){
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

        if(jawaban[3].value==12){
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

      if(jawaban[4].value.length==1){

        if(jawaban[4].value==8){
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

        if(jawaban[5].value==17){
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

    if(i==6){

      if(jawaban[6].value.length==2){

        if(jawaban[6].value==24){
          //boxwarna
          icon[3].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[6].className.indexOf('boxhijau') == -1) {
            if (jawaban[6].className.indexOf('boxmerah') == -1) {
              jawaban[6].className += ' boxhijau';
            } else {
              jawaban[6].className = jawaban[6].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut10').className = document.getElementById('lanjut10').className.replace('hilang','');
            document.getElementById('lanjut11').className = document.getElementById('lanjut11').className.replace('hilang','');
          }, 500)
        } else{
          icon[3].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawaban[6].className.indexOf('boxmerah') == -1) {
            if (jawaban[6].className.indexOf('boxhijau') == -1) {
              jawaban[6].className += ' boxmerah';
            } else {
              jawaban[6].className = jawaban[6].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==7){

      if(jawaban[7].value.length==2){

        if(jawaban[7].value==19){
          //boxwarna
          icon[4].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[7].className.indexOf('boxhijau') == -1) {
            if (jawaban[7].className.indexOf('boxmerah') == -1) {
              jawaban[7].className += ' boxhijau';
            } else {
              jawaban[7].className = jawaban[7].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut12').className = document.getElementById('lanjut12').className.replace('hilang','');
            document.getElementById('lanjut13').className = document.getElementById('lanjut13').className.replace('hilang','');
          }, 500)
        } else{
          icon[4].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawaban[7].className.indexOf('boxmerah') == -1) {
            if (jawaban[7].className.indexOf('boxhijau') == -1) {
              jawaban[7].className += ' boxmerah';
            } else {
              jawaban[7].className = jawaban[7].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==8){

      if(jawaban[8].value.length==2){

        if(jawaban[8].value==59){
          //boxwarna
          if (jawaban[8].className.indexOf('boxhijau') == -1) {
            if (jawaban[8].className.indexOf('boxmerah') == -1) {
              jawaban[8].className += ' boxhijau';
            } else {
              jawaban[8].className = jawaban[8].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut14').className = document.getElementById('lanjut14').className.replace('hilang','');
            document.getElementById('lanjut15').className = document.getElementById('lanjut15').className.replace('hilang','');
          }, 500)
        } else{
          if (jawaban[8].className.indexOf('boxmerah') == -1) {
            if (jawaban[8].className.indexOf('boxhijau') == -1) {
              jawaban[8].className += ' boxmerah';
            } else {
              jawaban[8].className = jawaban[8].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

    if(i==9){

      if(jawaban[9].value.length==2){

        if(jawaban[9].value==11){
          //boxwarna
          icon[5].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[9].className.indexOf('boxhijau') == -1) {
            if (jawaban[9].className.indexOf('boxmerah') == -1) {
              jawaban[9].className += ' boxhijau';
            } else {
              jawaban[9].className = jawaban[9].className.replace('boxmerah', 'boxhijau');
            }
          }
          //lanjut
          setTimeout(function (){
            document.getElementById('lanjut16').className = document.getElementById('lanjut16').className.replace('hilang','');
          }, 500)
        } else{
          icon[5].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawaban[9].className.indexOf('boxmerah') == -1) {
            if (jawaban[9].className.indexOf('boxhijau') == -1) {
              jawaban[9].className += ' boxmerah';
            } else {
              jawaban[9].className = jawaban[9].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }

  })


}
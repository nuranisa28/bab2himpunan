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

function muncul(){
  document.getElementById('tekan').className += " hilang";
  document.getElementById('muncul').className = document.getElementById('muncul').className.replace('hilang','');
}

//petunjuk
function ubah1(){
  document.getElementById('ubah6').className += " boxbiru";
}
function ubah2(){
  for(var i=4; i<=9; i++){
    document.getElementById('ubah'+i).className += " boxbiru";
  }
}
function ubah3(){
  for(var i=1; i<=4; i++){
    document.getElementById('ubah'+i).className += " boxbiru";
  }
}
function ubah4(){
  for(var i=1; i<=3; i++){
    document.getElementById('ubah'+i).className += " boxbiru";
  }
}
function ubah5(){
  for(var i=5; i<=9; i++){
    document.getElementById('ubah'+i).className += " boxbiru";
  }
}

let jawaban = document.querySelectorAll('.jawab1');
let icon = document.querySelectorAll('.icon');

for(let i=0; i<jawaban.length; i++){

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
      icon[i].innerHTML = "";
    }

    if (jawaban[i].value.length==2 || jawaban[i].value.length==3) {

      if(i==0){

        if(jawaban[0].value==56){
          icon[0].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[0].className.indexOf('boxhijau') == -1) {
            if (jawaban[0].className.indexOf('boxmerah') == -1) {
              jawaban[0].className += ' boxhijau';
            } else {
              jawaban[0].className = jawaban[0].className.replace('boxmerah', 'boxhijau');
            }
          }
          setTimeout(function (){
            document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
            document.getElementById('ubah6').className = document.getElementById('ubah6').className.replace('boxbiru','');
          }, 1000)
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

      if(i==1){

        if(jawaban[1].value==219){
          icon[1].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[1].className.indexOf('boxhijau') == -1) {
            if (jawaban[1].className.indexOf('boxmerah') == -1) {
              jawaban[1].className += ' boxhijau';
            } else {
              jawaban[1].className = jawaban[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          setTimeout(function (){
            document.getElementById('lanjut2').className = document.getElementById('lanjut1').className.replace('hilang','');
            for(var i=4; i<=9; i++){
              document.getElementById('ubah'+i).className = document.getElementById('ubah'+i).className.replace('boxbiru','');
            }
          }, 1000)
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

      if(i==2){

        if(jawaban[2].value==93){
          icon[2].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[2].className.indexOf('boxhijau') == -1) {
            if (jawaban[2].className.indexOf('boxmerah') == -1) {
              jawaban[2].className += ' boxhijau';
            } else {
              jawaban[2].className = jawaban[2].className.replace('boxmerah', 'boxhijau');
            }
          }
          setTimeout(function (){
            document.getElementById('lanjut3').className = document.getElementById('lanjut1').className.replace('hilang','');
            for(var i=1; i<=4; i++){
              document.getElementById('ubah'+i).className = document.getElementById('ubah'+i).className.replace('boxbiru','');
            }
          }, 1000)
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

      if(i==3){

        if(jawaban[3].value==37){
          icon[3].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[3].className.indexOf('boxhijau') == -1) {
            if (jawaban[3].className.indexOf('boxmerah') == -1) {
              jawaban[3].className += ' boxhijau';
            } else {
              jawaban[3].className = jawaban[3].className.replace('boxmerah', 'boxhijau');
            }
          }
          setTimeout(function (){
            document.getElementById('lanjut4').className = document.getElementById('lanjut1').className.replace('hilang','');
            for(var i=1; i<=3; i++){
              document.getElementById('ubah'+i).className = document.getElementById('ubah'+i).className.replace('boxbiru','');
            }
          }, 1000)
        } else{
          icon[3].innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawaban[3].className.indexOf('boxmerah') == -1) {
            if (jawaban[3].className.indexOf('boxhijau') == -1) {
              jawaban[3].className += ' boxmerah';
            } else {
              jawaban[3].className = jawaban[3].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==4){

        if(jawaban[4].value==163){
          icon[4].innerHTML = "<img src='../img/true.png' width='15px'>";
          if (jawaban[4].className.indexOf('boxhijau') == -1) {
            if (jawaban[4].className.indexOf('boxmerah') == -1) {
              jawaban[4].className += ' boxhijau';
            } else {
              jawaban[4].className = jawaban[4].className.replace('boxmerah', 'boxhijau');
            }
          }
          setTimeout(function (){
            document.getElementById('lanjut5').className = document.getElementById('lanjut1').className.replace('hilang','');
            for(var i=5; i<=9; i++){
              document.getElementById('ubah'+i).className = document.getElementById('ubah'+i).className.replace('boxbiru','');
            }
          }, 1000)
        } else{
          icon[4].innerHTML = "<img src='../img/false.png' width='15px'>";
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


  })

}


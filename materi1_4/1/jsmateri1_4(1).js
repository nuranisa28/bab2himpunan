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

function ya1(){
  var tidak = document.getElementById('tidak1');
  var lanjut = document.getElementById('lanjut1');
  var benar = document.getElementById('bnr1');

  tidak.className += " hilang";
  document.getElementById('icon11').innerHTML = "<img src='../img/true.png' width='15px'>";
  lanjut.className = lanjut.className.replace("hilang","");
  benar.className = benar.className.replace("hilang","");
}

function tidak1(){
  var ya = document.getElementById('ya1');
  var ulang = document.getElementById('ulang1');
  var lanjut = document.getElementById('lanjut1');
  var salah = document.getElementById('slh1');

  ya.className += " hilang";
  ulang.className = ulang.className.replace("hilang","");
  document.getElementById('icon11').innerHTML = "<img src='../img/false.png' width='15px'>";
  lanjut.className = lanjut.className.replace("hilang","");
  salah.className = salah.className.replace("hilang","");
}

function ulang1(){
  var ya = document.getElementById('ya1');
  var ulang = document.getElementById('ulang1');
  var lanjut = document.getElementById('lanjut1');
  var salah = document.getElementById('slh1');

  ya.className = ya.className.replace("hilang","");
  ulang.className += " hilang";
  document.getElementById('icon11').innerHTML = "";
  lanjut.className += " hilang";
  salah.className += " hilang";
}

let jawab1 = document.getElementById('byk1');
  // function agar saat di enter tidak dijalankan 
  jawab1.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      return false;
     }
  });

  jawab1.addEventListener('keyup', function () {
    //jika kotak kosong
    if(jawab1.value.length==0){
      if(jawab1.className.indexOf('boxhijau') == -1){
          jawab1.className = jawab1.className.replace('boxmerah', "");
        }
        if (jawab1.className.indexOf('boxmerah') == -1){
          jawab1.className = jawab1.className.replace('boxhijau', "");
        } 
        document.getElementById('icon12').innerHTML = "";
    }

    if(jawab1.value!=0){

      if(jawab1.value==5){
        
        //box warna
        if (jawab1.className.indexOf('boxhijau') == -1) {
          if (jawab1.className.indexOf('boxmerah') == -1) {
            jawab1.className += ' boxhijau';
          } else {
            jawab1.className = jawab1.className.replace('boxmerah', 'boxhijau');
          }
        }

        document.getElementById('icon12').innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
        document.getElementById('lanjut3').className = document.getElementById('lanjut3').className.replace('hilang','');
      } 
      else{

        //box warna
        if (jawab1.className.indexOf('boxmerah') == -1) {
          if (jawab1.className.indexOf('boxhijau') == -1) {
            jawab1.className += ' boxmerah';
          } else {
            jawab1.className = jawab1.className.replace('boxhijau', 'boxmerah');
          }
        }

        document.getElementById('icon12').innerHTML = "<img src='../img/false.png' width='15px'>";

      }

    }
  })

function ya2(){
  var tidak = document.getElementById('tidak2');
  var lanjut = document.getElementById('lanjut4');
  var benar = document.getElementById('bnr2');

  tidak.className += " hilang";
  document.getElementById('icon21').innerHTML = "<img src='../img/true.png' width='15px'>";
  lanjut.className = lanjut.className.replace("hilang","");
  benar.className = benar.className.replace("hilang","");
}

function tidak2(){
  var ya = document.getElementById('ya2');
  var ulang = document.getElementById('ulang2');
  var lanjut = document.getElementById('lanjut4');
  var salah = document.getElementById('slh2');

  ya.className += " hilang";
  ulang.className = ulang.className.replace("hilang","");
  document.getElementById('icon21').innerHTML = "<img src='../img/false.png' width='15px'>";
  lanjut.className = lanjut.className.replace("hilang","");
  salah.className = salah.className.replace("hilang","");
}

function ulang2(){
  var ya = document.getElementById('ya2');
  var ulang = document.getElementById('ulang2');
  var lanjut = document.getElementById('lanjut2');
  var salah = document.getElementById('slh2');

  ya.className = ya.className.replace("hilang","");
  ulang.className += " hilang";
  document.getElementById('icon21').innerHTML = "";
  lanjut.className += " hilang";
  salah.className += " hilang";
}

let jawab2 = document.getElementById('byk2');
  // function agar saat di enter tidak dijalankan 
  jawab2.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      return false;
     }
  });

  jawab2.addEventListener('keyup', function () {
    //jika kotak kosong
    if(jawab2.value.length==0){
      if(jawab2.className.indexOf('boxhijau') == -1){
          jawab2.className = jawab2.className.replace('boxmerah', "");
        }
        if (jawab2.className.indexOf('boxmerah') == -1){
          jawab2.className = jawab2.className.replace('boxhijau', "");
        } 
        document.getElementById('icon22').innerHTML = "";
    }

    if(jawab2.value!=0){

      if(jawab2.value==15){
        
        //box warna
        if (jawab2.className.indexOf('boxhijau') == -1) {
          if (jawab2.className.indexOf('boxmerah') == -1) {
            jawab2.className += ' boxhijau';
          } else {
            jawab2.className = jawab2.className.replace('boxmerah', 'boxhijau');
          }
        }

        document.getElementById('icon22').innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById('lanjut5').className = document.getElementById('lanjut5').className.replace('hilang','');
        document.getElementById('lanjut6').className = document.getElementById('lanjut6').className.replace('hilang','');
      } 
      else{

        //box warna
        if (jawab2.className.indexOf('boxmerah') == -1) {
          if (jawab2.className.indexOf('boxhijau') == -1) {
            jawab2.className += ' boxmerah';
          } else {
            jawab2.className = jawab2.className.replace('boxhijau', 'boxmerah');
          }
        }

        document.getElementById('icon22').innerHTML = "<img src='../img/false.png' width='15px'>";

      }

    }
  })

function ya3(){
  var tidak = document.getElementById('tidak3');
  var ulang = document.getElementById('ulang3');
  var lanjut = document.getElementById('lanjut7');
  var salah = document.getElementById('slh3');

  tidak.className += " hilang";
  ulang.className = ulang.className.replace("hilang","");
  document.getElementById('icon31').innerHTML = "<img src='../img/false.png' width='15px'>";
  lanjut.className = lanjut.className.replace("hilang","");
  salah.className = salah.className.replace("hilang","");
}

function tidak3(){
  var ya = document.getElementById('ya3');
  var benar = document.getElementById('bnr3');

  ya.className += " hilang";
  document.getElementById('icon31').innerHTML = "<img src='../img/true.png' width='15px'>";
  benar.className = benar.className.replace("hilang","");
  for(var i=7; i<=9; i++){
    document.getElementById('lanjut'+i).className = document.getElementById('lanjut'+i).className.replace("hilang","");
  }
}

function ulang3(){
  var tidak = document.getElementById('tidak3');
  var ulang = document.getElementById('ulang3');
  var lanjut = document.getElementById('lanjut7');
  var salah = document.getElementById('slh3');

  tidak.className = tidak.className.replace("hilang","");
  ulang.className += " hilang";
  document.getElementById('icon31').innerHTML = "";
  lanjut.className += " hilang";
  salah.className += " hilang";
}
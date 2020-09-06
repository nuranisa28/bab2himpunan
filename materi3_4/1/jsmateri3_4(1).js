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

function ada1(){
  document.getElementById('tdk1').className += ' hilang';
  document.getElementById('icon1').innerHTML = "<img src='../img/true.png' width='15px'>";
  document.getElementById('bnr1').className = document.getElementById('bnr1').className.replace('hilang','');
}

function tdk1(){
  document.getElementById('ada1').className += ' hilang';
  document.getElementById('icon1').innerHTML = "<img src='../img/false.png' width='15px'>";
  document.getElementById('slh1').className = document.getElementById('slh1').className.replace('hilang','');
  document.getElementById('ulang1').className = document.getElementById('ulang1').className.replace('hilang','');
}

function ulang1(){
  document.getElementById('ada1').className = document.getElementById('ada1').className.replace('hilang','');
  document.getElementById('icon1').innerHTML = "";
  document.getElementById('slh1').className += ' hilang';
  document.getElementById('ulang1').className += ' hilang';
}

//jawaban ke 2
let jawab1 = document.querySelectorAll('.jawab1');
let benar = 0;
let salah = 0;
let jwb = [];
let anggota = [1,2,5];

for(let i=0; i < jawab1.length; i++){
  // function agar saat di enter tidak dijalankan 
    jawab1[i].addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

  jawab1[i].addEventListener('keyup',function(){
    let ada = 0;
    let sudah = 0;
    console.log(jawab1[i].value);

    if(jawab1[i].value.length==0){
      if(jawab1[i].className.indexOf('boxhijau') == -1){
          jawab1[i].className = jawab1[i].className.replace('boxmerah', "");
        }
        if (jawab1[i].className.indexOf('boxmerah') == -1){
          jawab1[i].className = jawab1[i].className.replace('boxhijau', "");
        }
      document.getElementById('icon2').innerHTML = ""; 
    }

    if(jawab1[i].value.length==1){

      //jika yang diisi angka
      var numbers = /^[-+]?[0-9]+$/;
      if(jawab1[i].value.match(numbers)){
        
        if(i==0){

          //cek apakah input ada diarray
          for(var x=0; x<3; x++){
            if(jawab1[0].value==anggota[x]){
              jwb[0] = anggota[x];
              anggota[x]="";
              ada =1;
            }
          }
          console.log(ada);
          if(ada==1){
            if (jawab1[0].className.indexOf('boxhijau') == -1) {
              if (jawab1[0].className.indexOf('boxmerah') == -1) {
                jawab1[0].className += ' boxhijau';
              } else {
                jawab1[0].className = jawab1[0].className.replace('boxmerah', 'boxhijau');
              }
            }
            benar +=1;
          } else {
            if (jawab1[0].className.indexOf('boxmerah') == -1) {
              if (jawab1[0].className.indexOf('boxhijau') == -1) {
                jawab1[0].className += ' boxmerah';
              } else {
                jawab1[0].className = jawab1[0].className.replace('boxhijau', 'boxmerah');
              }
            }
            document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
          }

        }

        if (i==1){

          //cek apakah input ada diarray
          for(var x=0; x<3; x++){
            if(jawab1[1].value==anggota[x]){
              jwb[1] = anggota[x];
              anggota[x]="";
              ada =1;
            }
          }

          if(ada==1){
            if (jawab1[1].className.indexOf('boxhijau') == -1) {
              if (jawab1[1].className.indexOf('boxmerah') == -1) {
                jawab1[1].className += ' boxhijau';
              } else {
                jawab1[1].className = jawab1[1].className.replace('boxmerah', 'boxhijau');
              }
            }
            benar +=1;
          } else {
            if (jawab1[1].className.indexOf('boxmerah') == -1) {
              if (jawab1[1].className.indexOf('boxhijau') == -1) {
                jawab1[1].className += ' boxmerah';
              } else {
                jawab1[1].className = jawab1[1].className.replace('boxhijau', 'boxmerah');
              }
            }
            document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
          }

        }

        if (i==2){

          //cek apakah input ada diarray
          for(var x=0; x<3; x++){
            if(jawab1[2].value==anggota[x]){
              jwb[2] = anggota[x];
              anggota[x]="";
              ada =1;
            }
          }

          if(ada==1){
            if (jawab1[2].className.indexOf('boxhijau') == -1) {
              if (jawab1[2].className.indexOf('boxmerah') == -1) {
                jawab1[2].className += ' boxhijau';
              } else {
                jawab1[2].className = jawab1[2].className.replace('boxmerah', 'boxhijau');
              }
            }
            benar +=1;
          } else {
            if (jawab1[2].className.indexOf('boxmerah') == -1) {
              if (jawab1[2].className.indexOf('boxhijau') == -1) {
                jawab1[2].className += ' boxmerah';
              } else {
                jawab1[2].className = jawab1[2].className.replace('boxhijau', 'boxmerah');
              }
            }
            document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";

          }

        }

        setTimeout(function(){
          if(benar==3){
            document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
            document.getElementById('icon2').innerHTML = "<img src='../img/true.png' width='15px'>";
            document.getElementById('scratch').src = document.getElementById('scratch').src
          }
        }, 1000)
         

      } 
    
    }

  })

}

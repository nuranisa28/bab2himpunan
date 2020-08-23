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

/*jawaban ke 4*/
let jawab1 = document.querySelector('.jawab1');

// function agar saat di enter tidak dijalankan 
jawab1.addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
});

jawab1.addEventListener('keyup', function(){
  
  //jika kotak kosong
  if(jawab1.value.length==0){
    if(jawab1.className.indexOf('boxhijau') == -1){
          jawab1.className = jawab1.className.replace('boxmerah', "");
        }
        if (jawab1.className.indexOf('boxmerah') == -1){
          jawab1.className = jawab1.className.replace('boxhijau', "");
        }
    document.getElementById('icon1').innerHTML = "";
  }

  //jika kotak berisi
  if(jawab1.value.length!=0){

    let benar = ["merah","putih"];
    var x = jawab1.value;
    x = x.replace(/\s+/g, '');
    var jawaban = x.split(",");

    var a = 0;
    for (var i =0; i<2; i++){
      for(var j=0; j<jawaban.length; j++){
        if(benar[i]==jawaban[j]){
          a+=1;
        }
      }
    }
    console.log(jawaban);


    if(a==2){
      setTimeout(function(){
        //box warna
        if (jawab1.className.indexOf('boxhijau') == -1) {
          if (jawab1.className.indexOf('boxmerah') == -1) {
            jawab1.className += ' boxhijau';
          } else {
            jawab1.className = jawab1.className.replace('boxmerah', 'boxhijau');
          }
        }
        document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
        document.getElementById('icon1').innerHTML = "<img src='../img/true.png' width='15px'>";
      }, 500)
    } else{
      setTimeout(function(){
        //box warna
        if (jawab1.className.indexOf('boxmerah') == -1) {
          if (jawab1.className.indexOf('boxhijau') == -1) {
            jawab1.className += ' boxmerah';
          } else {
            jawab1.className = jawab1.className.replace('boxhijau', 'boxmerah');
          }
        }
        document.getElementById('icon1').innerHTML = "<img src='../img/false.png' width='15px'>";
      }, 1000)
      
    }

  }


})

//jawaban ke 2
let jawabb2 = document.querySelector('.jawab2');

// function agar saat di enter tidak dijalankan 
    jawabb2.addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    jawabb2.addEventListener('keyup',function(){

      if(jawabb2.value.length==0){
        if(jawabb2.className.indexOf('boxhijau') == -1){
            jawabb2.className = jawabb2.className.replace('boxmerah', "");
          }
          if (jawabb2.className.indexOf('boxmerah') == -1){
            jawabb2.className = jawabb2.className.replace('boxhijau', "");
          } 
          document.getElementById('icon2').innerHTML = "";
      }

      if(jawabb2.value.length==1){

        if(jawabb2.value == 2){
          setTimeout(function(){
            if (jawabb2.className.indexOf('boxhijau') == -1) {
              if (jawabb2.className.indexOf('boxmerah') == -1) {
                jawabb2.className += ' boxhijau';
              } else {
                jawabb2.className = jawabb2.className.replace('boxmerah', 'boxhijau');
              }
            }
            document.getElementById('icon2').innerHTML = "<img src='../img/true.png' width='15px'>";
            document.getElementById('lanjutt2').className = document.getElementById('lanjutt2').className.replace('hilang','');
          }, 1000)
          
        } else{
          setTimeout(function(){
            if (jawabb2.className.indexOf('boxmerah') == -1) {
              if (jawabb2.className.indexOf('boxhijau') == -1) {
                jawabb2.className += ' boxmerah';
              } else {
                jawabb2.className = jawabb2.className.replace('boxhijau', 'boxmerah');
              }
            }
            document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
          }, 1000)
          
        }

      }

    })

//jawaban ke 3
let jawab2 = document.querySelectorAll('.jawab3');
let benar = 0;
let jwb = [];
let anggota = ["merah","putih"];

for(let i=0; i < jawab2.length; i++){
  // function agar saat di enter tidak dijalankan 
    jawab2[i].addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

  jawab2[i].addEventListener('keyup',function(){
    let ada = 0;
    let sudah = 0;
    console.log(jawab2[i].value);
    jawab2[i].value = jawab2[i].value.replace(/\s+/g, '');

    if(jawab2[i].value.length==0){
      if(jawab2[i].className.indexOf('boxhijau') == -1){
          jawab2[i].className = jawab2[i].className.replace('boxmerah', "");
        }
        if (jawab2[i].className.indexOf('boxmerah') == -1){
          jawab2[i].className = jawab2[i].className.replace('boxhijau', "");
        } 
        document.getElementById('ket2').innerHTML = "";
    }

    if(jawab2[i].value.length==5){

      //jika yang diisi angka
      var alpha = /^[a-zA-Z]+$/;
      if(jawab2[i].value.match(alpha)){
        
        if(i==0){

          //cek apakah input ada diarray
          for(var x=0; x<2; x++){
            if(jawab2[0].value==anggota[x]){
              jwb[0] = anggota[x];
              anggota[x]="";
              ada =1;
            }
          }

          if(ada==1){
            if (jawab2[0].className.indexOf('boxhijau') == -1) {
              if (jawab2[0].className.indexOf('boxmerah') == -1) {
                jawab2[0].className += ' boxhijau';
              } else {
                jawab2[0].className = jawab2[0].className.replace('boxmerah', 'boxhijau');
              }
            }
            benar +=1;
          } else {
            if (jawab2[0].className.indexOf('boxmerah') == -1) {
              if (jawab2[0].className.indexOf('boxhijau') == -1) {
                jawab2[0].className += ' boxmerah';
              } else {
                jawab2[0].className = jawab2[0].className.replace('boxhijau', 'boxmerah');
              }
            }
          }

        }

        if (i==1){

          //cek apakah input ada diarray
          for(var x=0; x<2; x++){
            if(jawab2[1].value==anggota[x]){
              jwb[1] = anggota[x];
              anggota[x]="";
              ada =1;
            }
          }

          if(ada==1){
            if (jawab2[1].className.indexOf('boxhijau') == -1) {
              if (jawab2[1].className.indexOf('boxmerah') == -1) {
                jawab2[1].className += ' boxhijau';
              } else {
                jawab2[1].className = jawab2[1].className.replace('boxmerah', 'boxhijau');
              }
            }
            benar +=1;
          } else {
            if (jawab2[1].className.indexOf('boxmerah') == -1) {
              if (jawab2[1].className.indexOf('boxhijau') == -1) {
                jawab2[1].className += ' boxmerah';
              } else {
                jawab2[1].className = jawab2[1].className.replace('boxhijau', 'boxmerah');
              }
            }
          }

        }

        if(benar==2){
          document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
        } 

      } 
    
    }

  })

}

/*jawaban ke 4*/
let jawab4 = document.querySelector('.jawab4');

// function agar saat di enter tidak dijalankan 
jawab4.addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
});

jawab4.addEventListener('keyup', function(){
  
  //jika kotak kosong
  if(jawab4.value.length==0){
    if(jawab4.className.indexOf('boxhijau') == -1){
          jawab4.className = jawab4.className.replace('boxmerah', "");
        }
        if (jawab4.className.indexOf('boxmerah') == -1){
          jawab4.className = jawab4.className.replace('boxhijau', "");
        }
  }

  //jika kotak berisi
  if(jawab4.value.length!=0){

    let benar = ["merah","putih"];
    var x = jawab4.value;
    x = x.replace(/\s+/g, '');
    var jawaban = x.split(",");

    var a = 0;
    for (var i =0; i<2; i++){
      for(var j=0; j<jawaban.length; j++){
        if(benar[i]==jawaban[j]){
          a+=1;
        }
      }
    }
    console.log(jawaban);


    if(a==2){
      setTimeout(function(){
        //box warna
        if (jawab4.className.indexOf('boxhijau') == -1) {
          if (jawab4.className.indexOf('boxmerah') == -1) {
            jawab4.className += ' boxhijau';
          } else {
            jawab4.className = jawab4.className.replace('boxmerah', 'boxhijau');
          }
        }
        document.getElementById('lanjut3').className = document.getElementById('lanjut3').className.replace('hilang','');
        document.getElementById('lanjut4').className = document.getElementById('lanjut4').className.replace('hilang','');
        document.getElementById('icon3').innerHTML = "<img src='../img/true.png' width='15px'>";
      }, 1000)
    } else{
      setTimeout(function(){
        //box warna
        if (jawab4.className.indexOf('boxmerah') == -1) {
          if (jawab4.className.indexOf('boxhijau') == -1) {
            jawab4.className += ' boxmerah';
          } else {
            jawab4.className = jawab4.className.replace('boxhijau', 'boxmerah');
          }
        }
      }, 1000)
      
    }

  }


})



function ubah1(){
  for(var i=1; i<=2; i++){
    document.getElementById('ubah'+i).className += " boxbiru";
  }
}

function jawab5(){
  let jawab5 = document.querySelector('.jawab5');
  let jawaban5 = ["merah","putih"];
  let kura = /{/g;
  let kurb = /}/g;
  let ada = 0;

  var y = jawab5.value.toLowerCase();
    y = y.replace(/\s+/g, '');
    y = y.replace(kura, '');
    y = y.replace(kurb,'');
    y = y.split(",");
  console.log(y);

  for(var i=0; i<4; i++){
        for(var j=0; j<2; j++){
          if(jawaban5[j]==y[i]){
            ada+=1;
            
          }
        }
      }

  if(ada==4){
    document.getElementById('icon4').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('lanjut5').className = document.getElementById('lanjut5').className.replace('hilang','');
    for(var i=1; i<=2; i++){
      document.getElementById('ubah'+i).className = document.getElementById('ubah'+i).className.replace('boxbiru','');
    }
  } else{
    document.getElementById('icon4').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('ulang5').className = document.getElementById('ulang5').className.replace('hilang','');
  }
}

function ulang5(){
  let jawab5 = document.querySelector('.jawab5');

  jawab5.value = "";
  document.getElementById('icon4').innerHTML = "";
    document.getElementById('ulang5').className += " hilang";
    for(var i=1; i<=2; i++){
      document.getElementById('ubah'+i).className = document.getElementById('ubah'+i).className.replace('boxbiru','');
    }
}

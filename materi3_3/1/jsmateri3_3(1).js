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

//jawaban ke 2
let jawab2 = document.querySelectorAll('.jawab2');
let benar = 0;
let jwb = [];
let anggota = [5,6];

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
    }

    if(jawab2[i].value.length==1){

      //jika yang diisi angka
      var numbers = /^[-+]?[0-9]+$/;
      if(jawab2[i].value.match(numbers)){
        
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

        

        

        // for(var j =0; j<2; j++){
        //     if(jawab2[i].value==jwb[j]){
        //       sudah = 1;
        //     }
        //   }

        // if(sudah==1){
        //   if (jawab2[i].className.indexOf('boxmerah') == -1) {
        //     if (jawab2[i].className.indexOf('boxhijau') == -1) {
        //       jawab2[i].className += ' boxmerah';
        //     } else {
        //       jawab2[i].className = jawab2[i].className.replace('boxhijau', 'boxmerah');
        //     }
        //   }
        // }

        if(benar==2){
          document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
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

    let benar = [5,6];
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
    //jika yang diisi ada huruf maka salah
    var alpha = /^[a-zA-Z]+$/;
    if(jawab4.value.match(alpha)){
      //box warna
        if (jawab4.className.indexOf('boxmerah') == -1) {
          if (jawab4.className.indexOf('boxhijau') == -1) {
            jawab4.className += ' boxmerah';
          } else {
            jawab4.className = jawab4.className.replace('boxhijau', 'boxmerah');
          }
        }
    }

    if(a==2){
      //box warna
        if (jawab4.className.indexOf('boxhijau') == -1) {
          if (jawab4.className.indexOf('boxmerah') == -1) {
            jawab4.className += ' boxhijau';
          } else {
            jawab4.className = jawab4.className.replace('boxmerah', 'boxhijau');
          }
        }
      document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
      document.getElementById('lanjut3').className = document.getElementById('lanjut3').className.replace('hilang','');
    } else{
      //box warna
        if (jawab4.className.indexOf('boxmerah') == -1) {
          if (jawab4.className.indexOf('boxhijau') == -1) {
            jawab4.className += ' boxmerah';
          } else {
            jawab4.className = jawaban[i].className.replace('boxhijau', 'boxmerah');
          }
        }
    }

  }


})
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

function info() {
    var popup = document.getElementById("info");
    popup.classList.toggle("show");
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
  document.getElementById('tdk1').className += " hilang";
  document.getElementById('icon1').innerHTML = "<img src='../img/true.png' width='15px'>";
  document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
  document.getElementById('bnr1').className = document.getElementById('bnr1').className.replace('hilang','');
}

function tdk1(){
  document.getElementById('ada1').className += " hilang";
  document.getElementById('icon1').innerHTML = "<img src='../img/false.png' width='15px'>";
  document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
  document.getElementById('slh1').className = document.getElementById('slh1').className.replace('hilang','');
}

let input1 = document.querySelectorAll('.input1');
let benar1 = 0;
let salah1 = 0;
let jwb1 = [];
let anggota1 = [3,5];

for(let i=0; i < input1.length; i++){
  // function agar saat di enter tidak dijalankan 
    input1[i].addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

  input1[i].addEventListener('keyup',function(){
    let ada = 0;
    let sudah = 0;
    console.log(input1[i].value);

    if(input1[i].value.length==0){
      if(input1[i].className.indexOf('boxhijau') == -1){
          input1[i].className = input1[i].className.replace('boxmerah', "");
        }
        if (input1[i].className.indexOf('boxmerah') == -1){
          input1[i].className = input1[i].className.replace('boxhijau', "");
        }
      document.getElementById('icon2').innerHTML = ""; 
    }

    if(input1[i].value.length==1){

      //jika yang diisi angka
      var numbers = /^[-+]?[0-9]+$/;
      if(input1[i].value.match(numbers)){
        
        if(i==0){

          //cek apakah input ada diarray
          for(var x=0; x<2; x++){
            if(input1[0].value==anggota1[x]){
              jwb1[0] = anggota1[x];
              anggota1[x]="";
              ada =1;
            }
          }

          if(ada==1){
            if (input1[0].className.indexOf('boxhijau') == -1) {
              if (input1[0].className.indexOf('boxmerah') == -1) {
                input1[0].className += ' boxhijau';
              } else {
                input1[0].className = input1[0].className.replace('boxmerah', 'boxhijau');
              }
            }
            benar1 +=1;
          } else {
            if (input1[0].className.indexOf('boxmerah') == -1) {
              if (input1[0].className.indexOf('boxhijau') == -1) {
                input1[0].className += ' boxmerah';
              } else {
                input1[0].className = input1[0].className.replace('boxhijau', 'boxmerah');
              }
            }
            document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
          }

        }

        if (i==1){

          //cek apakah input ada diarray
          for(var x=0; x<2; x++){
            if(input1[1].value==anggota1[x]){
              jwb1[1] = anggota1[x];
              anggota1[x]="";
              ada =1;
            }
          }

          if(ada==1){
            if (input1[1].className.indexOf('boxhijau') == -1) {
              if (input1[1].className.indexOf('boxmerah') == -1) {
                input1[1].className += ' boxhijau';
              } else {
                input1[1].className = input1[1].className.replace('boxmerah', 'boxhijau');
              }
            }
            benar1 +=1;
          } else {
            if (input1[1].className.indexOf('boxmerah') == -1) {
              if (input1[1].className.indexOf('boxhijau') == -1) {
                input1[1].className += ' boxmerah';
              } else {
                input1[1].className = input1[1].className.replace('boxhijau', 'boxmerah');
              }
            }
            document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
          }

        }

        setTimeout(function(){
          if(benar1==2){
            document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
            document.getElementById('icon2').innerHTML = "<img src='../img/true.png' width='15px'>";
            document.getElementById('lanjut3').className = document.getElementById('lanjut3').className.replace('hilang','');
          }
        }, 1000)
         

      } 
    
    }

  })

}

let input2 = document.querySelectorAll('.input2');
let benar2 = 0;
let salah2 = 0;
let jwb2 = [];
let anggota2 = [1,7];

for(let i=0; i < input2.length; i++){
  // function agar saat di enter tidak dijalankan 
    input2[i].addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

  input2[i].addEventListener('keyup',function(){
    let ada = 0;
    let sudah = 0;
    console.log(input2[i].value);

    if(input2[i].value.length==0){
      if(input2[i].className.indexOf('boxhijau') == -1){
          input2[i].className = input2[i].className.replace('boxmerah', "");
        }
        if (input2[i].className.indexOf('boxmerah') == -1){
          input2[i].className = input2[i].className.replace('boxhijau', "");
        }
      document.getElementById('icon3').innerHTML = ""; 
    }

    if(input2[i].value.length==1){

      //jika yang diisi angka
      var numbers = /^[-+]?[0-9]+$/;
      if(input2[i].value.match(numbers)){
        
        if(i==0){

          //cek apakah input ada diarray
          for(var x=0; x<2; x++){
            if(input2[0].value==anggota2[x]){
              jwb2[0] = anggota2[x];
              anggota2[x]="";
              ada =1;
            }
          }

          if(ada==1){
            if (input2[0].className.indexOf('boxhijau') == -1) {
              if (input2[0].className.indexOf('boxmerah') == -1) {
                input2[0].className += ' boxhijau';
              } else {
                input2[0].className = input2[0].className.replace('boxmerah', 'boxhijau');
              }
            }
            benar2 +=1;
          } else {
            if (input2[0].className.indexOf('boxmerah') == -1) {
              if (input2[0].className.indexOf('boxhijau') == -1) {
                input2[0].className += ' boxmerah';
              } else {
                input2[0].className = input2[0].className.replace('boxhijau', 'boxmerah');
              }
            }
            document.getElementById('icon3').innerHTML = "<img src='../img/false.png' width='15px'>";
          }

        }

        if (i==1){

          //cek apakah input ada diarray
          for(var x=0; x<2; x++){
            if(input2[1].value==anggota2[x]){
              jwb2[1] = anggota2[x];
              anggota2[x]="";
              ada =1;
            }
          }

          if(ada==1){
            if (input2[1].className.indexOf('boxhijau') == -1) {
              if (input2[1].className.indexOf('boxmerah') == -1) {
                input2[1].className += ' boxhijau';
              } else {
                input2[1].className = input2[1].className.replace('boxmerah', 'boxhijau');
              }
            }
            benar2 +=1;
          } else {
            if (input2[1].className.indexOf('boxmerah') == -1) {
              if (input2[1].className.indexOf('boxhijau') == -1) {
                input2[1].className += ' boxmerah';
              } else {
                input2[1].className = input2[1].className.replace('boxhijau', 'boxmerah');
              }
            }
            document.getElementById('icon3').innerHTML = "<img src='../img/false.png' width='15px'>";
          }

        }

        setTimeout(function(){
          if(benar2==2){
            document.getElementById('lanjut4').className = document.getElementById('lanjut4').className.replace('hilang','');
            document.getElementById('icon3').innerHTML = "<img src='../img/true.png' width='15px'>";
            document.getElementById('lanjut5').className = document.getElementById('lanjut5').className.replace('hilang','');
          }
        }, 1000)
         

      } 
    
    }

  })

}

let input3 = document.querySelectorAll('.input3');
let benar = 0;
let salah = 0;
let jwb = [];
let anggota = [4,6];

for(let i=0; i < input3.length; i++){
  // function agar saat di enter tidak dijalankan 
    input3[i].addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

  input3[i].addEventListener('keyup',function(){
    let ada = 0;
    let sudah = 0;
    console.log(input3[i].value);

    if(input3[i].value.length==0){
      if(input3[i].className.indexOf('boxhijau') == -1){
          input3[i].className = input3[i].className.replace('boxmerah', "");
        }
        if (input3[i].className.indexOf('boxmerah') == -1){
          input3[i].className = input3[i].className.replace('boxhijau', "");
        }
      document.getElementById('icon4').innerHTML = ""; 
    }

    if(input3[i].value.length==1){

      //jika yang diisi angka
      var numbers = /^[-+]?[0-9]+$/;
      if(input3[i].value.match(numbers)){
        
        if(i==0){

          //cek apakah input ada diarray
          for(var x=0; x<2; x++){
            if(input3[0].value==anggota[x]){
              jwb[0] = anggota[x];
              anggota[x]="";
              ada =1;
            }
          }

          if(ada==1){
            if (input3[0].className.indexOf('boxhijau') == -1) {
              if (input3[0].className.indexOf('boxmerah') == -1) {
                input3[0].className += ' boxhijau';
              } else {
                input3[0].className = input3[0].className.replace('boxmerah', 'boxhijau');
              }
            }
            benar +=1;
          } else {
            if (input3[0].className.indexOf('boxmerah') == -1) {
              if (input3[0].className.indexOf('boxhijau') == -1) {
                input3[0].className += ' boxmerah';
              } else {
                input3[0].className = input3[0].className.replace('boxhijau', 'boxmerah');
              }
            }
            document.getElementById('icon4').innerHTML = "<img src='../img/false.png' width='15px'>";
          }

        }

        if (i==1){

          //cek apakah input ada diarray
          for(var x=0; x<2; x++){
            if(input3[1].value==anggota[x]){
              jwb[1] = anggota[x];
              anggota[x]="";
              ada =1;
            }
          }

          if(ada==1){
            if (input3[1].className.indexOf('boxhijau') == -1) {
              if (input3[1].className.indexOf('boxmerah') == -1) {
                input3[1].className += ' boxhijau';
              } else {
                input3[1].className = input3[1].className.replace('boxmerah', 'boxhijau');
              }
            }
            benar +=1;
          } else {
            if (input3[1].className.indexOf('boxmerah') == -1) {
              if (input3[1].className.indexOf('boxhijau') == -1) {
                input3[1].className += ' boxmerah';
              } else {
                input3[1].className = input3[1].className.replace('boxhijau', 'boxmerah');
              }
            }
            document.getElementById('icon4').innerHTML = "<img src='../img/false.png' width='15px'>";
          }

        }

        setTimeout(function(){
          if(benar==2){
            document.getElementById('lanjut6').className = document.getElementById('lanjut6').className.replace('hilang','');
            document.getElementById('icon4').innerHTML = "<img src='../img/true.png' width='15px'>";
            document.getElementById('lanjut7').className = document.getElementById('lanjut7').className.replace('hilang','');
          }
        }, 1000)
         

      } 
    
    }

  })

}



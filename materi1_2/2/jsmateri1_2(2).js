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

let jawaban = document.querySelectorAll('.jawab');
let benar = 0;
let salah = 0;
let jwb = [];
let anggota = ["b","a","n","j","r","m","s","i"];

for(let i=0; i < jawaban.length; i++){
  // function agar saat di enter tidak dijalankan 
    jawaban[i].addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

  jawaban[i].addEventListener('keyup', function () {
    let ada = 0;
    let sudah = 0;
    jawaban[i].value = jawaban[i].value.toLowerCase();

    if(jawaban[i].value.length==0){
        if(jawaban[i].className.indexOf('boxhijau') == -1){
          jawaban[i].className = jawaban[i].className.replace('boxmerah', "");
        }
        if (jawaban[i].className.indexOf('boxmerah') == -1){
          jawaban[i].className = jawaban[i].className.replace('boxhijau', "");
        } 
        document.getElementById('ket').innerHTML = "";
    }

    if(jawaban[i].value.length==1){
      //cek apakah yang dimasukkan huruf?
      var alpha = /^[a-zA-Z]+$/;
      if(jawaban[i].value.match(alpha)){

        //cek apakah input ada di array
        for(var x=0; x<8; x++){
          if(jawaban[i].value==anggota[x]){
            jwb[i] = anggota[x];
            anggota[x]="";            
            ada = 1;
            console.log(ada);
          }
        }

        if(ada==1){
          jawaban[i].className += ' boxhijau';
          benar+=1;
        }
        else{
          for(var j=0; j<8; j++){
            if(jawaban[i].value==jwb[j]){
              sudah =1;
            }
          }

          if(sudah==1){
            jawaban[i].className += ' boxmerah';
            document.getElementById('ket').innerHTML = "Huruf " + jawaban[i].value + " sudah kamu input. <b>Silahkan input huruf yang lain.</b>";
          } else{
            jawaban[i].className += ' boxmerah';
            document.getElementById('ket').innerHTML = jawaban[i].value + " bukan huruf pembangun kata Banjarmasin. <b>Silahkan ulangi jawaban.</b>";
          }
        }

        if(benar==8){
          document.getElementById('ket').innerHTML = "<b>Jawaban Kamu Benar</b>";
          document.getElementById('ket').style.color = "green";
          document.getElementById('bahas').className = document.getElementById('bahas').className.replace('hilang','');
        }

      }

      //cek apakah yang dimasukkan adalah angka?
      var numbers = /^[-+]?[0-9]+$/;
      if(jawaban[i].value.match(numbers)){

        //box warna
            jawaban[i].className += ' boxmerah';
            salah+=1;
        document.getElementById('ket').innerHTML = "Jawaban berupa huruf, bukan angka. <b>Silahkan ulangi jawaban.</b>"

      }
    }
  });
}

// if (jawaban[i].className.indexOf('boxhijau') == -1) {
        //       if (jawaban[i].className.indexOf('boxmerah') == -1) {
        //         jawaban[i].className += ' boxhijau';
        //         benar+=1;
        //       } else {
        //         jawaban[i].className = jawaban[i].className.replace('boxmerah', 'boxhijau');
        //         benar+=1;
        //       }
        //     }


        //   //box warna
        //   if (jawaban[i].className.indexOf('boxmerah') == -1) {
        //     if (jawaban[i].className.indexOf('boxhijau') == -1) {
        //       jawaban[i].className += ' boxmerah';
        //       salah+=1;
        //     } else {
        //       jawaban[i].className = jawaban[i].className.replace('boxhijau', 'boxmerah');
        //       salah+=1;
        //     }
        //   }
        //   document.getElementById('ket').innerHTML = jawaban[i].value + " bukan huruf pembangun kata Banjarmasin. <b>Silahkan ulangi jawaban.</b>";
        

        

      

      
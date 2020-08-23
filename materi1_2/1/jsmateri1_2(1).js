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
let ket = document.querySelectorAll('.ket');

for(let i=0; i < jawaban.length; i++){
  // function agar saat di enter tidak dijalankan 
    jawaban[i].addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

  jawaban[i].addEventListener('keyup', function () {
    if(jawaban[i].value.length==0){
        if(jawaban[i].className.indexOf('boxhijau') == -1){
          jawaban[i].className = jawaban[i].className.replace('boxmerah', "");
        }
        if (jawaban[i].className.indexOf('boxmerah') == -1){
          jawaban[i].className = jawaban[i].className.replace('boxhijau', "");
        } 
        document.getElementById('icon'+i).innerHTML = "";
        if(ket[i].className.indexOf('hilang') == -1){
          if(ket[i].className.indexOf('tampil') == -1){
            ket[i].className += " hilang";
          } else {
          ket[i].className = ket[i].className.replace("","hilang");
          }
        }
        document.getElementById('keter'+i).innerHTML = "";
    }

    if(jawaban[i].value.length!=0){
      //cek apakah yang dimasukkan huruf kapital?
      var capital = /^[A-Z]/;
      if(jawaban[i].value.match(capital)){

        //box warna
        if (jawaban[i].className.indexOf('boxhijau') == -1) {
          if (jawaban[i].className.indexOf('boxmerah') == -1) {
            jawaban[i].className += ' boxhijau';
          } else {
            jawaban[i].className = jawaban[i].className.replace('boxmerah', 'boxhijau');
          }
        }

        //yang muncul jika benar
        document.getElementById('icon'+i).innerHTML = "<img src='../img/true.png' width='15px'>";
        ket[i].className = ket[i].className.replace('hilang','');
        
        //isi keterangan
        if(i==0){
          document.getElementById('keter'+i).innerHTML = jawaban[i].value + " adalah himpunan varian rasa wadai bikang";
          document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');  
        }
        if(i==1){
          document.getElementById('keter'+i).innerHTML = jawaban[i].value + " adalah himpunan motif kain sasirangan";
          document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
        }
        if(i==2){
          document.getElementById('keter'+i).innerHTML = jawaban[i].value + " adalah himpunan seniman Kalimantan Selatan";
          document.getElementById('catat').className = document.getElementById('catat').className.replace('hilang','');
        }

      }

      //cek apakah yang dimasukkan huruf kecil?
      var low = /^[a-z]/;
      if(jawaban[i].value.match(low)){

        //box warna
        if (jawaban[i].className.indexOf('boxmerah') == -1) {
          if (jawaban[i].className.indexOf('boxhijau') == -1) {
            jawaban[i].className += ' boxmerah';
          } else {
            jawaban[i].className = jawaban[i].className.replace('boxhijau', 'boxmerah');
          }
        }

        //yang muncul
        document.getElementById('icon'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
        ket[i].className = ket[i].className.replace('hilang','');
        document.getElementById('keter'+i).innerHTML = "Himpunan dinotasikan dengan <b>huruf kapital</b>, bukan huruf kecil.<br><b>Silahkan ulangi jawaban.</b>";
      }

      //cek apakah yang dimasukkan adalah angka?
      var numbers = /^[-+]?[0-9]+$/;
      if(jawaban[i].value.match(numbers)){

        //box warna
        if (jawaban[i].className.indexOf('boxmerah') == -1) {
          if (jawaban[i].className.indexOf('boxhijau') == -1) {
            jawaban[i].className += ' boxmerah';
          } else {
            jawaban[i].className = jawaban[i].className.replace('boxhijau', 'boxmerah');
          }
        }

        //yang muncul
        document.getElementById('icon'+i).innerHTML = "<img src='../img/false.png' width='15px'>";
        ket[i].className = ket[i].className.replace('hilang','');
        document.getElementById('keter'+i).innerHTML = "Himpunan dinotasikan dengan <b>huruf kapital</b>, bukan dengan angka.<br><b>Silahkan ulangi jawaban.</b>";
      }
    }
  });

}
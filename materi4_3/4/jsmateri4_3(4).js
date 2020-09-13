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

function tjk2(tjk2) {
  var x = document.getElementById(tjk2);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}

function tjk3(tjk3) {
  var x = document.getElementById(tjk3);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
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

function cek1(){
  var ang = document.getElementById('jwb1');
  var anggota = [1, 3, 5, 7];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value;
    ang2 = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<ang2.length; k++){
        if(anggota[j]==ang2[k]){
          ada+=1;
          anggota[j]="";
        }
      }
    }

    if(ada==4){
      document.getElementById('icon1').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek1').className += " hilang";
      document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
      document.getElementById('ket1').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. A &minus; B = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon1').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang1').className = document.getElementById('ulang1').className.replace('hilang','');
      document.getElementById('ket1').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang1(){
  document.getElementById('jwb1').value= "";
  document.getElementById('jwb1').className = document.getElementById('jwb1').className.replace('boxmerah', "");
  document.getElementById('icon1').innerHTML = "";
  document.getElementById('ulang1').className += ' hilang';
  document.getElementById('ket11').innerHTML = "";
}

function cek2(){
  var ang = document.getElementById('jwb2');
  var anggota = [2, 4, 6, 8];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value;
    ang2 = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<ang2.length; k++){
        if(anggota[j]==ang2[k]){
          ada+=1;
          anggota[j]="";
        }
      }
    }

    if(ada==4){
      document.getElementById('icon2').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek2').className += " hilang";
      document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
      document.getElementById('ket2').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. A &minus; C = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang2').className = document.getElementById('ulang2').className.replace('hilang','');
      document.getElementById('ket2').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang2(){
  document.getElementById('jwb2').value= "";
  document.getElementById('jwb2').className = document.getElementById('jwb2').className.replace('boxmerah', "");
  document.getElementById('icon2').innerHTML = "";
  document.getElementById('ulang2').className += ' hilang';
  document.getElementById('ket2').innerHTML = "";
}

function cek3(){
  var ang = document.getElementById('jwb3');
  var anggota = [1, 4, 6, 8];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value;
    ang2 = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<ang2.length; k++){
        if(anggota[j]==ang2[k]){
          ada+=1;
          anggota[j]="";
        }
      }
    }

    if(ada==4){
      document.getElementById('icon3').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek3').className += " hilang";
      document.getElementById('lanjut3').className = document.getElementById('lanjut3').className.replace('hilang','');
      document.getElementById('ket3').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. A &minus; D = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon3').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang3').className = document.getElementById('ulang3').className.replace('hilang','');
      document.getElementById('ket3').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang3(){
  document.getElementById('jwb3').value= "";
  document.getElementById('jwb3').className = document.getElementById('jwb3').className.replace('boxmerah', "");
  document.getElementById('icon3').innerHTML = "";
  document.getElementById('ulang3').className += ' hilang';
  document.getElementById('ket3').innerHTML = "";
}

function cek4(){
  var ang = document.getElementById('jwb4');

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    if(ang.value==1){
      document.getElementById('icon4').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek4').className += " hilang";
      document.getElementById('lanjut4').className = document.getElementById('lanjut4').className.replace('hilang','');
      document.getElementById('ket4').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. C &minus; D = {" + ang.value + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon4').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang4').className = document.getElementById('ulang4').className.replace('hilang','');
      document.getElementById('ket4').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang4(){
  document.getElementById('jwb4').value= "";
  document.getElementById('jwb4').className = document.getElementById('jwb4').className.replace('boxmerah', "");
  document.getElementById('icon4').innerHTML = "";
  document.getElementById('ulang4').className += ' hilang';
  document.getElementById('ket4').innerHTML = "";
}

function cek5(){
  var ang = document.getElementById('jwb5');
  var anggota = [4, 6, 8];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value;
    ang2 = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<ang2.length; k++){
        if(anggota[j]==ang2[k]){
          ada+=1;
          anggota[j]="";
        }
      }
    }

    if(ada==3){
      document.getElementById('icon5').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek5').className += " hilang";
      document.getElementById('lanjut5').className = document.getElementById('lanjut5').className.replace('hilang','');
      document.getElementById('ket5').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. C &minus; D = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon5').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang5').className = document.getElementById('ulang5').className.replace('hilang','');
      document.getElementById('ket5').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang5(){
  document.getElementById('jwb5').value= "";
  document.getElementById('jwb5').className = document.getElementById('jwb5').className.replace('boxmerah', "");
  document.getElementById('icon5').innerHTML = "";
  document.getElementById('ulang5').className += ' hilang';
  document.getElementById('ket5').innerHTML = "";
}


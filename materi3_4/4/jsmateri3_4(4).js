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

/*buka soal*/
function bukaSoal(evt, nmrSoal) {
  var i, soal, nomorsoal;
  //isi soal
  soal = document.getElementsByClassName("soal");
  for (i = 0; i < soal.length; i++) {
    soal[i].style.display = "none";
  }
  //nomor soal
  nomorsoal = document.getElementsByClassName("nomorsoal");
  for (i = 0; i < nomorsoal.length; i++) {
    nomorsoal[i].className = nomorsoal[i].className.replace(" nmrAktif", "");
  }
  document.getElementById(nmrSoal).style.display = "block";
  evt.currentTarget.className += " nmrAktif";
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

//tanya 1 soal1
function cek1(){
  var benar = 0;
  var anggota = [23, 25, 29, 31, 35, 37];
  var ada = 0;
  var himp = document.getElementById('jawab1');
  var komp = document.getElementById('jawab2');
  var ang = document.getElementById('jawab3');
  

  if(himp.value=="A"){
    benar+=1;
    himp.className += " boxhijau";
  } else{
    himp.className += " boxmerah";
  }
  console.log(benar);

  if(komp.value=="c" || komp.value=="'"){
    benar+=1;
    komp.className += ' boxhijau';
  } else{
    komp.className += ' boxmerah';
  }
  console.log(benar);

  var ang2= ang.value;
  var angg = ang2.split(",");
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<angg.length; k++){
      if(anggota[j]==angg[k]){
        ada+=1;
      }
    }
  }
  if(ada==6){
    benar+=1;
    ang.className += " boxhijau";
  } else{
    ang.className += " boxmerah";
  }
  console.log(benar);

  if(benar==3){
    document.getElementById('icon1').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('ket1').innerHTML = "<b>Jawaban kamu benar<b>";
    document.getElementById('ket1').style.color = "green";
  } else{
    document.getElementById('icon1').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('ket1').innerHTML = "<b>Jawaban kamu salah<b>";
    document.getElementById('ket1').style.color = "red";
    document.getElementById('ulang1').className = document.getElementById('ulang1').className.replace('hilang','');
  }

}
function ulang1(){
  for(var i=1; i<=3; i++){
    document.getElementById('jawab'+i).value ="";
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah','');
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxhijau','');
  }
  document.getElementById('icon1').innerHTML = "";
  document.getElementById('ket1').innerHTML= "";
  document.getElementById('ulang1').className += " hilang";
}


//tanya 1 soal 2
function cek2(){
  var benar = 0;
  var anggota = [1, 3, 5, 7, 9];
  var ada = 0;
  var himp = document.getElementById('jawab4');
  var komp = document.getElementById('jawab5');
  var ang = document.getElementById('jawab6');
  

  if(himp.value=="B"){
    benar+=1;
    himp.className += " boxhijau";
  } else{
    himp.className += " boxmerah";
  }
  console.log(benar);

  if(komp.value=="c" || komp.value=="'"){
    benar+=1;
    komp.className += ' boxhijau';
  } else{
    komp.className += ' boxmerah';
  }
  console.log(benar);

  var ang2= ang.value;
  var angg = ang2.split(",");
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<angg.length; k++){
      if(anggota[j]==angg[k]){
        ada+=1;
      }
    }
  }
  if(ada==5){
    benar+=1;
    ang.className += " boxhijau";
  } else{
    ang.className += " boxmerah";
  }
  console.log(benar);

  if(benar==3){
    document.getElementById('icon2').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('ket2').innerHTML = "<b>Jawaban kamu benar<b>";
    document.getElementById('ket2').style.color = "green";
  } else{
    document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('ket2').innerHTML = "<b>Jawaban kamu salah<b>";
    document.getElementById('ket2').style.color = "red";
    document.getElementById('ulang2').className = document.getElementById('ulang2').className.replace('hilang','');
  }

}
function ulang2(){
  for(var i=4; i<=6; i++){
    document.getElementById('jawab'+i).value ="";
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah','');
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxhijau','');
  }
  document.getElementById('icon2').innerHTML = "";
  document.getElementById('ket2').innerHTML= "";
  document.getElementById('ulang2').className += " hilang";
}

//tanya1 soal 3
function cek3(){
  var benar = 0;
  var anggota = ["h", "m", "p", "n"];
  var ada = 0;
  var himp = document.getElementById('jawab7');
  var komp = document.getElementById('jawab8');
  var ang = document.getElementById('jawab9');
  

  if(himp.value=="C"){
    benar+=1;
    himp.className += " boxhijau";
  } else{
    himp.className += " boxmerah";
  }
  console.log(benar);

  if(komp.value=="c" || komp.value=="'"){
    benar+=1;
    komp.className += ' boxhijau';
  } else{
    komp.className += ' boxmerah';
  }
  console.log(benar);

  var ang2= ang.value;
  ang2 = ang2.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  var angg = ang2.split(",");
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<angg.length; k++){
      if(anggota[j]==angg[k]){
        ada+=1;
      }
    }
  }
  if(ada==4){
    benar+=1;
    ang.className += " boxhijau";
  } else{
    ang.className += " boxmerah";
  }
  console.log(benar);

  if(benar==3){
    document.getElementById('icon3').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('ket3').innerHTML = "<b>Jawaban kamu benar<b>";
    document.getElementById('ket3').style.color = "green";
  } else{
    document.getElementById('icon3').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('ket3').innerHTML = "<b>Jawaban kamu salah<b>";
    document.getElementById('ket3').style.color = "red";
    document.getElementById('ulang3').className = document.getElementById('ulang3').className.replace('hilang','');
  }

}
function ulang3(){
  for(var i=7; i<=9; i++){
    document.getElementById('jawab'+i).value ="";
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah','');
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxhijau','');
  }
  document.getElementById('icon3').innerHTML = "";
  document.getElementById('ket3').innerHTML= "";
  document.getElementById('ulang3').className += " hilang";
}

//tanya1 soal 4
function cek4(){
  var benar = 0;
  var anggota = [0, 1, 4, 6, 8];
  var ada = 0;
  var himp = document.getElementById('jawab10');
  var komp = document.getElementById('jawab11');
  var ang = document.getElementById('jawab12');
  

  if(himp.value=="D"){
    benar+=1;
    himp.className += " boxhijau";
  } else{
    himp.className += " boxmerah";
  }
  console.log(benar);

  if(komp.value=="c" || komp.value=="'"){
    benar+=1;
    komp.className += ' boxhijau';
  } else{
    komp.className += ' boxmerah';
  }
  console.log(benar);

  var ang2= ang.value;
  var angg = ang2.split(",");
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<angg.length; k++){
      if(anggota[j]==angg[k]){
        ada+=1;
      }
    }
  }
  if(ada==5){
    benar+=1;
    ang.className += " boxhijau";
  } else{
    ang.className += " boxmerah";
  }
  console.log(benar);

  if(benar==3){
    document.getElementById('icon4').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('ket4').innerHTML = "<b>Jawaban kamu benar<b>";
    document.getElementById('ket4').style.color = "green";
  } else{
    document.getElementById('icon4').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('ket4').innerHTML = "<b>Jawaban kamu salah<b>";
    document.getElementById('ket4').style.color = "red";
    document.getElementById('ulang4').className = document.getElementById('ulang4').className.replace('hilang','');
  }

}
function ulang4(){
  for(var i=10; i<=12; i++){
    document.getElementById('jawab'+i).value ="";
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah','');
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxhijau','');
  }
  document.getElementById('icon4').innerHTML = "";
  document.getElementById('ket4').innerHTML= "";
  document.getElementById('ulang4').className += " hilang";
}

//tanya1 soal 5
function cek5(){
  var benar = 0;
  var anggota = [10, 20, 30, 40, 50];
  var ada = 0;
  var himp = document.getElementById('jawab13');
  var komp = document.getElementById('jawab14');
  var ang = document.getElementById('jawab15');
  

  if(himp.value=="E"){
    benar+=1;
    himp.className += " boxhijau";
  } else{
    himp.className += " boxmerah";
  }
  console.log(benar);

  if(komp.value=="c" || komp.value=="'"){
    benar+=1;
    komp.className += ' boxhijau';
  } else{
    komp.className += ' boxmerah';
  }
  console.log(benar);

  var ang2= ang.value;
  var angg = ang2.split(",");
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<angg.length; k++){
      if(anggota[j]==angg[k]){
        ada+=1;
      }
    }
  }
  if(ada==5){
    benar+=1;
    ang.className += " boxhijau";
  } else{
    ang.className += " boxmerah";
  }
  console.log(benar);

  if(benar==3){
    document.getElementById('icon5').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('ket5').innerHTML = "<b>Jawaban kamu benar<b>";
    document.getElementById('ket5').style.color = "green";
  } else{
    document.getElementById('icon5').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('ket5').innerHTML = "<b>Jawaban kamu salah<b>";
    document.getElementById('ket5').style.color = "red";
    document.getElementById('ulang5').className = document.getElementById('ulang5').className.replace('hilang','');
  }

}
function ulang5(){
  for(var i=13; i<=15; i++){
    document.getElementById('jawab'+i).value ="";
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah','');
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxhijau','');
  }
  document.getElementById('icon5').innerHTML = "";
  document.getElementById('ket5').innerHTML= "";
  document.getElementById('ulang5').className += " hilang";
}

/*buka soal*/
function bukaSoal2(evt, nmrSoal) {
  var i, soal, nomorsoal;
  //isi soal
  soal = document.getElementsByClassName("soall");
  for (i = 0; i < soal.length; i++) {
    soal[i].style.display = "none";
  }
  //nomor soal
  nomorsoal = document.getElementsByClassName("nomorsoal2");
  for (i = 0; i < nomorsoal.length; i++) {
    nomorsoal[i].className = nomorsoal[i].className.replace(" nmrAktif", "");
  }
  document.getElementById(nmrSoal).style.display = "block";
  evt.currentTarget.className += " nmrAktif";
}

//tanya2 soal 1
function cekk1(){
  var benar = 0;
  var anggota = [4, 9, 25];
  var ada = 0;
  var himp = document.getElementById('jawabb1');
  var komp = document.getElementById('jawabb2');
  var ang = document.getElementById('jawabb3');
  

  if(himp.value=="F"){
    benar+=1;
    himp.className += " boxhijau";
  } else{
    himp.className += " boxmerah";
  }
  console.log(benar);

  if(komp.value=="c" || komp.value=="'"){
    benar+=1;
    komp.className += ' boxhijau';
  } else{
    komp.className += ' boxmerah';
  }
  console.log(benar);

  var ang2= ang.value;
  var angg = ang2.split(",");
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<angg.length; k++){
      if(anggota[j]==angg[k]){
        ada+=1;
      }
    }
  }
  if(ada==3){
    benar+=1;
    ang.className += " boxhijau";
  } else{
    ang.className += " boxmerah";
  }
  console.log(benar);

  if(benar==3){
    document.getElementById('ikon1').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('info1').innerHTML = "<b>Jawaban kamu benar<b>";
    document.getElementById('info1').style.color = "green";
  } else{
    document.getElementById('ikon1').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('info1').innerHTML = "<b>Jawaban kamu salah<b>";
    document.getElementById('info1').style.color = "red";
    document.getElementById('ulangg1').className = document.getElementById('ulangg1').className.replace('hilang','');
  }

}
function ulangg1(){
  for(var i=1; i<=3; i++){
    document.getElementById('jawabb'+i).value ="";
    document.getElementById('jawabb'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah','');
    document.getElementById('jawabb'+i).className = document.getElementById('jawab'+i).className.replace('boxhijau','');
  }
  document.getElementById('ikon1').innerHTML = "";
  document.getElementById('info1').innerHTML= "";
  document.getElementById('ulangg1').className += " hilang";
}

//tanya2 soal2
function cekk2(){
  var benar = 0;
  var anggota = ["maret", "april"];
  var ada = 0;
  var himp = document.getElementById('jawabb4');
  var komp = document.getElementById('jawabb5');
  var ang = document.getElementById('jawabb6');
  

  if(himp.value=="G"){
    benar+=1;
    himp.className += " boxhijau";
  } else{
    himp.className += " boxmerah";
  }
  console.log(benar);

  if(komp.value=="c" || komp.value=="'"){
    benar+=1;
    komp.className += ' boxhijau';
  } else{
    komp.className += ' boxmerah';
  }
  console.log(benar);

  var ang2= ang.value;
  ang2 = ang2.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  var angg = ang2.split(",");
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<angg.length; k++){
      if(anggota[j]==angg[k]){
        ada+=1;
      }
    }
  }
  if(ada==2){
    benar+=1;
    ang.className += " boxhijau";
  } else{
    ang.className += " boxmerah";
  }
  console.log(benar);

  if(benar==3){
    document.getElementById('ikon2').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('info2').innerHTML = "<b>Jawaban kamu benar<b>";
    document.getElementById('info2').style.color = "green";
  } else{
    document.getElementById('ikon2').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('info2').innerHTML = "<b>Jawaban kamu salah<b>";
    document.getElementById('info2').style.color = "red";
    document.getElementById('ulangg2').className = document.getElementById('ulangg2').className.replace('hilang','');
  }

}
function ulangg2(){
  for(var i=4; i<=6; i++){
    document.getElementById('jawabb'+i).value ="";
    document.getElementById('jawabb'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah','');
    document.getElementById('jawabb'+i).className = document.getElementById('jawab'+i).className.replace('boxhijau','');
  }
  document.getElementById('ikon2').innerHTML = "";
  document.getElementById('info2').innerHTML= "";
  document.getElementById('ulangg2').className += " hilang";
}

//tanya2 soal3
function cekk3(){
  var benar = 0;
  var anggota = ["senin", "selasa", "kamis", "jumat"];
  var ada = 0;
  var himp = document.getElementById('jawabb7');
  var komp = document.getElementById('jawabb8');
  var ang = document.getElementById('jawabb9');
  

  if(himp.value=="H"){
    benar+=1;
    himp.className += " boxhijau";
  } else{
    himp.className += " boxmerah";
  }
  console.log(benar);

  if(komp.value=="c" || komp.value=="'"){
    benar+=1;
    komp.className += ' boxhijau';
  } else{
    komp.className += ' boxmerah';
  }
  console.log(benar);

  var ang2= ang.value;
  ang2 = ang2.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  var angg = ang2.split(",");
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<angg.length; k++){
      if(anggota[j]==angg[k]){
        ada+=1;
      }
    }
  }
  if(ada==4){
    benar+=1;
    ang.className += " boxhijau";
  } else{
    ang.className += " boxmerah";
  }
  console.log(benar);

  if(benar==3){
    document.getElementById('ikon3').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('info3').innerHTML = "<b>Jawaban kamu benar<b>";
    document.getElementById('info3').style.color = "green";
  } else{
    document.getElementById('ikon3').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('info3').innerHTML = "<b>Jawaban kamu salah<b>";
    document.getElementById('info3').style.color = "red";
    document.getElementById('ulangg3').className = document.getElementById('ulangg3').className.replace('hilang','');
  }

}
function ulangg3(){
  for(var i=7; i<=9; i++){
    document.getElementById('jawabb'+i).value ="";
    document.getElementById('jawabb'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah','');
    document.getElementById('jawabb'+i).className = document.getElementById('jawab'+i).className.replace('boxhijau','');
  }
  document.getElementById('ikon3').innerHTML = "";
  document.getElementById('info3').innerHTML= "";
  document.getElementById('ulangg3').className += " hilang";
}

//tanya2 soal4
function cekk4(){
  var benar = 0;
  var anggota = ["b", "n", "j", "r", "m", "s"];
  var ada = 0;
  var himp = document.getElementById('jawabb10');
  var komp = document.getElementById('jawabb11');
  var ang = document.getElementById('jawabb12');
  

  if(himp.value=="A"){
    benar+=1;
    himp.className += " boxhijau";
  } else{
    himp.className += " boxmerah";
  }
  console.log(benar);

  if(komp.value=="c" || komp.value=="'"){
    benar+=1;
    komp.className += ' boxhijau';
  } else{
    komp.className += ' boxmerah';
  }
  console.log(benar);

  var ang2= ang.value;
  ang2 = ang2.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  var angg = ang2.split(",");
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<angg.length; k++){
      if(anggota[j]==angg[k]){
        ada+=1;
      }
    }
  }
  if(ada==6){
    benar+=1;
    ang.className += " boxhijau";
  } else{
    ang.className += " boxmerah";
  }
  console.log(benar);

  if(benar==3){
    document.getElementById('ikon4').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('info4').innerHTML = "<b>Jawaban kamu benar<b>";
    document.getElementById('info4').style.color = "green";
  } else{
    document.getElementById('ikon4').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('info4').innerHTML = "<b>Jawaban kamu salah<b>";
    document.getElementById('info4').style.color = "red";
    document.getElementById('ulangg4').className = document.getElementById('ulangg4').className.replace('hilang','');
  }

}
function ulangg4(){
  for(var i=10; i<=12; i++){
    document.getElementById('jawabb'+i).value ="";
    document.getElementById('jawabb'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah','');
    document.getElementById('jawabb'+i).className = document.getElementById('jawab'+i).className.replace('boxhijau','');
  }
  document.getElementById('ikon4').innerHTML = "";
  document.getElementById('info4').innerHTML= "";
  document.getElementById('ulangg4').className += " hilang";
}

function cekk5(){
  var benar = 0;
  var anggota = [1, 4, 7, 10, 13, 16];
  var ada = 0;
  var himp = document.getElementById('jawabb13');
  var komp = document.getElementById('jawabb14');
  var ang = document.getElementById('jawabb15');
  

  if(himp.value=="J"){
    benar+=1;
    himp.className += " boxhijau";
  } else{
    himp.className += " boxmerah";
  }
  console.log(benar);

  if(komp.value=="c" || komp.value=="'"){
    benar+=1;
    komp.className += ' boxhijau';
  } else{
    komp.className += ' boxmerah';
  }
  console.log(benar);

  var ang2= ang.value;
  var angg = ang2.split(",");
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<angg.length; k++){
      if(anggota[j]==angg[k]){
        ada+=1;
      }
    }
  }
  if(ada==6){
    benar+=1;
    ang.className += " boxhijau";
  } else{
    ang.className += " boxmerah";
  }
  console.log(benar);

  if(benar==3){
    document.getElementById('ikon5').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('info5').innerHTML = "<b>Jawaban kamu benar<b>";
    document.getElementById('info5').style.color = "green";
  } else{
    document.getElementById('ikon5').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('info5').innerHTML = "<b>Jawaban kamu salah<b>";
    document.getElementById('info5').style.color = "red";
    document.getElementById('ulangg5').className = document.getElementById('ulangg5').className.replace('hilang','');
  }

}
function ulangg5(){
  for(var i=13; i<=15; i++){
    document.getElementById('jawabb'+i).value ="";
    document.getElementById('jawabb'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah','');
    document.getElementById('jawabb'+i).className = document.getElementById('jawab'+i).className.replace('boxhijau','');
  }
  document.getElementById('ikon5').innerHTML = "";
  document.getElementById('info5').innerHTML= "";
  document.getElementById('ulangg5').className += " hilang";
}
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

/*soal 1*/
function cek11(){
  var ang = document.getElementById('jwb11');
  var anggota = ['d','e'];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value.toLowerCase();
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
      document.getElementById('icon11').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek11').className += " hilang";
      document.getElementById('lanjut11').className = document.getElementById('lanjut11').className.replace('hilang','');
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon11').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang11').className = document.getElementById('ulang11').className.replace('hilang','');
      document.getElementById('ket11').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }

  }
  
}

function ulang11(){
  document.getElementById('jwb11').value = "";
  document.getElementById('jwb11').className = document.getElementById('jwb11').className.replace('boxmerah','');
  document.getElementById('icon11').innerHTML = "";
  document.getElementById('ulang11').className += " hilang";
  document.getElementById('ket11').innerHTML = "";
}

function cek12(){
  var ang = document.getElementById('jwb12');
  var anggota = ['c','f','h'];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value.toLowerCase();
    ang2 = ang2.replace(/\s+/g, '');
    var angg = ang2.split(",");
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<angg.length; k++){
        if(anggota[j]==angg[k]){
          ada+=1;
        }
      }
    }
    if(ada==3){
      document.getElementById('icon12').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek12').className += " hilang";
      document.getElementById('lanjut12').className = document.getElementById('lanjut12').className.replace('hilang','');
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon12').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang12').className = document.getElementById('ulang12').className.replace('hilang','');
      document.getElementById('ket12').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }

  }
  
}

function ulang12(){
  document.getElementById('jwb12').value = "";
  document.getElementById('jwb12').className = document.getElementById('jwb12').className.replace('boxmerah','');
  document.getElementById('icon12').innerHTML = "";
  document.getElementById('ulang12').className += " hilang";
  document.getElementById('ket12').innerHTML = "";
}

function cek13(){
  var ang = document.getElementById('jwb13');

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value.toLowerCase();
    if(ang2=="g"){
      document.getElementById('icon13').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek13').className += " hilang";
      document.getElementById('lanjut13').className = document.getElementById('lanjut13').className.replace('hilang','');
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon13').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang13').className = document.getElementById('ulang13').className.replace('hilang','');
      document.getElementById('ket13').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }

  }
  
}

function ulang13(){
  document.getElementById('jwb13').value = "";
  document.getElementById('jwb13').className = document.getElementById('jwb13').className.replace('boxmerah','');
  document.getElementById('icon13').innerHTML = "";
  document.getElementById('ulang13').className += " hilang";
  document.getElementById('ket13').innerHTML = "";
}

function cek14(){
  var ang = document.getElementById('jwb14');
  var anggota = ['i','j'];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value.toLowerCase();
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
      document.getElementById('icon14').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek14').className += " hilang";
      document.getElementById('ket14').innerHTML = "<br><span class='bnr'><b>Jawaban kamu benar</b></span>"
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon14').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang14').className = document.getElementById('ulang14').className.replace('hilang','');
      document.getElementById('ket14').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }

  }
  
}

function ulang14(){
  document.getElementById('jwb14').value = "";
  document.getElementById('jwb14').className = document.getElementById('jwb14').className.replace('boxmerah','');
  document.getElementById('icon14').innerHTML = "";
  document.getElementById('ulang14').className += " hilang";
  document.getElementById('ket14').innerHTML = "";
}


/*soal 2*/
function cek21(){
  var ang = document.getElementById('jwb21');
  var anggota = [2,3,5];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value;
    var angg = ang2.split(",");
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<angg.length; k++){
        if(anggota[j]==angg[k]){
          ada+=1;
        }
      }
    }
    if(ada==3){
      document.getElementById('icon21').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek21').className += " hilang";
      document.getElementById('lanjut21').className = document.getElementById('lanjut21').className.replace('hilang','');
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon21').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang21').className = document.getElementById('ulang21').className.replace('hilang','');
      document.getElementById('ket21').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }

  }
  
}

function ulang21(){
  document.getElementById('jwb21').value = "";
  document.getElementById('jwb21').className = document.getElementById('jwb21').className.replace('boxmerah','');
  document.getElementById('icon21').innerHTML = "";
  document.getElementById('ulang21').className += " hilang";
  document.getElementById('ket21').innerHTML = "";
}

function cek22(){
  var ang = document.getElementById('jwb22');

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    if(ang.value==6){
      document.getElementById('icon22').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek22').className += " hilang";
      document.getElementById('lanjut22').className = document.getElementById('lanjut22').className.replace('hilang','');
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon22').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang22').className = document.getElementById('ulang22').className.replace('hilang','');
      document.getElementById('ket22').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }

  }
  
}

function ulang22(){
  document.getElementById('jwb22').value = "";
  document.getElementById('jwb22').className = document.getElementById('jwb21').className.replace('boxmerah','');
  document.getElementById('icon22').innerHTML = "";
  document.getElementById('ulang22').className += " hilang";
  document.getElementById('ket22').innerHTML = "";
}

function cek23(){
  var ang = document.getElementById('jwb23');
  var anggota = [7,11];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value;
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
      document.getElementById('icon23').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek23').className += " hilang";
      document.getElementById('lanjut23').className = document.getElementById('lanjut23').className.replace('hilang','');
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon23').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang23').className = document.getElementById('ulang23').className.replace('hilang','');
      document.getElementById('ket23').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }

  }
  
}

function ulang23(){
  document.getElementById('jwb23').value = "";
  document.getElementById('jwb23').className = document.getElementById('jwb23').className.replace('boxmerah','');
  document.getElementById('icon23').innerHTML = "";
  document.getElementById('ulang23').className += " hilang";
  document.getElementById('ket23').innerHTML = "";
}

function cek24(){
  var ang = document.getElementById('jwb24');

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    if(ang.value==4){
      document.getElementById('icon24').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek24').className += " hilang";
      document.getElementById('ket24').innerHTML = "<br><span class='bnr'><b>Jawaban kamu benar</b></span>"
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon24').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang24').className = document.getElementById('ulang24').className.replace('hilang','');
      document.getElementById('ket24').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }

  }
  
}

function ulang24(){
  document.getElementById('jwb24').value = "";
  document.getElementById('jwb24').className = document.getElementById('jwb24').className.replace('boxmerah','');
  document.getElementById('icon24').innerHTML = "";
  document.getElementById('ulang24').className += " hilang";
  document.getElementById('ket24').innerHTML = "";
}

/*soal 3*/
function cek31(){
  var ang = document.getElementById('jwb31');
  var anggota = [2,4,5];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value;
    var angg = ang2.split(",");
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<angg.length; k++){
        if(anggota[j]==angg[k]){
          ada+=1;
        }
      }
    }
    if(ada==3){
      document.getElementById('icon31').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek31').className += " hilang";
      document.getElementById('lanjut31').className = document.getElementById('lanjut31').className.replace('hilang','');
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon31').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang31').className = document.getElementById('ulang31').className.replace('hilang','');
      document.getElementById('ket31').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }

  }
  
}

function ulang31(){
  document.getElementById('jwb31').value = "";
  document.getElementById('jwb31').className = document.getElementById('jwb21').className.replace('boxmerah','');
  document.getElementById('icon31').innerHTML = "";
  document.getElementById('ulang31').className += " hilang";
  document.getElementById('ket31').innerHTML = "";
}

function cek32(){
  var ang = document.getElementById('jwb32');
  var anggota = [2,4,8,9];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value;
    var angg = ang2.split(",");
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<angg.length; k++){
        if(anggota[j]==angg[k]){
          ada+=1;
        }
      }
    }
    if(ada==4){
      document.getElementById('icon32').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek32').className += " hilang";
      document.getElementById('lanjut32').className = document.getElementById('lanjut32').className.replace('hilang','');
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon32').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang32').className = document.getElementById('ulang32').className.replace('hilang','');
      document.getElementById('ket32').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }

  }
  
}

function ulang32(){
  document.getElementById('jwb32').value = "";
  document.getElementById('jwb32').className = document.getElementById('jwb21').className.replace('boxmerah','');
  document.getElementById('icon32').innerHTML = "";
  document.getElementById('ulang32').className += " hilang";
  document.getElementById('ket32').innerHTML = "";
}

function cek33(){
  var ang = document.getElementById('jwb33');
  var anggota = [2,4];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value;
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
      document.getElementById('icon33').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek33').className += " hilang";
      document.getElementById('lanjut33').className = document.getElementById('lanjut33').className.replace('hilang','');
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon33').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang33').className = document.getElementById('ulang33').className.replace('hilang','');
      document.getElementById('ket33').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }

  }
  
}

function ulang33(){
  document.getElementById('jwb33').value = "";
  document.getElementById('jwb33').className = document.getElementById('jwb23').className.replace('boxmerah','');
  document.getElementById('icon33').innerHTML = "";
  document.getElementById('ulang33').className += " hilang";
  document.getElementById('ket33').innerHTML = "";
}

function cek34(){
  var ang = document.getElementById('jwb34');
  var anggota = [8,9];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value;
    var angg = ang2.split(",");
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<angg.length; k++){
        if(anggota[j]==angg[k]){
          ada+=1;
        }
      }
    }
    if(ada==2){
      document.getElementById('icon34').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek34').className += " hilang";
      document.getElementById('ket34').innerHTML = "<br><span class='bnr'><b>Jawaban kamu benar</b></span>"
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon34').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang34').className = document.getElementById('ulang34').className.replace('hilang','');
      document.getElementById('ket34').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }

  }
  
}

function ulang34(){
  document.getElementById('jwb34').value = "";
  document.getElementById('jwb34').className = document.getElementById('jwb24').className.replace('boxmerah','');
  document.getElementById('icon34').innerHTML = "";
  document.getElementById('ulang34').className += " hilang";
  document.getElementById('ket34').innerHTML = "";
}


//////////////////////////////////

function cekk1(){
  var himp = document.getElementById('jawab1');
  var ang = document.getElementById('jawab2');
  var anggota = ['matematika', 'biologi', 'fisika'];
  var benar = 0;
  var ada = 0 ;

  if(himp.value=="" && ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(himp.value.length>0 || ang.value.length>0){

    if(himp.value=="C"){
      benar+=1;
    } else{
      himp.className += " boxmerah";
    }

    var ang2 = ang.value.toLowerCase();
    ang2 = ang2.replace(/\s+/g, '');
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
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('ikon1').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk1').className += " hilang";
      document.getElementById('terus1').className = document.getElementById('terus1').className.replace('hilang','');
    }else{
      document.getElementById('ikon1').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg1').className = document.getElementById('ulangg1').className.replace('hilang','');
      document.getElementById('kett1').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulangg1(){
  for(var i=1; i<=2; i++){
    document.getElementById('jawab'+i).value= "";
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon1').innerHTML = "";
  document.getElementById('ulangg1').className += ' hilang';
  document.getElementById('kett1').innerHTML = "";
}

function cekk2(){
  var himp = document.getElementById('jawab3');
  var ang = document.getElementById('jawab4');
  var anggota = ['olahraga', 'seni', 'biologi'];
  var benar = 0;
  var ada = 0 ;

  if(himp.value=="" && ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(himp.value.length>0 || ang.value.length>0){

    if(himp.value=="D"){
      benar+=1;
    } else{
      himp.className += " boxmerah";
    }

    var ang2 = ang.value.toLowerCase();
    ang2 = ang2.replace(/\s+/g, '');
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
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('ikon2').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk2').className += " hilang";
      document.getElementById('terus2').className = document.getElementById('terus2').className.replace('hilang','');
    }else{
      document.getElementById('ikon2').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg2').className = document.getElementById('ulangg2').className.replace('hilang','');
      document.getElementById('kett2').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulangg2(){
  for(var i=3; i<=4; i++){
    document.getElementById('jawab'+i).value= "";
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon2').innerHTML = "";
  document.getElementById('ulangg2').className += ' hilang';
  document.getElementById('kett2').innerHTML = "";
}

function cekk3(){
  var himp1 = document.getElementById('jawab5');
  var himp2 = document.getElementById('jawab6');
  var ang = document.getElementById('jawab7');
  var himpunan = ['C','D'];
  var ada1 = 0;
  var benar = 0;

  if(himp1.value=="" && himp2.value=="" && ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(himp1.value.length>0 || himp2.value.length>0 || ang.value.length>0){
    for(var i=0; i<2; i++){
      if(himp1.value==himpunan[i]){
        ada1 += 1;
        himpunan[i] = "";
      }
    }

    for(var i=0; i<2; i++){
      if(himp2.value==himpunan[i]){
        ada1 += 1;
        himpunan[i] = "";
      } 
    }

    if(ada1==2){
      benar+=1;
    } else if(himp1.value==himp2.value){
      himp2.className += " boxmerah";
    }

    var ang2 = ang.value.toLowerCase();
    if(ang2=="biologi"){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('ikon3').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk3').className += " hilang";
      document.getElementById('kett3').innerHTML = "<br><span class='bnr'><b>Jawaban kamu benar.</b></span> ";
    } else{
      document.getElementById('ikon3').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg3').className = document.getElementById('ulangg3').className.replace('hilang','');
      document.getElementById('kett3').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }
  

}

function ulangg3(){
  for(var i=5; i<=7; i++){
    document.getElementById('jawab'+i).value= "";
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon3').innerHTML = "";
  document.getElementById('ulangg3').className += ' hilang';
  document.getElementById('kett3').innerHTML = "";
}
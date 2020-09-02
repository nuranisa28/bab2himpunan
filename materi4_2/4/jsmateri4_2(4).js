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

function cek11(){
  var himp1 = document.getElementById('jwb11');
  var himp2 = document.getElementById('jwb12');
  var ang = document.getElementById('jwb13');
  var anggota = [3, 5, 7, 8, 9, 10];
  var himpunan = ['A','B'];
  var ada1 = 0;
  var ada2 = 0;
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

    if(himp1.value != "A" && himp1.value != "B"){
      himp1.className += " boxmerah";
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

    var ang2 = ang.value;
    ang2 = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<ang2.length; k++){
        if(anggota[j]==ang2[k]){
          ada2+=1;
        }
      }
    }
    if(ada2==6){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('icon11').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek11').className += " hilang";
      document.getElementById('ket11').innerHTML = "<br><span class='bnr'>Jawaban kamu benar.</span> " + himp1.value + " &cup; " + himp2.value + " = {" + ang2 + "}";
    } else{
      document.getElementById('icon11').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang11').className = document.getElementById('ulang11').className.replace('hilang','');
      document.getElementById('ket11').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }
  
}

function ulang11(){
  for(var i=1; i<=3; i++){
    document.getElementById('jwb1'+i).value= "";
    document.getElementById('jwb1'+i).className = document.getElementById('jwb1'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon11').innerHTML = "";
  document.getElementById('ulang11').className += ' hilang';
  document.getElementById('ket11').innerHTML = "";
}

function cek12(){
  var himp1 = document.getElementById('jwb14');
  var himp2 = document.getElementById('jwb15');
  var ang = document.getElementById('jwb16');
  var anggota = [11, 13, 15, 17, 18, 19];
  var himpunan = ['C','D'];
  var ada1 = 0;
  var ada2 = 0;
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

    if(himp1.value != "C" && himp1.value != "D"){
      himp1.className += " boxmerah";
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

    var ang2 = ang.value;
    ang2 = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<ang2.length; k++){
        if(anggota[j]==ang2[k]){
          ada2+=1;
        }
      }
    }
    if(ada2==6){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('icon12').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek12').className += " hilang";
      document.getElementById('ket12').innerHTML = "<br><span class='bnr'>Jawaban kamu benar.</span> " + himp1.value + " &cup; " + himp2.value + " = {" + ang2 + "}";
    } else{
      document.getElementById('icon12').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang12').className = document.getElementById('ulang12').className.replace('hilang','');
      document.getElementById('ket12').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }
  
}

function ulang12(){
  for(var i=4; i<=6; i++){
    document.getElementById('jwb1'+i).value= "";
    document.getElementById('jwb1'+i).className = document.getElementById('jwb1'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon12').innerHTML = "";
  document.getElementById('ulang12').className += ' hilang';
  document.getElementById('ket12').innerHTML = "";
}

function cek13(){
  var himp1 = document.getElementById('jwb17');
  var himp2 = document.getElementById('jwb18');
  var ang = document.getElementById('jwb19');
  var anggota = [1, 2, 3, 4, 6, 8];
  var himpunan = ['E','F'];
  var ada1 = 0;
  var ada2 = 0;
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

    if(himp1.value != "E" && himp1.value != "F"){
      himp1.className += " boxmerah";
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

    var ang2 = ang.value;
    ang2 = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<ang2.length; k++){
        if(anggota[j]==ang2[k]){
          ada2+=1;
        }
      }
    }
    if(ada2==6){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('icon13').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek13').className += " hilang";
      document.getElementById('ket13').innerHTML = "<br><span class='bnr'>Jawaban kamu benar.</span> " + himp1.value + " &cup; " + himp2.value + " = {" + ang2 + "}";
    } else{
      document.getElementById('icon13').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang13').className = document.getElementById('ulang13').className.replace('hilang','');
      document.getElementById('ket13').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }
  
}

function ulang13(){
  for(var i=7; i<=9; i++){
    document.getElementById('jwb1'+i).value= "";
    document.getElementById('jwb1'+i).className = document.getElementById('jwb1'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon13').innerHTML = "";
  document.getElementById('ulang13').className += ' hilang';
  document.getElementById('ket13').innerHTML = "";
}

function cek14(){
  var himp1 = document.getElementById('jwb110');
  var himp2 = document.getElementById('jwb111');
  var ang = document.getElementById('jwb112');
  var anggota = ['s', 'a', 'i', 'r', 'n', 'g', 'u', 'e', 'o'];
  var himpunan = ['G','H'];
  var ada1 = 0;
  var ada2 = 0;
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

    if(himp1.value != "G" && himp1.value != "H"){
      himp1.className += " boxmerah";
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
    ang2 = ang2.replace(/\s+/g, '');
    var angg = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<angg.length; k++){
        if(anggota[j]==angg[k]){
          ada2+=1;
        }
      }
    }
    if(ada2==9){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('icon14').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek14').className += " hilang";
      document.getElementById('ket14').innerHTML = "<br><span class='bnr'>Jawaban kamu benar.</span> " + himp1.value + " &cup; " + himp2.value + " = {" + ang2 + "}";
    } else{
      document.getElementById('icon14').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang14').className = document.getElementById('ulang14').className.replace('hilang','');
      document.getElementById('ket14').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }
  
}

function ulang14(){
  for(var i=10; i<=12; i++){
    document.getElementById('jwb1'+i).value= "";
    document.getElementById('jwb1'+i).className = document.getElementById('jwb1'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon14').innerHTML = "";
  document.getElementById('ulang14').className += ' hilang';
  document.getElementById('ket14').innerHTML = "";
}

function cek15(){
  var himp1 = document.getElementById('jwb113');
  var himp2 = document.getElementById('jwb114');
  var ang = document.getElementById('jwb115');
  var anggota = [1, 2, 3, 4, 5, 6];
  var himpunan = ['B','D'];
  var ada1 = 0;
  var ada2 = 0;
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

    if(himp1.value != "B" && himp1.value != "D"){
      himp1.className += " boxmerah";
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
    ang2 = ang2.replace(/\s+/g, '');
    var angg = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<angg.length; k++){
        if(anggota[j]==angg[k]){
          ada2+=1;
        }
      }
    }
    if(ada2==6){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('icon15').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek15').className += " hilang";
      document.getElementById('ket15').innerHTML = "<br><span class='bnr'>Jawaban kamu benar.</span> " + himp1.value + " &cup; " + himp2.value + " = {" + ang2 + "}";
    } else{
      document.getElementById('icon15').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang15').className = document.getElementById('ulang15').className.replace('hilang','');
      document.getElementById('ket15').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }
  
}

function ulang15(){
  for(var i=13; i<=15; i++){
    document.getElementById('jwb1'+i).value= "";
    document.getElementById('jwb1'+i).className = document.getElementById('jwb1'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon15').innerHTML = "";
  document.getElementById('ulang15').className += ' hilang';
  document.getElementById('ket15').innerHTML = "";
}

//////////////////////////

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

function cek21(){
  var himp1 = document.getElementById('jwb21');
  var himp2 = document.getElementById('jwb22');
  var ang = document.getElementById('jwb23');
  var anggota = [0,1,2,3,4,5,6,7,8,9,10];
  var himpunan = ['A','B'];
  var ada1 = 0;
  var ada2 = 0;
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

    if(himp1.value != "A" && himp1.value != "B"){
      himp1.className += " boxmerah";
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

    var ang2 = ang.value;
    ang2 = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<ang2.length; k++){
        if(anggota[j]==ang2[k]){
          ada2+=1;
        }
      }
    }
    if(ada2==11){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('icon21').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek21').className += " hilang";
      document.getElementById('ket21').innerHTML = "<br><span class='bnr'>Jawaban kamu benar.</span> " + himp1.value + " &cup; " + himp2.value + " = {" + ang2 + "}";
    } else{
      document.getElementById('icon21').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang21').className = document.getElementById('ulang21').className.replace('hilang','');
      document.getElementById('ket21').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }
  
}

function ulang21(){
  for(var i=1; i<=3; i++){
    document.getElementById('jwb2'+i).value= "";
    document.getElementById('jwb2'+i).className = document.getElementById('jwb2'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon21').innerHTML = "";
  document.getElementById('ulang21').className += ' hilang';
  document.getElementById('ket21').innerHTML = "";
}

function cek22(){
  var himp1 = document.getElementById('jwb24');
  var himp2 = document.getElementById('jwb25');
  var ang = document.getElementById('jwb26');
  var anggota = [1,2,3,5];
  var himpunan = ['C','D'];
  var ada1 = 0;
  var ada2 = 0;
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

    if(himp1.value != "C" && himp1.value != "D"){
      himp1.className += " boxmerah";
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

    var ang2 = ang.value;
    ang2 = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<ang2.length; k++){
        if(anggota[j]==ang2[k]){
          ada2+=1;
        }
      }
    }
    if(ada2==4){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('icon22').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek22').className += " hilang";
      document.getElementById('ket22').innerHTML = "<br><span class='bnr'>Jawaban kamu benar.</span> " + himp1.value + " &cup; " + himp2.value + " = {" + ang2 + "}";
    } else{
      document.getElementById('icon22').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang22').className = document.getElementById('ulang22').className.replace('hilang','');
      document.getElementById('ket22').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }
  
}

function ulang22(){
  for(var i=4; i<=6; i++){
    document.getElementById('jwb2'+i).value= "";
    document.getElementById('jwb2'+i).className = document.getElementById('jwb2'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon22').innerHTML = "";
  document.getElementById('ulang22').className += ' hilang';
  document.getElementById('ket22').innerHTML = "";
}

function cek23(){
  var himp1 = document.getElementById('jwb27');
  var himp2 = document.getElementById('jwb28');
  var ang = document.getElementById('jwb29');
  var anggota = [2,3,4,5,6,7,8,10];
  var himpunan = ['D','E'];
  var ada1 = 0;
  var ada2 = 0;
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

    if(himp1.value != "D" && himp1.value != "E"){
      himp1.className += " boxmerah";
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

    var ang2 = ang.value;
    ang2 = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<ang2.length; k++){
        if(anggota[j]==ang2[k]){
          ada2+=1;
        }
      }
    }
    if(ada2==8){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('icon23').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek23').className += " hilang";
      document.getElementById('ket23').innerHTML = "<br><span class='bnr'>Jawaban kamu benar.</span> " + himp1.value + " &cup; " + himp2.value + " = {" + ang2 + "}";
    } else{
      document.getElementById('icon23').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang23').className = document.getElementById('ulang23').className.replace('hilang','');
      document.getElementById('ket23').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }
  
}

function ulang23(){
  for(var i=7; i<=9; i++){
    document.getElementById('jwb2'+i).value= "";
    document.getElementById('jwb2'+i).className = document.getElementById('jwb2'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon23').innerHTML = "";
  document.getElementById('ulang23').className += ' hilang';
  document.getElementById('ket23').innerHTML = "";
}

function cek24(){
  var himp1 = document.getElementById('jwb210');
  var himp2 = document.getElementById('jwb211');
  var ang = document.getElementById('jwb212');
  var anggota = ['a','f','c','b','e','d'];
  var himpunan = ['F','G'];
  var ada1 = 0;
  var ada2 = 0;
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

    if(himp1.value != "F" && himp1.value != "G"){
      himp1.className += " boxmerah";
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
    ang2 = ang2.replace(/\s+/g, '');
    var angg = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<angg.length; k++){
        if(anggota[j]==angg[k]){
          ada2+=1;
        }
      }
    }
    if(ada2==6){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('icon24').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek24').className += " hilang";
      document.getElementById('ket24').innerHTML = "<br><span class='bnr'>Jawaban kamu benar.</span> " + himp1.value + " &cup; " + himp2.value + " = {" + ang2 + "}";
    } else{
      document.getElementById('icon24').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang24').className = document.getElementById('ulang24').className.replace('hilang','');
      document.getElementById('ket24').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }
  
}

function ulang24(){
  for(var i=10; i<=12; i++){
    document.getElementById('jwb2'+i).value= "";
    document.getElementById('jwb2'+i).className = document.getElementById('jwb2'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon24').innerHTML = "";
  document.getElementById('ulang24').className += ' hilang';
  document.getElementById('ket24').innerHTML = "";
}

function cek25(){
  var himp1 = document.getElementById('jwb213');
  var himp2 = document.getElementById('jwb214');
  var ang = document.getElementById('jwb215');
  var anggota = ['m','k','p','u','b','j','h'];
  var himpunan = ['B','C'];
  var ada1 = 0;
  var ada2 = 0;
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

    if(himp1.value != "B" && himp1.value != "C"){
      himp1.className += " boxmerah";
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
    ang2 = ang2.replace(/\s+/g, '');
    var angg = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<angg.length; k++){
        if(anggota[j]==angg[k]){
          ada2+=1;
        }
      }
    }
    if(ada2==7){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('icon25').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek25').className += " hilang";
      document.getElementById('ket25').innerHTML = "<br><span class='bnr'>Jawaban kamu benar.</span> " + himp1.value + " &cup; " + himp2.value + " = {" + ang2 + "}";
    } else{
      document.getElementById('icon25').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang25').className = document.getElementById('ulang25').className.replace('hilang','');
      document.getElementById('ket25').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }
  
}

function ulang25(){
  for(var i=13; i<=15; i++){
    document.getElementById('jwb2'+i).value= "";
    document.getElementById('jwb2'+i).className = document.getElementById('jwb2'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon25').innerHTML = "";
  document.getElementById('ulang25').className += ' hilang';
  document.getElementById('ket25').innerHTML = "";
}
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

function tjk1(tjk1) {
  var x = document.getElementById(tjk1);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
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

function cek11(){
  var himp = document.getElementById("jwb11");
  var ang = document.getElementById("jwb12");
  var anggota = [1, 2, 3, 4, 5];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

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
  if(ada==5){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon11').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek11').className += " hilang";
      document.getElementById("lanjut11").className = document.getElementById("lanjut11").className.replace('hilang','');
    } else{
      document.getElementById('icon11').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang11').className = document.getElementById('ulang11').className.replace('hilang','');
    }
}

function ulang11(){
  for(var i=1; i<=2; i++){
    document.getElementById('jwb1'+i).value= "";
    document.getElementById('jwb1'+i).className = document.getElementById('jwb1'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon11').innerHTML = "";
  document.getElementById('ulang11').className += ' hilang';
}

function cek12(){
  var himp = document.getElementById("jwb13");
  var ang = document.getElementById("jwb14");
  var anggota = [2,3,5];
  var benar = 0;
  var ada = 0;

  if(himp.value=="A"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

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
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon12').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek12').className += " hilang";
      document.getElementById("lanjut12").className = document.getElementById("lanjut12").className.replace('hilang','');
    } else{
      document.getElementById('icon12').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang12').className = document.getElementById('ulang12').className.replace('hilang','');
    }
}

function ulang12(){
  for(var i=3; i<=4; i++){
    document.getElementById('jwb1'+i).value= "";
    document.getElementById('jwb1'+i).className = document.getElementById('jwb1'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon12').innerHTML = "";
  document.getElementById('ulang12').className += ' hilang';
}

function benar1(){
  var x = document.getElementsByName("pilih1");
  var checked = false;

  for(var i=0; i < x.length; i++){
    if(x[i].checked){
      checked = true;
      if(x[i].value=="1"){
        document.getElementById("icon13").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("benar1").className += " hijau";
        document.getElementById("salah1").className += " hilang";
        document.getElementById("lanjut13").className = document.getElementById("lanjut13").className.replace('hilang','');
      } 
    }
  }
}

function salah1(){
  var x = document.getElementsByName("pilih1");
  var checked = false;

  for(var i=0; i < x.length; i++){
    if(x[i].checked){
      checked = true;
      if(x[i].value=="0"){
        document.getElementById("icon13").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("salah1").className += " merah";
        document.getElementById("benar1").className += " hilang";
        document.getElementById("ulang13").className = document.getElementById("ulang13").className.replace('hilang','');
      }
    }
  }
}

function ulang13(){
  document.getElementById("icon13").innerHTML = "";
  document.getElementById("benar1").className =  document.getElementById("benar1").className.replace('hilang','');
  document.getElementById("salah1").className = document.getElementById("salah1").className.replace('merah','');
  document.getElementById("ulang13").className += " hilang";
}

////////////////////////////////////////

function cek21(){
  var himp = document.getElementById("jwb21");
  var ang = document.getElementById("jwb22");
  var anggota = [-3, -2, -1, 0, 1, 2, 3];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

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
  if(ada==7){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon21').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek21').className += " hilang";
      document.getElementById("lanjut21").className = document.getElementById("lanjut21").className.replace('hilang','');
    } else{
      document.getElementById('icon21').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang21').className = document.getElementById('ulang21').className.replace('hilang','');
    }
}

function ulang21(){
  for(var i=1; i<=2; i++){
    document.getElementById('jwb2'+i).value= "";
    document.getElementById('jwb2'+i).className = document.getElementById('jwb2'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon21').innerHTML = "";
  document.getElementById('ulang21').className += ' hilang';
}

function cek22(){
  var himp = document.getElementById("jwb23");
  var ang = document.getElementById("jwb24");
  var anggota = [0, 1, 2];
  var benar = 0;
  var ada = 0;

  if(himp.value=="B"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

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
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon22').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek22').className += " hilang";
      document.getElementById("lanjut22").className = document.getElementById("lanjut22").className.replace('hilang','');
    } else{
      document.getElementById('icon22').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang22').className = document.getElementById('ulang22').className.replace('hilang','');
    }
}

function ulang22(){
  for(var i=3; i<=4; i++){
    document.getElementById('jwb2'+i).value= "";
    document.getElementById('jwb2'+i).className = document.getElementById('jwb2'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon22').innerHTML = "";
  document.getElementById('ulang22').className += ' hilang';
}

function benar2(){
  var x = document.getElementsByName("pilih2");
  var checked = false;

  for(var i=0; i < x.length; i++){
    if(x[i].checked){
      checked = true;
      if(x[i].value=="1"){
        document.getElementById("icon23").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("benar2").className += " hijau";
        document.getElementById("salah2").className += " hilang";
        document.getElementById("lanjut23").className = document.getElementById("lanjut23").className.replace('hilang','');
      } 
    }
  }
}

function salah2(){
  var x = document.getElementsByName("pilih2");
  var checked = false;

  for(var i=0; i < x.length; i++){
    if(x[i].checked){
      checked = true;
      if(x[i].value=="0"){
        document.getElementById("icon23").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("salah2").className += " merah";
        document.getElementById("benar2").className += " hilang";
        document.getElementById("ulang23").className = document.getElementById("ulang23").className.replace('hilang','');
      }
    }
  }
}

function ulang23(){
  document.getElementById("icon23").innerHTML = "";
  document.getElementById("benar2").className =  document.getElementById("benar2").className.replace('hilang','');
  document.getElementById("salah2").className = document.getElementById("salah2").className.replace('merah','');
  document.getElementById("ulang23").className += " hilang";
}

////////////////////

function cek31(){
  var himp = document.getElementById("jwb31");
  var ang = document.getElementById("jwb32");
  var anggota = ['b', 'a', 'n', 'j', 'r', 'm', 's', 'i'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==8){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon31').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek31').className += " hilang";
      document.getElementById("lanjut31").className = document.getElementById("lanjut31").className.replace('hilang','');
    } else{
      document.getElementById('icon31').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang31').className = document.getElementById('ulang31').className.replace('hilang','');
    }
}

function ulang31(){
  for(var i=1; i<=2; i++){
    document.getElementById('jwb3'+i).value= "";
    document.getElementById('jwb3'+i).className = document.getElementById('jwb3'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon31').innerHTML = "";
  document.getElementById('ulang31').className += ' hilang';
}

function cek32(){
  var himp = document.getElementById("jwb33");
  var ang = document.getElementById("jwb34");
  var anggota = ['a', 'i'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="C"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==2){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon32').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek32').className += " hilang";
      document.getElementById("lanjut32").className = document.getElementById("lanjut32").className.replace('hilang','');
    } else{
      document.getElementById('icon32').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang32').className = document.getElementById('ulang32').className.replace('hilang','');
    }
}

function ulang32(){
  for(var i=3; i<=4; i++){
    document.getElementById('jwb3'+i).value= "";
    document.getElementById('jwb3'+i).className = document.getElementById('jwb3'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon32').innerHTML = "";
  document.getElementById('ulang32').className += ' hilang';
}

function benar3(){
  var x = document.getElementsByName("pilih3");
  var checked = false;

  for(var i=0; i < x.length; i++){
    if(x[i].checked){
      checked = true;
      if(x[i].value=="1"){
        document.getElementById("icon33").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("benar3").className += " hijau";
        document.getElementById("salah3").className += " hilang";
        document.getElementById("lanjut33").className = document.getElementById("lanjut33").className.replace('hilang','');
      } 
    }
  }
}

function salah3(){
  var x = document.getElementsByName("pilih3");
  var checked = false;

  for(var i=0; i < x.length; i++){
    if(x[i].checked){
      checked = true;
      if(x[i].value=="0"){
        document.getElementById("icon33").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("salah3").className += " merah";
        document.getElementById("benar3").className += " hilang";
        document.getElementById("ulang33").className = document.getElementById("ulang33").className.replace('hilang','');
      }
    }
  }
}

function ulang33(){
  document.getElementById("icon33").innerHTML = "";
  document.getElementById("benar3").className =  document.getElementById("benar3").className.replace('hilang','');
  document.getElementById("salah3").className = document.getElementById("salah3").className.replace('merah','');
  document.getElementById("ulang33").className += " hilang";
}

//////////////////////////////

function cek41(){
  var himp = document.getElementById("jwb41");
  var ang = document.getElementById("jwb42");
  var anggota = ['merah', 'jingga', 'kuning', 'hijau', 'biru', 'nila', 'ungu'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==7){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon41').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek41').className += " hilang";
      document.getElementById("lanjut41").className = document.getElementById("lanjut41").className.replace('hilang','');
    } else{
      document.getElementById('icon41').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang41').className = document.getElementById('ulang41').className.replace('hilang','');
    }
}

function ulang41(){
  for(var i=1; i<=2; i++){
    document.getElementById('jwb4'+i).value= "";
    document.getElementById('jwb4'+i).className = document.getElementById('jwb4'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon41').innerHTML = "";
  document.getElementById('ulang41').className += ' hilang';
}

function cek42(){
  var himp = document.getElementById("jwb43");
  var ang = document.getElementById("jwb44");
  var anggota = ['merah', 'kuning', 'hijau'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="D"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
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
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon42').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek42').className += " hilang";
      document.getElementById("lanjut42").className = document.getElementById("lanjut42").className.replace('hilang','');
    } else{
      document.getElementById('icon42').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang42').className = document.getElementById('ulang42').className.replace('hilang','');
    }
}

function ulang42(){
  for(var i=3; i<=4; i++){
    document.getElementById('jwb4'+i).value= "";
    document.getElementById('jwb4'+i).className = document.getElementById('jwb4'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon42').innerHTML = "";
  document.getElementById('ulang42').className += ' hilang';
}

function benar4(){
  var x = document.getElementsByName("pilih4");
  var checked = false;

  for(var i=0; i < x.length; i++){
    if(x[i].checked){
      checked = true;
      if(x[i].value=="1"){
        document.getElementById("icon43").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("benar4").className += " hijau";
        document.getElementById("salah4").className += " hilang";
        document.getElementById("lanjut43").className = document.getElementById("lanjut43").className.replace('hilang','');
      } 
    }
  }
}

function salah4(){
  var x = document.getElementsByName("pilih4");
  var checked = false;

  for(var i=0; i < x.length; i++){
    if(x[i].checked){
      checked = true;
      if(x[i].value=="0"){
        document.getElementById("icon43").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("salah4").className += " merah";
        document.getElementById("benar4").className += " hilang";
        document.getElementById("ulang43").className = document.getElementById("ulang43").className.replace('hilang','');
      }
    }
  }
}

function ulang43(){
  document.getElementById("icon43").innerHTML = "";
  document.getElementById("benar4").className =  document.getElementById("benar4").className.replace('hilang','');
  document.getElementById("salah4").className = document.getElementById("salah4").className.replace('merah','');
  document.getElementById("ulang43").className += " hilang";
}

///////////////////////////

function cek51(){
  var himp = document.getElementById("jwb51");
  var ang = document.getElementById("jwb52");
  var anggota = [1, 2, 3, 4, 5, 6, 7, 8];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

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
  if(ada==8){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon51').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek51').className += " hilang";
      document.getElementById("lanjut51").className = document.getElementById("lanjut51").className.replace('hilang','');
    } else{
      document.getElementById('icon51').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang51').className = document.getElementById('ulang51').className.replace('hilang','');
    }
}

function ulang51(){
  for(var i=1; i<=2; i++){
    document.getElementById('jwb5'+i).value= "";
    document.getElementById('jwb5'+i).className = document.getElementById('jwb5'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon51').innerHTML = "";
  document.getElementById('ulang51').className += ' hilang';
}

function cek52(){
  var himp = document.getElementById("jwb53");
  var ang = document.getElementById("jwb54");
  var anggota = [1, 3, 5, 7];
  var benar = 0;
  var ada = 0;

  if(himp.value=="E"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
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
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon52').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek52').className += " hilang";
      document.getElementById("lanjut52").className = document.getElementById("lanjut52").className.replace('hilang','');
    } else{
      document.getElementById('icon52').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang52').className = document.getElementById('ulang52').className.replace('hilang','');
    }
}

function ulang52(){
  for(var i=3; i<=4; i++){
    document.getElementById('jwb5'+i).value= "";
    document.getElementById('jwb5'+i).className = document.getElementById('jwb5'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon52').innerHTML = "";
  document.getElementById('ulang52').className += ' hilang';
}

function benar5(){
  var x = document.getElementsByName("pilih5");
  var checked = false;

  for(var i=0; i < x.length; i++){
    if(x[i].checked){
      checked = true;
      if(x[i].value=="1"){
        document.getElementById("icon53").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("benar5").className += " hijau";
        document.getElementById("salah5").className += " hilang";
        document.getElementById("lanjut53").className = document.getElementById("lanjut53").className.replace('hilang','');
      } 
    }
  }
}

function salah5(){
  var x = document.getElementsByName("pilih5");
  var checked = false;

  for(var i=0; i < x.length; i++){
    if(x[i].checked){
      checked = true;
      if(x[i].value=="0"){
        document.getElementById("icon53").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("salah5").className += " merah";
        document.getElementById("benar5").className += " hilang";
        document.getElementById("ulang53").className = document.getElementById("ulang53").className.replace('hilang','');
      }
    }
  }
}

function ulang53(){
  document.getElementById("icon53").innerHTML = "";
  document.getElementById("benar5").className =  document.getElementById("benar5").className.replace('hilang','');
  document.getElementById("salah5").className = document.getElementById("salah5").className.replace('merah','');
  document.getElementById("ulang53").className += " hilang";
}

//////////////////////////////

function cekk11(){
  var himp = document.getElementById("jawab11");
  var ang = document.getElementById("jawab12");
  var anggota = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

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
  if(ada==9){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon11').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk11').className += " hilang";
      document.getElementById("lanjutt11").className = document.getElementById("lanjutt11").className.replace('hilang','');
    } else{
      document.getElementById('ikon11').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg11').className = document.getElementById('ulangg11').className.replace('hilang','');
    }
}

function ulangg11(){
  for(var i=1; i<=2; i++){
    document.getElementById('jawab1'+i).value= "";
    document.getElementById('jawab1'+i).className = document.getElementById('jawab1'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon11').innerHTML = "";
  document.getElementById('ulangg11').className += ' hilang';
}

function cekk12(){
  var himp = document.getElementById("jawab13");
  var ang = document.getElementById("jawab14");
  var anggota = [1, 2, 3, 4, 5];
  var benar = 0;
  var ada = 0;

  if(himp.value=="J"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

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
  if(ada==5){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon12').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk12').className += " hilang";
      document.getElementById("lanjutt12").className = document.getElementById("lanjutt12").className.replace('hilang','');
    } else{
      document.getElementById('ikon12').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg12').className = document.getElementById('ulangg12').className.replace('hilang','');
    }
}

function ulangg12(){
  for(var i=3; i<=4; i++){
    document.getElementById('jawab1'+i).value= "";
    document.getElementById('jawab1'+i).className = document.getElementById('jawab1'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon12').innerHTML = "";
  document.getElementById('ulangg12').className += ' hilang';
}

/////////////////////

function cekk21(){
  var himp = document.getElementById("jawab21");
  var ang = document.getElementById("jawab22");
  var anggota = ['h', 'a', 'r', 'i'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
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
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon21').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk21').className += " hilang";
      document.getElementById("lanjutt21").className = document.getElementById("lanjutt21").className.replace('hilang','');
    } else{
      document.getElementById('ikon21').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg21').className = document.getElementById('ulangg21').className.replace('hilang','');
    }
}

function ulangg21(){
  for(var i=1; i<=2; i++){
    document.getElementById('jawab2'+i).value= "";
    document.getElementById('jawab2'+i).className = document.getElementById('jawab2'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon21').innerHTML = "";
  document.getElementById('ulangg21').className += ' hilang';
}

function cekk22(){
  var himp = document.getElementById("jawab23");
  var ang = document.getElementById("jawab24");
  var anggota = ['h', 'a', 'i'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="K"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
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
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon22').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk22').className += " hilang";
      document.getElementById("lanjutt22").className = document.getElementById("lanjutt22").className.replace('hilang','');
    } else{
      document.getElementById('ikon22').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg22').className = document.getElementById('ulangg22').className.replace('hilang','');
    }
}

function ulangg22(){
  for(var i=3; i<=4; i++){
    document.getElementById('jawab2'+i).value= "";
    document.getElementById('jawab2'+i).className = document.getElementById('jawab2'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon22').innerHTML = "";
  document.getElementById('ulangg22').className += ' hilang';
}

/////////////////////////

function cekk31(){
  var himp = document.getElementById("jawab31");
  var ang = document.getElementById("jawab32");
  var anggota = ['h', 'i', 'm', 'p', 'u', 'n', 'a'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==7){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon31').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk31').className += " hilang";
      document.getElementById("lanjutt31").className = document.getElementById("lanjutt31").className.replace('hilang','');
    } else{
      document.getElementById('ikon31').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg31').className = document.getElementById('ulangg31').className.replace('hilang','');
    }
}

function ulangg31(){
  for(var i=1; i<=2; i++){
    document.getElementById('jawab3'+i).value= "";
    document.getElementById('jawab3'+i).className = document.getElementById('jawab3'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon31').innerHTML = "";
  document.getElementById('ulangg31').className += ' hilang';
}

function cekk32(){
  var himp = document.getElementById("jawab33");
  var ang = document.getElementById("jawab34");
  var anggota = ['h', 'i', 'm'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="L"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
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
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon32').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk32').className += " hilang";
      document.getElementById("lanjutt32").className = document.getElementById("lanjutt32").className.replace('hilang','');
    } else{
      document.getElementById('ikon32').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg32').className = document.getElementById('ulangg32').className.replace('hilang','');
    }
}

function ulangg32(){
  for(var i=3; i<=4; i++){
    document.getElementById('jawab3'+i).value= "";
    document.getElementById('jawab3'+i).className = document.getElementById('jawab3'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon32').innerHTML = "";
  document.getElementById('ulangg32').className += ' hilang';
}

///////////////////////

function cekk41(){
  var himp = document.getElementById("jawab41");
  var ang = document.getElementById("jawab42");
  var anggota = ['s', 'u', 'n', 'g', 'a', 'i'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==6){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon41').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk41').className += " hilang";
      document.getElementById("lanjutt41").className = document.getElementById("lanjutt41").className.replace('hilang','');
    } else{
      document.getElementById('ikon41').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg41').className = document.getElementById('ulangg41').className.replace('hilang','');
    }
}

function ulangg41(){
  for(var i=1; i<=2; i++){
    document.getElementById('jawab4'+i).value= "";
    document.getElementById('jawab4'+i).className = document.getElementById('jawab4'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon41').innerHTML = "";
  document.getElementById('ulangg41').className += ' hilang';
}

function cekk42(){
  var himp = document.getElementById("jawab43");
  var ang = document.getElementById("jawab44");
  var anggota = ['s', 'u'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="M"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==2){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon42').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk42').className += " hilang";
      document.getElementById("lanjutt42").className = document.getElementById("lanjutt42").className.replace('hilang','');
    } else{
      document.getElementById('ikon42').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg42').className = document.getElementById('ulangg42').className.replace('hilang','');
    }
}

function ulangg42(){
  for(var i=3; i<=4; i++){
    document.getElementById('jawab4'+i).value= "";
    document.getElementById('jawab4'+i).className = document.getElementById('jawab4'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon42').innerHTML = "";
  document.getElementById('ulangg42').className += ' hilang';
}

///////////////////////////

function cekk51(){
  var himp = document.getElementById("jawab51");
  var ang = document.getElementById("jawab52");
  var anggota = [1, 2, 3, 4, 5, 6, 7];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

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
  if(ada==7){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon51').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk51').className += " hilang";
      document.getElementById("lanjutt51").className = document.getElementById("lanjutt51").className.replace('hilang','');
    } else{
      document.getElementById('ikon51').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg51').className = document.getElementById('ulangg51').className.replace('hilang','');
    }
}

function ulangg51(){
  for(var i=1; i<=2; i++){
    document.getElementById('jawab5'+i).value= "";
    document.getElementById('jawab5'+i).className = document.getElementById('jawab5'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon51').innerHTML = "";
  document.getElementById('ulangg51').className += ' hilang';
}

function cekk52(){
  var himp = document.getElementById("jawab53");
  var ang = document.getElementById("jawab54");
  var anggota = [2, 3, 5, 7];
  var benar = 0;
  var ada = 0;

  if(himp.value=="N"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

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
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon52').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk52').className += " hilang";
      document.getElementById("lanjutt52").className = document.getElementById("lanjutt52").className.replace('hilang','');
    } else{
      document.getElementById('ikon52').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg52').className = document.getElementById('ulangg52').className.replace('hilang','');
    }
}

function ulangg52(){
  for(var i=3; i<=4; i++){
    document.getElementById('jawab5'+i).value= "";
    document.getElementById('jawab5'+i).className = document.getElementById('jawab5'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon52').innerHTML = "";
  document.getElementById('ulangg52').className += ' hilang';
}


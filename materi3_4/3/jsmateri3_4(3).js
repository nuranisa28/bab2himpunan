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

function tjk2(tjk2) {
  var x = document.getElementById(tjk2);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}

function cek1(){
  var benar = 0;
  var anggota = [1,3,5,7,9,11,13,15,17,19];
  var ada = 0;
  var himp = document.getElementById('jawab1');
  var ang = document.getElementById('jawab2');
  var komp = document.getElementById('jawab3');

  if(himp.value=="A"){
    benar+=1;
    himp.className += " boxhijau";
  } else{
    himp.className += " boxmerah";
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
  if(ada==10){
    benar+=1;
    ang.className += " boxhijau";
  } else{
    ang.className += " boxmerah";
  }
  console.log(benar);

  if(komp.value=="c" || komp.value=="'"){
    benar+=1;
    komp.className += ' boxhijau';
  } else{
    komp.className += ' boxmerah';
  }
  console.log(benar);

  if(benar==3){
    document.getElementById('icon1').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('bnr1').className = document.getElementById('bnr1').className.replace('hilang','');
  } else{
    document.getElementById('icon1').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('slh1').className = document.getElementById('slh1').className.replace('hilang','');
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
  document.getElementById('slh1').className += " hilang";
  document.getElementById('ulang1').className += " hilang";
}

function tjk3(tjk3) {
  var x = document.getElementById(tjk3);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}

function cek2(){
  var benar = 0;
  var anggota = [1,4];
  var ada = 0;
  var himp = document.getElementById('jawab4');
  var ang = document.getElementById('jawab6');
  var komp = document.getElementById('jawab5');

  if(himp.value=="N"){
    benar+=1;
    himp.className += " boxhijau";
  } else{
    himp.className += " boxmerah";
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
  if(ada==2){
    benar+=1;
    ang.className += " boxhijau";
  } else{
    ang.className += " boxmerah";
  }
  console.log(benar);

  if(komp.value=="c" || komp.value=="'"){
    benar+=1;
    komp.className += ' boxhijau';
  } else{
    komp.className += ' boxmerah';
  }
  console.log(benar);

  if(benar==3){
    document.getElementById('icon2').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('bnr2').className = document.getElementById('bnr1').className.replace('hilang','');
  } else{
    document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('slh2').className = document.getElementById('slh1').className.replace('hilang','');
    document.getElementById('ulang2').className = document.getElementById('ulang1').className.replace('hilang','');
  }

}

function ulang2(){
  for(var i=4; i<=6; i++){
    document.getElementById('jawab'+i).value ="";
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah','');
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxhijau','');
  }
  document.getElementById('icon2').innerHTML = "";
  document.getElementById('slh2').className += " hilang";
  document.getElementById('ulang2').className += " hilang";
}
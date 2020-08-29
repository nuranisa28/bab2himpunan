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

function cek1(){
  var himp = document.getElementById('jawab1');
  var ang = document.getElementById('jawab2');
  var anggota = ['pisang', 'apel', 'jeruk', 'semangka'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="A"){
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
  if(ada==4){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
    document.getElementById('cek1').className += " hilang";
    document.getElementById('icon1').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
  } else{
    document.getElementById('icon1').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('ulang1').className = document.getElementById('ulang1').className.replace('hilang','');
  }
}

function ulang1(){
  for(var i=1; i<=2; i++){
    document.getElementById('jawab'+i).value = "";
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah','');
  }
  document.getElementById('icon1').innerHTML = "";
  document.getElementById('ulang1').className += " hilang";
}

function cek2(){
  var himp = document.getElementById('jawab3');
  var ang = document.getElementById('jawab4');
  var anggota = ["anggur", "mangga", "jeruk"];
  var benar = 0;
  var ada = 0;

  if(himp.value=="G"){
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
    document.getElementById('cek2').className += " hilang";
    document.getElementById('icon2').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('lanjutt1').className = document.getElementById('lanjutt1').className.replace('hilang','');
    document.getElementById('lanjutt2').className = document.getElementById('lanjutt2').className.replace('hilang','');
  } else{
    document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('ulang2').className = document.getElementById('ulang2').className.replace('hilang','');
  }
}

function ulang2(){
  for(var i=3; i<=4; i++){
    document.getElementById('jawab'+i).value = "";
    document.getElementById('jawab'+i).className = document.getElementById('jawab'+i).className.replace('boxmerah','');
  }
  document.getElementById('icon2').innerHTML = "";
  document.getElementById('ulang2').className += " hilang";
}

function ada1(){
  document.getElementById('tdk1').className += " hilang";
  document.getElementById('icon3').innerHTML = "<img src='../img/true.png' width='15px'>";
  document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
  document.getElementById('bnr1').className = document.getElementById('bnr1').className.replace('hilang','');
  document.getElementById('lanjut3').className = document.getElementById('lanjut3').className.replace('hilang','');
}

function tdk1(){
  document.getElementById('ada1').className += " hilang";
  document.getElementById('icon3').innerHTML = "<img src='../img/false.png' width='15px'>";
  document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
  document.getElementById('slh1').className = document.getElementById('slh1').className.replace('hilang','');
  document.getElementById('lanjut3').className = document.getElementById('lanjut3').className.replace('hilang','');
}

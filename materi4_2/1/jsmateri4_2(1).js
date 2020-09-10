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
  document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
}

function tdk1(){
  document.getElementById('ada1').className += " hilang";
  document.getElementById('icon1').innerHTML = "<img src='../img/false.png' width='15px'>";
  document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
  document.getElementById('slh1').className = document.getElementById('slh1').className.replace('hilang','');
  document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
}

function cek1(){
  var ang = document.getElementById('jawab1');
  var anggota = [5, 12, 15, 18, 20, 21, 24];
  var benar = 0;
  var ada = 0;

  var ang2 = ang.value;
  var angg = ang2.split(",");
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<angg.length; k++){
      if(anggota[j]==angg[k]){
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

  if(benar==1){
    document.getElementById('cek1').className += " hilang";
    document.getElementById('icon2').innerHTML = "<img src='../img/true.png' width='15px'>";
    document.getElementById('lanjut3').className = document.getElementById('lanjut3').className.replace('hilang','');
    document.getElementById('lanjut4').className = document.getElementById('lanjut4').className.replace('hilang','');
  } else{
    document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
    document.getElementById('ulang1').className = document.getElementById('ulang1').className.replace('hilang','');
  }
}

function ulang1(){
  document.getElementById('jawab1').value = "";
  document.getElementById('jawab1').className = document.getElementById('jawab1').className.replace('boxmerah','');
  document.getElementById('icon2').innerHTML = "";
  document.getElementById('ulang1').className += " hilang";
}



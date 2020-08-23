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

function ya1(){
  document.getElementById('tidak1').className += " hilang";
  document.getElementById('icon1').innerHTML = "<img src='../img/true.png' width='15px'>";
  document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
  document.getElementById('bnr1').className = document.getElementById('bnr1').className.replace('hilang','');
  document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
}

function tidak1(){
  document.getElementById('ya1').className += " hilang";
  document.getElementById('icon1').innerHTML = "<img src='../img/false.png' width='15px'>";
  document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
  document.getElementById('slh1').className = document.getElementById('slh1').className.replace('hilang','');
  document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
}

function ya2(){
  document.getElementById('tidak2').className += " hilang";
  document.getElementById('icon2').innerHTML = "<img src='../img/true.png' width='15px'>";
  document.getElementById('lanjut3').className = document.getElementById('lanjut3').className.replace('hilang','');
  document.getElementById('bnr2').className = document.getElementById('bnr2').className.replace('hilang','');
  document.getElementById('lanjut4').className = document.getElementById('lanjut4').className.replace('hilang','');
}

function tidak2(){
  document.getElementById('ya2').className += " hilang";
  document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
  document.getElementById('lanjut3').className = document.getElementById('lanjut3').className.replace('hilang','');
  document.getElementById('slh2').className = document.getElementById('bnr2').className.replace('hilang','');
  document.getElementById('lanjut4').className = document.getElementById('lanjut4').className.replace('hilang','');
}

function ya3(){
  document.getElementById('tidak3').className += " hilang";
  document.getElementById('icon3').innerHTML = "<img src='../img/false.png' width='15px'>";
  document.getElementById('lanjut5').className = document.getElementById('lanjut5').className.replace('hilang','');
  document.getElementById('slh3').className = document.getElementById('bnr3').className.replace('hilang','');
  document.getElementById('lanjut6').className = document.getElementById('lanjut6').className.replace('hilang','');
}

function tidak3(){
  document.getElementById('ya3').className += " hilang";
  document.getElementById('icon3').innerHTML = "<img src='../img/true.png' width='15px'>";
  document.getElementById('lanjut5').className = document.getElementById('lanjut5').className.replace('hilang','');
  document.getElementById('bnr3').className = document.getElementById('bnr3').className.replace('hilang','');
  document.getElementById('lanjut6').className = document.getElementById('lanjut6').className.replace('hilang','');
}

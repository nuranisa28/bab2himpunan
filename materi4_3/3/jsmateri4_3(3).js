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

function cek11(){
  var ang = document.getElementById('jwb11');
  var anggota = [1, 5, 7];
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
        }
      }
    }

    if(ada==3){
      document.getElementById('icon11').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek11').className += " hilang";
      document.getElementById('lanjut11').className = document.getElementById('lanjut11').className.replace('hilang','');
      document.getElementById('ket11').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. A &minus; B = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon11').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang11').className = document.getElementById('ulang11').className.replace('hilang','');
      document.getElementById('ket11').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang11(){
  document.getElementById('jwb11').value= "";
  document.getElementById('jwb11').className = document.getElementById('jwb11').className.replace('boxmerah', "");
  document.getElementById('icon11').innerHTML = "";
  document.getElementById('ulang11').className += ' hilang';
  document.getElementById('ket11').innerHTML = "";
}

function cek12(){
  var ang = document.getElementById('jwb12');
  var anggota = [6, 12, 15];
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
        }
      }
    }

    if(ada==3){
      document.getElementById('icon12').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek12').className += " hilang";
      document.getElementById('ket12').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. B &minus; A = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon12').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang12').className = document.getElementById('ulang12').className.replace('hilang','');
      document.getElementById('ket12').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang12(){
  document.getElementById('jwb12').value= "";
  document.getElementById('jwb12').className = document.getElementById('jwb12').className.replace('boxmerah', "");
  document.getElementById('icon12').innerHTML = "";
  document.getElementById('ulang12').className += ' hilang';
  document.getElementById('ket12').innerHTML = "";
}

function cek21(){
  var ang = document.getElementById('jwb21');
  var anggota = [1, 3, 5];
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
        }
      }
    }

    if(ada==3){
      document.getElementById('icon21').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek21').className += " hilang";
      document.getElementById('lanjut21').className = document.getElementById('lanjut21').className.replace('hilang','');
      document.getElementById('ket21').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. B &minus; C = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon21').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang21').className = document.getElementById('ulang21').className.replace('hilang','');
      document.getElementById('ket21').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang21(){
  document.getElementById('jwb21').value= "";
  document.getElementById('jwb21').className = document.getElementById('jwb21').className.replace('boxmerah', "");
  document.getElementById('icon21').innerHTML = "";
  document.getElementById('ulang21').className += ' hilang';
  document.getElementById('ket21').innerHTML = "";
}

function cek22(){
  var ang = document.getElementById('jwb22');
  var anggota = [6, 8];
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
        }
      }
    }

    if(ada==2){
      document.getElementById('icon22').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek22').className += " hilang";
      document.getElementById('ket22').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. C &minus; B = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon22').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang22').className = document.getElementById('ulang22').className.replace('hilang','');
      document.getElementById('ket22').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang22(){
  document.getElementById('jwb22').value= "";
  document.getElementById('jwb22').className = document.getElementById('jwb12').className.replace('boxmerah', "");
  document.getElementById('icon22').innerHTML = "";
  document.getElementById('ulang22').className += ' hilang';
  document.getElementById('ket22').innerHTML = "";
}

function cek31(){
  var ang = document.getElementById('jwb31');
  var anggota = [8, 10];
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
        }
      }
    }

    if(ada==2){
      document.getElementById('icon31').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek31').className += " hilang";
      document.getElementById('lanjut31').className = document.getElementById('lanjut31').className.replace('hilang','');
      document.getElementById('ket31').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. C &minus; D = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon31').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang31').className = document.getElementById('ulang31').className.replace('hilang','');
      document.getElementById('ket31').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang31(){
  document.getElementById('jwb31').value= "";
  document.getElementById('jwb31').className = document.getElementById('jwb31').className.replace('boxmerah', "");
  document.getElementById('icon31').innerHTML = "";
  document.getElementById('ulang31').className += ' hilang';
  document.getElementById('ket31').innerHTML = "";
}

function cek32(){
  var ang = document.getElementById('jwb32');
  var anggota = [0, 1, 3, 5, 7];
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
        }
      }
    }

    if(ada==5){
      document.getElementById('icon32').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek32').className += " hilang";
      document.getElementById('ket32').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. D &minus; C = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon32').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang32').className = document.getElementById('ulang32').className.replace('hilang','');
      document.getElementById('ket32').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang32(){
  document.getElementById('jwb32').value= "";
  document.getElementById('jwb32').className = document.getElementById('jwb12').className.replace('boxmerah', "");
  document.getElementById('icon32').innerHTML = "";
  document.getElementById('ulang32').className += ' hilang';
  document.getElementById('ket32').innerHTML = "";
}

function cek41(){
  var ang = document.getElementById('jwb41');
  var anggota = ['s', 'e', 'm', 'n'];
  var ada = 0;

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value.toLowerCase();
    ang2 = ang2.replace(/\s+/g, '');
    ang2 = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<ang2.length; k++){
        if(anggota[j]==ang2[k]){
          ada+=1;
        }
      }
    }

    if(ada==4){
      document.getElementById('icon41').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek41').className += " hilang";
      document.getElementById('lanjut41').className = document.getElementById('lanjut41').className.replace('hilang','');
      document.getElementById('ket41').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. D &minus; E = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon41').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang41').className = document.getElementById('ulang41').className.replace('hilang','');
      document.getElementById('ket41').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang41(){
  document.getElementById('jwb41').value= "";
  document.getElementById('jwb41').className = document.getElementById('jwb41').className.replace('boxmerah', "");
  document.getElementById('icon41').innerHTML = "";
  document.getElementById('ulang41').className += ' hilang';
  document.getElementById('ket41').innerHTML = "";
}

function cek42(){
  var ang = document.getElementById('jwb42');

  if(ang.value==""){
    alert("Isi terlebih dahulu jawabanmu!");
  }

  if(ang.value.length>0){

    var ang2 = ang.value.toLowerCase();
    

    if(ang2=="i"){
      document.getElementById('icon42').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek42').className += " hilang";
      document.getElementById('ket42').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. E &minus; D = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon42').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang42').className = document.getElementById('ulang42').className.replace('hilang','');
      document.getElementById('ket42').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang42(){
  document.getElementById('jwb42').value= "";
  document.getElementById('jwb42').className = document.getElementById('jwb12').className.replace('boxmerah', "");
  document.getElementById('icon42').innerHTML = "";
  document.getElementById('ulang42').className += ' hilang';
  document.getElementById('ket42').innerHTML = "";
}

function cek51(){
  var ang = document.getElementById('jwb51');
  var anggota = [1, 4, 6];
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
        }
      }
    }

    if(ada==3){
      document.getElementById('icon51').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek51').className += " hilang";
      document.getElementById('lanjut51').className = document.getElementById('lanjut51').className.replace('hilang','');
      document.getElementById('ket51').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. J &minus; K = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon51').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang51').className = document.getElementById('ulang51').className.replace('hilang','');
      document.getElementById('ket51').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang51(){
  document.getElementById('jwb51').value= "";
  document.getElementById('jwb51').className = document.getElementById('jwb51').className.replace('boxmerah', "");
  document.getElementById('icon51').innerHTML = "";
  document.getElementById('ulang51').className += ' hilang';
  document.getElementById('ket51').innerHTML = "";
}

function cek52(){
  var ang = document.getElementById('jwb52');
  var anggota = [7, 9, 11, 13];
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
        }
      }
    }

    if(ada==4){
      document.getElementById('icon52').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek52').className += " hilang";
      document.getElementById('ket52').innerHTML = "<span class='bnr'>Jawaban kamu benar</span>. K &minus; J = {" + ang2 + "}";
    } else{
      ang.className += " boxmerah";
      document.getElementById('icon52').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang52').className = document.getElementById('ulang52').className.replace('hilang','');
      document.getElementById('ket52').innerHTML = "<span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }

}

function ulang52(){
  document.getElementById('jwb52').value= "";
  document.getElementById('jwb52').className = document.getElementById('jwb12').className.replace('boxmerah', "");
  document.getElementById('icon52').innerHTML = "";
  document.getElementById('ulang52').className += ' hilang';
  document.getElementById('ket52').innerHTML = "";
}
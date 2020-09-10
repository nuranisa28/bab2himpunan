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
  var himp1 = document.getElementById('jwb11');
  var himp2 = document.getElementById('jwb12');
  var ang = document.getElementById('jwb13');
  var anggota = [4,5,6];
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
          anggota[j]="";
        }
      }
    }
    if(ada2==3){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('icon11').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek11').className += " hilang";
      document.getElementById('lanjut11').className = document.getElementById('lanjut11').className.replace('hilang','');
      document.getElementById('h1').innerHTML = himp1.value;
      document.getElementById('h2').innerHTML = himp2.value;
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


let jwb14 = document.querySelector('#jwb14');

// function agar saat di enter tidak dijalankan 
jwb14.addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
});

jwb14.addEventListener('keyup',function(){

  if(jwb14.value.length==0){
        if(jwb14.className.indexOf('boxhijau') == -1){
            jwb14.className = jwb14.className.replace('boxmerah', "");
          }
          if (jwb14.className.indexOf('boxmerah') == -1){
            jwb14.className = jwb14.className.replace('boxhijau', "");
          } 
          document.getElementById('icon12').innerHTML = "";
  }

  if(jwb14.value.length==1){

    if(jwb14.value==3){
      setTimeout(function(){
            document.getElementById('icon12').innerHTML = "<img src='../img/true.png' width='15px'>";
            document.getElementById('lanjut12').className = document.getElementById('lanjut12').className.replace('hilang','');
            document.getElementById('scratch1').src = document.getElementById('scratch1').src;
          }, 500)
    } else{
      
            if (jwb14.className.indexOf('boxmerah') == -1) {
              if (jwb14.className.indexOf('boxhijau') == -1) {
                jwb14.className += ' boxmerah';
              } else {
                jwb14.className = jwb14.className.replace('boxhijau', 'boxmerah');
              }
            }
            document.getElementById('icon12').innerHTML = "<img src='../img/false.png' width='15px'>";
         
    }

  }

})

function cek21(){
  var himp1 = document.getElementById('jwb21');
  var himp2 = document.getElementById('jwb22');
  var ang = document.getElementById('jwb23');
  var anggota = ['b','a','n'];
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
    angg = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<angg.length; k++){
        if(anggota[j]==angg[k]){
          ada2+=1;
          anggota[j]="";
        }
      }
    }
    if(ada2==3){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('icon21').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek21').className += " hilang";
      document.getElementById('lanjut21').className = document.getElementById('lanjut21').className.replace('hilang','');
      document.getElementById('h3').innerHTML = himp1.value;
      document.getElementById('h4').innerHTML = himp2.value;
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

let jwb24 = document.querySelector('#jwb24');

// function agar saat di enter tidak dijalankan 
jwb24.addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
});

jwb24.addEventListener('keyup',function(){

  if(jwb24.value.length==0){
        if(jwb24.className.indexOf('boxhijau') == -1){
            jwb24.className = jwb24.className.replace('boxmerah', "");
          }
          if (jwb24.className.indexOf('boxmerah') == -1){
            jwb24.className = jwb24.className.replace('boxhijau', "");
          } 
          document.getElementById('icon22').innerHTML = "";
  }

  if(jwb24.value.length==1){

    if(jwb24.value==3){
      setTimeout(function(){
            document.getElementById('icon22').innerHTML = "<img src='../img/true.png' width='15px'>";
            document.getElementById('lanjut22').className = document.getElementById('lanjut22').className.replace('hilang','');
            document.getElementById('scratch2').src = document.getElementById('scratch2').src;
          }, 500)
    } else{
      
            if (jwb24.className.indexOf('boxmerah') == -1) {
              if (jwb24.className.indexOf('boxhijau') == -1) {
                jwb24.className += ' boxmerah';
              } else {
                jwb24.className = jwb24.className.replace('boxhijau', 'boxmerah');
              }
            }
            document.getElementById('icon22').innerHTML = "<img src='../img/false.png' width='15px'>";
         
    }

  }

})

function cek31(){
  var himp1 = document.getElementById('jwb31');
  var himp2 = document.getElementById('jwb32');
  var ang = document.getElementById('jwb33');
  var anggota = [2,3,5,7];
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
    var angg = ang2.split(',');
    for(var j=0; j<anggota.length; j++){
      for(var k=0; k<angg.length; k++){
        if(anggota[j]==angg[k]){
          ada2+=1;
          anggota[j]="";
        }
      }
    }
    if(ada2==4){
      benar+=1;
    } else{
      ang.className += " boxmerah";
    }

    if(benar==2){
      document.getElementById('icon31').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek31').className += " hilang";
      document.getElementById('ket31').innerHTML = "<br><span class='bnr'>Jawaban kamu benar.</span> " + himp1.value + " &cap; " + himp2.value + " = {" + ang2 +"}.";
    } else{
      document.getElementById('icon31').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang31').className = document.getElementById('ulang31').className.replace('hilang','');
      document.getElementById('ket31').innerHTML = "<br><span class='slh'>Jawaban kamu salah.</span> Silahkan tekan tomboll Ulang";
    }
  }
  

}

function ulang31(){
  for(var i=1; i<=3; i++){
    document.getElementById('jwb3'+i).value= "";
    document.getElementById('jwb3'+i).className = document.getElementById('jwb3'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon31').innerHTML = "";
  document.getElementById('ulang31').className += ' hilang';
  document.getElementById('ket31').innerHTML = "";
}
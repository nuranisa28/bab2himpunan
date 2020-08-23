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

function tjk1(tjk1) {
  var x = document.getElementById(tjk1);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}

function cek(){
  let jawaban = document.querySelectorAll('.jawab');
  let icon = document.querySelectorAll('.icon');
  let anggota = ["rabu","sabtu","minggu"];
  let jwb = [];
  let ada = 0;
  
  for(let i=0; i < jawaban.length; i++){
    jawaban[i].value = jawaban[i].value.toLowerCase();
    jawaban[i].value = jawaban[i].value.replace(/\s+/g, '');

    for(var a=0; a<3; a++){
      if(jawaban[i].value==anggota[a]){
        jwb[i] = anggota[a];
        anggota[a]="";
        ada += 1;
        jawaban[i].className += " boxhijau";
        icon[i].innerHTML = "<img src='../img/true.png' width='15px'>";
      } else{
        jawaban[i].className += " boxmerah";
      }
    }

  }

  if(ada==3){
    document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
  }

}

// let jawaban = document.querySelectorAll('.jawab');
// let icon = document.querySelectorAll('.icon');
// let ket = document.querySelectorAll('.ket');
// let jwb = [];
// let benar = 0;
// let anggota = ["rabu","sabtu","minggu"];

// for(let i=0; i < jawaban.length; i++){
//   // function agar saat di enter tidak dijalankan 
//     jawaban[i].addEventListener('keypress', function (e) {
//         if (e.keyCode == 13) {
//             e.preventDefault();
//             return false;
//         }
//     });

//   jawaban[i].addEventListener('keyup', function () {
//     let ada = 0;
//     let sudah = 0;
//     jawaban[i].value = jawaban[i].value.toLowerCase();

//     if(jawaban[i].value.length==0){
//         if(jawaban[i].className.indexOf('boxhijau') == -1){
//           jawaban[i].className = jawaban[i].className.replace('boxmerah', "");
//         }
//         if (jawaban[i].className.indexOf('boxmerah') == -1){
//           jawaban[i].className = jawaban[i].className.replace('boxhijau', "");
//         } 
//         icon[i].innerHTML = "";
//         ket[i].innerHTML = "";
        
//     }

//     if(jawaban[i].value.length==4 || jawaban[i].value.length==5 || jawaban[i].value.length==6){   
      
//       //cek apakah input ada di array
//       for(var a=0; a<3; a++){
//         if(jawaban[i].value==anggota[a]){
//           jwb[i] = anggota[a];
//           anggota[a]="";
//           ada = 1;
//         }
//       }

//       console.log(jwb);

//       if(ada==1){
//         if (jawaban[i].className.indexOf('boxhijau') == -1) {
//           if (jawaban[i].className.indexOf('boxmerah') == -1) {
//             jawaban[i].className += ' boxhijau';
//           } else {
//             jawaban[i].className = jawaban[i].className.replace('boxmerah', 'boxhijau');
//           }
//         }
//         benar+=1;
//         icon[i].innerHTML = "<img src='../img/true.png' width='15px'>";
//         ket[i].innerHTML = "";

//         if(i==0){
//           document.getElementById('lanjut'+i).className = document.getElementById('lanjut'+i).className.replace('hilang','');
//         }
//         if(i==1){
//           document.getElementById('lanjut'+i).className = document.getElementById('lanjut'+i).className.replace('hilang','');
//         }
//         if(i==2){
//           document.getElementById('lanjut'+i).className = document.getElementById('lanjut'+i).className.replace('hilang','');
//         }
        
//       }
//       else{
//         for(var b=0; b<3; b++){
//           if(jawaban[i].value==jwb[b]){
//             sudah=1;
//           }
//         }
//         console.log(sudah);
//         if(sudah == 1){
//           if (jawaban[i].className.indexOf('boxmerah') == -1) {
//             if (jawaban[i].className.indexOf('boxhijau') == -1) {
//               jawaban[i].className += ' boxmerah';
//             } else {
//               jawaban[i].className = jawaban[i].className.replace('boxhijau', 'boxmerah');
//             }

//           }
//           icon[i].innerHTML = "<img src='../img/false.png' width='15px'>";
//           ket[i].innerHTML = jawaban[i].value + " sudah kamu input. <b>Silahkan input nama hari yang lain.</b>";
//         } else{
//           if (jawaban[i].className.indexOf('boxmerah') == -1) {
//             if (jawaban[i].className.indexOf('boxhijau') == -1) {
//               jawaban[i].className += ' boxmerah';
//             } else {
//               jawaban[i].className = jawaban[i].className.replace('boxhijau', 'boxmerah');
//             }

//           }
//           icon[i].innerHTML = "<img src='../img/false.png' width='15px'>";
//           ket[i].innerHTML = jawaban[i].value + " bukan nama hari yang berakhiran u. <b>Silahkan ulangi jawaban.</b>";
//         }
//       }


//     }


//   }) 


// }
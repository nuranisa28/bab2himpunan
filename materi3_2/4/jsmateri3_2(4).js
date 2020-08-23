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

let jawabb3 = document.querySelectorAll('.jawab3');

for(let i=0; i<jawabb3.length; i++){

  // function agar saat di enter tidak dijalankan 
  jawabb3[i].addEventListener('keypress', function(e){
    if (e.keyCode == 13) {
              e.preventDefault();
              return false;
          }
  });

  jawabb3[i].addEventListener('keyup', function(){
    console.log(jawabb3[i].value);

    if (jawabb3[i].value.length == 0) {
      if(jawabb3[i].className.indexOf('boxhijau') == -1){
        jawabb3[i].className = jawabb3[i].className.replace('boxmerah', "");
      }
      if (jawabb3[i].className.indexOf('boxmerah') == -1){
        jawabb3[i].className = jawabb3[i].className.replace('boxhijau', "");
      }
      document.getElementById('icon1').innerHTML = "";
    }

    if(jawabb3[i].value.length==1){

      if(i==0){

        if(jawabb3[0].value==3){
          if (jawabb3[0].className.indexOf('boxhijau') == -1) {
            if (jawabb3[0].className.indexOf('boxmerah') == -1) {
              jawabb3[0].className += ' boxhijau';
            } else {
              jawabb3[0].className = jawabb3[0].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('lanjut2').className = document.getElementById('lanjut2').className.replace('hilang','');
        } else{
          if (jawabb3[0].className.indexOf('boxmerah') == -1) {
            if (jawabb3[0].className.indexOf('boxhijau') == -1) {
              jawabb3[0].className += ' boxmerah';
            } else {
              jawabb3[0].className = jawabb3[0].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==1){

        if(jawabb3[1].value==3){
          if (jawabb3[1].className.indexOf('boxhijau') == -1) {
            if (jawabb3[1].className.indexOf('boxmerah') == -1) {
              jawabb3[1].className += ' boxhijau';
            } else {
              jawabb3[1].className = jawabb3[1].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('lanjut3').className = document.getElementById('lanjut2').className.replace('hilang','');
        } else{
          if (jawabb3[1].className.indexOf('boxmerah') == -1) {
            if (jawabb3[1].className.indexOf('boxhijau') == -1) {
              jawabb3[1].className += ' boxmerah';
            } else {
              jawabb3[1].className = jawabb3[1].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==2){

        if(jawabb3[2].value==1){
          if (jawabb3[2].className.indexOf('boxhijau') == -1) {
            if (jawabb3[2].className.indexOf('boxmerah') == -1) {
              jawabb3[2].className += ' boxhijau';
            } else {
              jawabb3[2].className = jawabb3[2].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('lanjut4').className = document.getElementById('lanjut2').className.replace('hilang','');
        } else{
          if (jawabb3[2].className.indexOf('boxmerah') == -1) {
            if (jawabb3[2].className.indexOf('boxhijau') == -1) {
              jawabb3[2].className += ' boxmerah';
            } else {
              jawabb3[2].className = jawabb3[2].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

      if(i==3){

        if(jawabb3[3].value==8){
          if (jawabb3[3].className.indexOf('boxhijau') == -1) {
            if (jawabb3[3].className.indexOf('boxmerah') == -1) {
              jawabb3[3].className += ' boxhijau';
            } else {
              jawabb3[3].className = jawabb3[3].className.replace('boxmerah', 'boxhijau');
            }
          }
          document.getElementById('icon1').innerHTML = "<img src='../img/true.png' width='15px'>";
          document.getElementById('lanjut5').className = document.getElementById('lanjut2').className.replace('hilang','');
        } else{
          document.getElementById('icon1').innerHTML = "<img src='../img/false.png' width='15px'>";
          if (jawabb3[3].className.indexOf('boxmerah') == -1) {
            if (jawabb3[3].className.indexOf('boxhijau') == -1) {
              jawabb3[3].className += ' boxmerah';
            } else {
              jawabb3[3].className = jawabb3[3].className.replace('boxhijau', 'boxmerah');
            }
          }
        }

      }

    }


  })

}

let jawab2 = document.querySelector('.jawab2');
let benar = 0;

// function agar saat di enter tidak dijalankan 
jawab2.addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
});

jawab2.addEventListener('keyup', function(){
  console.log(jawab2.value);
  if (jawab2.value.length == 0) {
    if(jawab2.className.indexOf('boxhijau') == -1){
      jawab2.className = jawab2.className.replace('boxmerah', "");
    }
    if (jawab2.className.indexOf('boxmerah') == -1){
      jawab2.className = jawab2.className.replace('boxhijau', "");
    }
    document.getElementById('icon2').innerHTML = ""; 
  }

  if(jawab2.value.length == 1){
    if(jawab2.value==3){
      document.getElementById('icon2').innerHTML = "<img src='../img/true.png' width='15px'>";
      if (jawab2.className.indexOf('boxhijau') == -1) {
        if (jawab2.className.indexOf('boxmerah') == -1) {
          jawab2.className += ' boxhijau';
        } else {
          jawab2.className = jawab2.className.replace('boxmerah', 'boxhijau');
        }
      }
      document.getElementById('lanjutt6').className = document.getElementById('lanjutt6').className.replace('hilang','');
      document.getElementById('lanjuttt6').className = document.getElementById('lanjuttt6').className.replace('hilang','');
    } else{
      document.getElementById('icon2').innerHTML = "<img src='../img/false.png' width='15px'>";
      if (jawab2.className.indexOf('boxmerah') == -1) {
        if (jawab2.className.indexOf('boxhijau') == -1) {
          jawab2.className += ' boxmerah';
        } else {
          jawab2.className = jawab2.className.replace('boxhijau', 'boxmerah');
        }
      }
    }

  }

})

let jawab3 = document.querySelector('.jawabb2');

// function agar saat di enter tidak dijalankan 
jawab3.addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
});

jawab3.addEventListener('keyup', function(){
  console.log(jawab3.value);
  if (jawab3.value.length == 0) {
    if(jawab3.className.indexOf('boxhijau') == -1){
      jawab3.className = jawab3.className.replace('boxmerah', "");
    }
    if (jawab3.className.indexOf('boxmerah') == -1){
      jawab3.className = jawab3.className.replace('boxhijau', "");
    }
    document.getElementById('icon3').innerHTML = ""; 
  }

  if(jawab3.value.length == 1){
    if(jawab3.value==8){
      document.getElementById('icon3').innerHTML = "<img src='../img/true.png' width='15px'>";
      if (jawab3.className.indexOf('boxhijau') == -1) {
        if (jawab3.className.indexOf('boxmerah') == -1) {
          jawab3.className += ' boxhijau';
        } else {
          jawab3.className = jawab3.className.replace('boxmerah', 'boxhijau');
        }
      }
      document.getElementById('lanjut6').className = document.getElementById('lanjut6').className.replace('hilang','');
      document.getElementById('lanjut7').className = document.getElementById('lanjut7').className.replace('hilang','');
    } else{
      document.getElementById('icon3').innerHTML = "<img src='../img/false.png' width='15px'>";
      if (jawab3.className.indexOf('boxmerah') == -1) {
        if (jawab3.className.indexOf('boxhijau') == -1) {
          jawab3.className += ' boxmerah';
        } else {
          jawab3.className = jawab3.className.replace('boxhijau', 'boxmerah');
        }
      }
    }

  }

})

// let jawab2 = document.querySelectorAll('.jawab2');
// let icon = document.querySelectorAll('#icon2');
// let benar = 0;

// for(var i=0; i<jawab2.length; i++){
  
//   // function agar saat di enter tidak dijalankan 
//   jawab2[i].addEventListener('keypress', function(e){
//     if (e.keyCode == 13) {
//               e.preventDefault();
//               return false;
//           }
//   })

//   jawab2[i].addEventListener('keyup', function(){
//     console.log(jawab2[i]);
//     console.log(jawab2[i].value);
//     if (jawab2[i].value.length==0) {
//       if(jawab2[i].className.indexOf('boxhijau') == -1){
//         jawab2[i].className = jawab2[i].className.replace('boxmerah', "");
//       }
//       if (jawab2[i].className.indexOf('boxmerah') == -1){
//         jawab2[i].className = jawab2[i].className.replace('boxhijau', "");
//       }
//       icon[i].innerHTML = ""; 
//     }

//     if (jawab2[i].value.length == 1){
      
//       if(i==0){
//         if(jawab2[0].value==3){
//           icon[0].innerHTML = "<img src='../img/true.png' width='15px'>";
//           if (jawab2[0].className.indexOf('boxhijau') == -1) {
//             if (jawab2[0].className.indexOf('boxmerah') == -1) {
//               jawab2[0].className += ' boxhijau';
//             } else {
//               jawab2[0].className = jawab2[0].className.replace('boxmerah', 'boxhijau');
//             }
//           }
//           benar +=1;
//         } else{
//           icon[0].innerHTML = "<img src='../img/false.png' width='15px'>";
//           if (jawab2[0].className.indexOf('boxmerah') == -1) {
//             if (jawab2[0].className.indexOf('boxhijau') == -1) {
//               jawab2[0].className += ' boxmerah';
//             } else {
//               jawab2[0].className = jawab2[0].className.replace('boxhijau', 'boxmerah');
//             }
//           }
//         }
//       }

//       if(i==1){
//         if(jawab2[1].value==8){
//           icon[1].innerHTML = "<img src='../img/true.png' width='15px'>";
//           if (jawab2[1].className.indexOf('boxhijau') == -1) {
//             if (jawab2[1].className.indexOf('boxmerah') == -1) {
//               jawab2[1].className += ' boxhijau';
//             } else {
//               jawab2[1].className = jawab2[1].className.replace('boxmerah', 'boxhijau');
//             }
//           }
//           benar +=1;
//         } else{
//           icon[1].innerHTML = "<img src='../img/false.png' width='15px'>";
//           if (jawab2[1].className.indexOf('boxmerah') == -1) {
//             if (jawab2[1].className.indexOf('boxhijau') == -1) {
//               jawab2[1].className += ' boxmerah';
//             } else {
//               jawab2[1].className = jawab2[1].className.replace('boxhijau', 'boxmerah');
//             }
//           }
//         }
//       }

//       if(benar==2){
//         document.getElementById('lanjut6').className = document.getElementById('lanjut6').className.replace('hilang','');
//         document.getElementById('lanjut7').className = document.getElementById('lanjut7').className.replace('hilang','');
//       }

//     }

//   })


// }

let jawab1 = document.querySelector('.jawab1');

// function agar saat di enter tidak dijalankan 
jawab1.addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
});

jawab1.addEventListener('keyup', function(){
  
  if (jawab1.value.length == 0) {
    if(jawab1.className.indexOf('boxhijau') == -1){
      jawab1.className = jawab1.className.replace('boxmerah', "");
    }
    if (jawab1.className.indexOf('boxmerah') == -1){
      jawab1.className = jawab1.className.replace('boxhijau', "");
    } 
  }

  if(jawab1.value.length == 1){

    if(jawab1.value==8){
      if (jawab1.className.indexOf('boxhijau') == -1) {
        if (jawab1.className.indexOf('boxmerah') == -1) {
          jawab1.className += ' boxhijau';
        } else {
          jawab1.className = jawab1.className.replace('boxmerah', 'boxhijau');
        }
      }
      document.getElementById('lanjut8').className = document.getElementById('lanjut8').className.replace('hilang','');
    }

    else{
      if (jawab1.className.indexOf('boxmerah') == -1) {
        if (jawab1.className.indexOf('boxhijau') == -1) {
          jawab1.className += ' boxmerah';
        } else {
          jawab1.className = jawab1.className.replace('boxhijau', 'boxmerah');
        }
      }
    }

  }

});


let jawab4 = document.querySelector('.jawab4');

// function agar saat di enter tidak dijalankan 
jawab4.addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
});

jawab4.addEventListener('keyup', function(){
  
  if (jawab4.value.length == 0) {
    if(jawab4.className.indexOf('boxhijau') == -1){
      jawab4.className = jawab4.className.replace('boxmerah', "");
    }
    if (jawab4.className.indexOf('boxmerah') == -1){
      jawab4.className = jawab4.className.replace('boxhijau', "");
    } 
    document.getElementById('icon4').innerHTML = "";
  }

  if(jawab4.value.length == 3){

    if(jawab4.value==256){
      if (jawab4.className.indexOf('boxhijau') == -1) {
        if (jawab4.className.indexOf('boxmerah') == -1) {
          jawab4.className += ' boxhijau';
        } else {
          jawab4.className = jawab4.className.replace('boxmerah', 'boxhijau');
        }
      }
      document.getElementById('icon4').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('lanjut9').className = document.getElementById('lanjut9').className.replace('hilang','');
    }

    else{
      if (jawab4.className.indexOf('boxmerah') == -1) {
        if (jawab4.className.indexOf('boxhijau') == -1) {
          jawab4.className += ' boxmerah';
        } else {
          jawab4.className = jawab4.className.replace('boxhijau', 'boxmerah');
        }
      }
      document.getElementById('icon4').innerHTML = "<img src='../img/false.png' width='15px'>";
    }

  }

});
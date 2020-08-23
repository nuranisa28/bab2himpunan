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

/*kumpulan 1*/
function him1(){
  var himpunan = document.getElementById("himpunan2");
  var bhim = document.getElementById("bhim1");
  bhim.className += " hilang";
  document.getElementById("icon1").innerHTML = "<img src='../img/true.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
}
function bhim1(){
  var himpunan = document.getElementById("himpunan2");
  var him = document.getElementById("him1");
  him.className += " hilang";
  document.getElementById("icon1").innerHTML = "<img src='../img/false.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
}

/*kumpulan 2*/
function him2(){
  var himpunan = document.getElementById("himpunan3");
  var bhim = document.getElementById("bhim2");
  bhim.className += " hilang";
  document.getElementById("icon2").innerHTML = "<img src='../img/true.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
}
function bhim2(){
  var himpunan = document.getElementById("himpunan3");
  var him = document.getElementById("him2");
  him.className += " hilang";
  document.getElementById("icon2").innerHTML = "<img src='../img/false.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
}

/*kumpulan 3*/
function him3(){
  var himpunan = document.getElementById("himpunan4");
  var bhim = document.getElementById("bhim3");
  bhim.className += " hilang";
  document.getElementById("icon3").innerHTML = "<img src='../img/false.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
}
function bhim3(){
  var himpunan = document.getElementById("himpunan4");
  var him = document.getElementById("him3");
  him.className += " hilang";
  document.getElementById("icon3").innerHTML = "<img src='../img/true.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
}

/*kumpulan 4*/
function him4(){
  var himpunan = document.getElementById("himpunan5");
  var bhim = document.getElementById("bhim4");
  bhim.className += " hilang";
  document.getElementById("icon4").innerHTML = "<img src='../img/false.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
}
function bhim4(){
  var himpunan = document.getElementById("himpunan5");
  var him = document.getElementById("him4");
  him.className += " hilang";
  document.getElementById("icon4").innerHTML = "<img src='../img/true.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
}

/*kumpulan 5*/
function him5(){
  var himpunan = document.getElementById("himpunan6");
  var bhim = document.getElementById("bhim5");
  bhim.className += " hilang";
  document.getElementById("icon5").innerHTML = "<img src='../img/true.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
}
function bhim5(){
  var himpunan = document.getElementById("himpunan6");
  var him = document.getElementById("him5");
  him.className += " hilang";
  document.getElementById("icon5").innerHTML = "<img src='../img/false.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
}

/*kumpulan 6*/
function him6(){
  var himpunan = document.getElementById("bahas");
  var peng = document.getElementById("pengertian");
  var bhim = document.getElementById("bhim6");
  bhim.className += " hilang";
  document.getElementById("icon6").innerHTML = "<img src='../img/false.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
  peng.className = peng.className.replace("hilang","");
}
function bhim6(){
  var himpunan = document.getElementById("bahas");
  var peng = document.getElementById("pengertian");
  var him = document.getElementById("him6");
  him.className += " hilang";
  document.getElementById("icon6").innerHTML = "<img src='../img/true.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
  peng.className = peng.className.replace("hilang","");
}
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBfW3Tm1MAqb_czo0PkvOKGi0rJv2_pzeE",
    authDomain: "tesformatif.firebaseapp.com",
    databaseURL: "https://tesformatif.firebaseio.com",
    projectId: "tesformatif",
    storageBucket: "tesformatif.appspot.com",
    messagingSenderId: "187859029128",
    appId: "1:187859029128:web:fc34e2afddd00b12bf233d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyAk0P_VKEPe3wNgNVldkvo7kJMiOCM5l6g",
//     authDomain: "bab2himpunan.firebaseapp.com",
//     databaseURL: "https://bab2himpunan.firebaseio.com",
//     projectId: "bab2himpunan",
//     storageBucket: "bab2himpunan.appspot.com",
//     messagingSenderId: "742624929752",
//     appId: "1:742624929752:web:0bdd95bc44453b5eec74ad"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

window.load = function () {


}

let kelasfix = '';
let sekolahfix = '';

function readlah() {
    var task = firebase.database().ref("tesformatif/");
    let tmp = document.querySelector('.disini');
    tmp.innerHTML = "";
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    

    if (kelasnya.value == "1") {
        kelasfix = "7A";
    } else if (kelasnya.value == "2") {
        kelasfix = "7B";
    } else if (kelasnya.value == "3") {
        kelasfix = "7C";
    } else if (kelasnya.value == "4") {
        kelasfix = "7D";
    } else if (kelasnya.value == "5") {
        kelasfix = "7E";
    } else if (kelasnya.value == "6") {
        kelasfix = "7F";
    } else if (kelasnya.value == "7") {
        kelasfix = "7G";
    } else if (kelasnya.value == "8") {
        kelasfix = "7H";
    } else if (kelasnya.value == "9") {
        kelasfix = "7I";
    }

    if (sekolah.value == "1") {
        sekolahfix = "SMP Negeri 2 Banjarmasin";
    } else if (sekolah.value == "2") {
        sekolahfix = "SMP Negeri 9 Banjarmasin";
    }

    if ((sekolahfix != '') && (kelasfix != '')) {
        document.getElementById('btnExport').className = document.getElementById('btnExport').className.replace('hilang','');
        task.orderByChild("nama").on("child_added", function (data) {
            var taskvalue = data.val();


            if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
                tmp.innerHTML += `<tr>
                            <td class="ukr1">${taskvalue.sekolah}</td>
                            <td class="ukr3">${taskvalue.kelas}</td>
                            <td class="ukr1">${taskvalue.nama}</td>
                            <td class="ukr3">${taskvalue.nilai}</td>
                            <td class="ukr2">${taskvalue.hari}</td>
                            <td class="ukr2">${taskvalue.waktu}</td>
                        </tr>`;
            }
        });

    }  else {
        alert('Tentukan terlebih dahulu filter pencarian');
    }



}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    kelasnya.value = value = "0";
    sekolah.value = value = "0";
}

//tombol cetak
let download = document.querySelector('.download');
download.addEventListener('click', function(){
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download  = 'tesformatif_' + kelasfix + '_' + sekolahfix + '.xls';
    a.click();
})
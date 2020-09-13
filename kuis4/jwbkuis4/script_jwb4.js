// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCCLOtIGs3ehNaUJkjmqxZpIYSCOmnXM7g",
    authDomain: "kuis4-4b1d4.firebaseapp.com",
    databaseURL: "https://kuis4-4b1d4.firebaseio.com",
    projectId: "kuis4-4b1d4",
    storageBucket: "kuis4-4b1d4.appspot.com",
    messagingSenderId: "126897709045",
    appId: "1:126897709045:web:36d1f059c1d0825c7d4abc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

window.load = function () {


}

let kmplanId = [];





let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
sekolah = document.getElementById('sekolah');
let kelasfix = '';
let sekolahfix = '';

let cek11 = 0;



function readlah() {
    var task = firebase.database().ref("kuis4/");

    tmp.innerHTML = "";
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


    let jwbfixx = [];

    let jwb4 = ["a", "c", "b", "d", "b", "d", "a", "a", "b", "a"];
    
        let hhh = `<tr><td class="nah" colspan="2">Kunci Jawaban </td>`;
        for (let i = 0; i < jwb4.length; i++) {
            hhh += `<td class = "nah"> ${jwb4[i]}</td>`;
        }
        hhh += `</tr>`;
        tmp.innerHTML += hhh;
        jwbfixx = jwb4;
    

    if ((sekolahfix != '') && (kelasfix != '')) {
        document.getElementById('btnExport').className = document.getElementById('btnExport').className.replace('hilang','');
        task.orderByChild("nama").on("child_added", function (data) {
            // task.on("child_added", function (data) {
            var taskvalue = data.val();




            if ((sekolahfix == taskvalue.sekolah) && (kelasfix == taskvalue.kelas)) {
                let mm = '';
                mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
                // console.log(taskvalue.jawabannya[0]);


                for (let i = 0; i < jwbfixx.length; i++) {
                    if (taskvalue.jawabannya[i] == jwbfixx[i]) {
                        mm += `<td class="benar">${taskvalue.jawabannya[i]}</td>`;
                    } else {
                        mm += `<td class="salah">${taskvalue.jawabannya[i]}</td>`;
                    }
                }
                mm += `</tr>`;
                tmp.innerHTML += mm;
            }

        });





    } else {
        alert('Tentukan filter pencarian');
    }



}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    kelasnya.value = value = "0";
    sekolah.value = value = "0";
}




// download data

let download = document.querySelector('.download');
download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');
    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = 'jawaban_kuis4_' + kelasfix + '_' + sekolahfix + '.xls';
    a.click();
})
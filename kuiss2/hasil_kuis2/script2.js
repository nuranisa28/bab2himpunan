// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3NbMeyJN0mgX9mrlfNVkrqeAKkN2CWBM",
    authDomain: "kuis2-5e70d.firebaseapp.com",
    databaseURL: "https://kuis2-5e70d.firebaseio.com",
    projectId: "kuis2-5e70d",
    storageBucket: "kuis2-5e70d.appspot.com",
    messagingSenderId: "771519504144",
    appId: "1:771519504144:web:7a494c9f901229cf57cf95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

window.load = function () {


}

function readlah() {
    var task = firebase.database().ref("kuis2/");
    let tmp = document.querySelector('.disini');
    tmp.innerHTML = "";
    kelasnya = document.getElementById('kelas');
    sekolah = document.getElementById('sekolah');
    let kelasfix = '';
    let sekolahfix = '';

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
        task.on("child_added", function (data) {
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

    } else if (sekolahfix != '') {
        task.on("child_added", function (data) {
            var taskvalue = data.val();


            if ((sekolahfix == taskvalue.sekolah)) {
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
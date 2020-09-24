// firebase.initializeApp({
//     apiKey: "AIzaSyBfW3Tm1MAqb_czo0PkvOKGi0rJv2_pzeE",
//     authDomain: "tesformatif.firebaseapp.com",
//     databaseURL: "https://tesformatif.firebaseio.com",
//     projectId: "tesformatif",
//     storageBucket: "tesformatif.appspot.com",
//     messagingSenderId: "187859029128",
//     appId: "1:187859029128:web:fc34e2afddd00b12bf233d"
//   });

// var fire5 = firebase.initializeApp({
//     apiKey: "AIzaSyCNgkIeYt3xlrryKg7wI8dFxRKE532hLC0",
//     appId: "1:749812562839:web:32222e1df666607eafa2d2",
//     projectId: "kuis5-659b8",
//     databaseURL: "https://kuis5-659b8.firebaseio.com",
//     storageBucket: "kuis5-659b8.appspot.com"
//   }, "kuis5");


//firebase default
// Your web app's Firebase configuration
var firebaseConfig6 = {
    apiKey: "AIzaSyBfW3Tm1MAqb_czo0PkvOKGi0rJv2_pzeE",
    authDomain: "tesformatif.firebaseapp.com",
    databaseURL: "https://tesformatif.firebaseio.com",
    projectId: "tesformatif",
    storageBucket: "tesformatif.appspot.com",
    messagingSenderId: "187859029128",
    appId: "1:187859029128:web:fc34e2afddd00b12bf233d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig6);
  var task6 = firebase.database().ref("kontroltes/");

// Initialize another app
//firebase kuis 5
var firebaseConfig5 = {
    apiKey: "AIzaSyCNgkIeYt3xlrryKg7wI8dFxRKE532hLC0",
    appId: "1:749812562839:web:32222e1df666607eafa2d2",
    projectId: "kuis5-659b8",
    databaseURL: "https://kuis5-659b8.firebaseio.com",
    storageBucket: "kuis5-659b8.appspot.com"
  };
  // Initialize Firebase
  var fire5 = firebase.initializeApp(firebaseConfig5,"kuis5");
  var task5 = fire5.database().ref("kontrolkuis5/");

// Initialize another app
//firebase kuis 4
var firebaseConfig4 = {
    apiKey: "AIzaSyCCLOtIGs3ehNaUJkjmqxZpIYSCOmnXM7g",
    appId: "1:126897709045:web:36d1f059c1d0825c7d4abc",
    projectId: "kuis4-4b1d4",
    databaseURL: "https://kuis4-4b1d4.firebaseio.com",
    storageBucket: "kuis4-4b1d4.appspot.com"
  };
  // Initialize Firebase
  var fire4 = firebase.initializeApp(firebaseConfig4,"kuis4");
  var task4 = fire4.database().ref("kontrolkuis4/");

// Initialize another app
//firebase kuis 3
var firebaseConfig3 = {
    apiKey: "AIzaSyB9KVvW24SKfvlcbOeCkaDNtTMQyHgLlUQ",
    appId: "1:722461669929:web:69aebf10d48d59d33c3a38",
    projectId: "kuis3-cfd17",
    databaseURL: "https://kuis3-cfd17.firebaseio.com",
    storageBucket: "kuis3-cfd17.appspot.com"
  };
  // Initialize Firebase
  var fire3 = firebase.initializeApp(firebaseConfig3,"kuis3");
  var task3 = fire3.database().ref("kontrolkuis3/");

// Initialize another app
//firebase kuis 2
var firebaseConfig2 = {
    apiKey: "AIzaSyB3NbMeyJN0mgX9mrlfNVkrqeAKkN2CWBM",
    appId: "1:771519504144:web:7a494c9f901229cf57cf95",
    projectId: "kuis2-5e70d",
    databaseURL: "https://kuis2-5e70d.firebaseio.com",
    storageBucket: "kuis2-5e70d.appspot.com"
  };
  // Initialize Firebase
  var fire2 = firebase.initializeApp(firebaseConfig2,"kuis2");
  var task2 = fire2.database().ref("kontrolkuis2/");

// Initialize another app
//firebase kuis 1
var firebaseConfig1 = {
    apiKey: "AIzaSyBDwro-fWKgKk_8qR1_AnWQtWuYWyf_NMc",
    appId: "1:968246848051:web:c6c755c17edc51187fd146",
    projectId: "kuis1-32094",
    databaseURL: "https://kuis1-32094.firebaseio.com",
    storageBucket: "kuis1-32094.appspot.com"
  };
  // Initialize Firebase
  var fire1 = firebase.initializeApp(firebaseConfig1,"kuis1");
  var task1 = fire1.database().ref("kontrolkuis1/");


//cek semua firebase
console.log(firebase.app().name);  // "[DEFAULT]"
console.log(fire5.name);
console.log(fire4.name);
console.log(fire3.name);
console.log(fire2.name);
console.log(fire1.name);

//jalankan fungsi
window.load = function () {
    readlah();
}

function readlah() {
    
    ////// kontrol kuis 1
    let tmp1 = document.querySelector('.kuis1');
    task1.on("child_added", function (data) {
        var taskvalue1 = data.val();
        if (taskvalue1.nilai == 0) {
            tmp1.innerHTML += `
                            <td class="ukr1">${taskvalue1.nama}</td>
                            <td class="ukr2 kunci"><i class="fa fa-lock" aria-hidden="true"></i> Terkunci</td>
                            <td class="ukr2"><button class="aksibuk" onclick="update1(${taskvalue1.id},'${taskvalue1.nama}','${taskvalue1.nilai}')"><i class="fa fa-unlock" aria-hidden="true"></i> Buka Halaman</button></td>
                        `;
        } else {
            tmp1.innerHTML += `
                            <td class="ukr1">${taskvalue1.nama}</td>
                            <td class="ukr2 buka"><i class="fa fa-unlock" aria-hidden="true"></i> Terbuka</td>
                            <td class="ukr2"><button class="aksikun" onclick="update1(${taskvalue1.id},'${taskvalue1.nama}','${taskvalue1.nilai}')"><i class="fa fa-lock" aria-hidden="true"></i> Kunci Halaman</button></td>
                        `;
        }
    });


    ////// kontrol kuis 2
    let tmp2 = document.querySelector('.kuis2');
    task2.on("child_added", function (data) {
        var taskvalue2 = data.val();
        if (taskvalue2.nilai == 0) {
            tmp2.innerHTML += `
                            <td class="ukr1">${taskvalue2.nama}</td>
                            <td class="ukr2 kunci"><i class="fa fa-lock" aria-hidden="true"></i> Terkunci</td>
                            <td class="ukr2"><button class="aksibuk" onclick="update2(${taskvalue2.id},'${taskvalue2.nama}','${taskvalue2.nilai}')"><i class="fa fa-unlock" aria-hidden="true"></i> Buka Halaman</button></td>
                        `;
        } else {
            tmp2.innerHTML += `
                            <td class="ukr1">${taskvalue2.nama}</td>
                            <td class="ukr2 buka"><i class="fa fa-unlock" aria-hidden="true"></i> Terbuka</td>
                            <td class="ukr2"><button class="aksikun" onclick="update2(${taskvalue2.id},'${taskvalue2.nama}','${taskvalue2.nilai}')"><i class="fa fa-lock" aria-hidden="true"></i> Kunci Halaman</button></td>
                        `;
        }
    });


    ////// kontrol kuis 3
    let tmp3 = document.querySelector('.kuis3');
    task3.on("child_added", function (data) {
        var taskvalue3 = data.val();
        if (taskvalue3.id == "1600789111521"){
            if (taskvalue3.nilai == 0) {
                tmp3.innerHTML += `
                                <td class="ukr1">${taskvalue3.nama}</td>
                                <td class="ukr2 kunci"><i class="fa fa-lock" aria-hidden="true"></i> Terkunci</td>
                                <td class="ukr2"><button class="aksibuk" onclick="update3(${taskvalue3.id},'${taskvalue3.nama}','${taskvalue3.nilai}')"><i class="fa fa-unlock" aria-hidden="true"></i> Buka Halaman</button></td>
                            `;
            } else {
                tmp3.innerHTML += `
                                <td class="ukr1">${taskvalue3.nama}</td>
                                <td class="ukr2 buka"><i class="fa fa-unlock" aria-hidden="true"></i> Terbuka</td>
                                <td class="ukr2"><button class="aksikun" onclick="update3(${taskvalue3.id},'${taskvalue3.nama}','${taskvalue3.nilai}')"><i class="fa fa-lock" aria-hidden="true"></i> Kunci Halaman</button></td>
                            `;
            }
        }
    });


    ////// kontrol kuis 4
    let tmp4 = document.querySelector('.kuis4');
    task4.on("child_added", function (data) {
        var taskvalue4 = data.val();
        if (taskvalue4.nilai == 0) {
            tmp4.innerHTML += `
                            <td class="ukr1">${taskvalue4.nama}</td>
                            <td class="ukr2 kunci"><i class="fa fa-lock" aria-hidden="true"></i> Terkunci</td>
                            <td class="ukr2"><button class="aksibuk" onclick="update4(${taskvalue4.id},'${taskvalue4.nama}','${taskvalue4.nilai}')"><i class="fa fa-unlock" aria-hidden="true"></i> Buka Halaman</button></td>
                        `;
        } else {
            tmp4.innerHTML += `
                            <td class="ukr1">${taskvalue4.nama}</td>
                            <td class="ukr2 buka"><i class="fa fa-unlock" aria-hidden="true"></i> Terbuka</td>
                            <td class="ukr2"><button class="aksikun" onclick="update4(${taskvalue4.id},'${taskvalue4.nama}','${taskvalue4.nilai}')"><i class="fa fa-lock" aria-hidden="true"></i> Kunci Halaman</button></td>
                        `;
        }
    });


    ////// kontrol kuis 5
    let tmp5 = document.querySelector('.kuis5');
    task5.on("child_added", function (data) {
        var taskvalue5 = data.val();
        if (taskvalue5.nilai == 0) {
            tmp5.innerHTML += `
                            <td class="ukr1">${taskvalue5.nama}</td>
                            <td class="ukr2 kunci"><i class="fa fa-lock" aria-hidden="true"></i> Terkunci</td>
                            <td class="ukr2"><button class="aksibuk" onclick="update5(${taskvalue5.id},'${taskvalue5.nama}','${taskvalue5.nilai}')"><i class="fa fa-unlock" aria-hidden="true"></i> Buka Halaman</button></td>
                        `;
        } else {
            tmp5.innerHTML += `
                            <td class="ukr1">${taskvalue5.nama}</td>
                            <td class="ukr2 buka"><i class="fa fa-unlock" aria-hidden="true"></i> Terbuka</td>
                            <td class="ukr2"><button class="aksikun" onclick="update5(${taskvalue5.id},'${taskvalue5.nama}','${taskvalue5.nilai}')"><i class="fa fa-lock" aria-hidden="true"></i> Kunci Halaman</button></td>
                        `;
        }
    });
    
    
    /////kontrol tes formatif
    let tmp6 = document.querySelector('.tes');
    task6.on("child_added", function (data) {
        var taskvalue6 = data.val();
        if (taskvalue6.nilai == 0) {
            tmp6.innerHTML += `
                            <td class="ukr1">${taskvalue6.nama}</td>
                            <td class="ukr2 kunci"><i class="fa fa-lock" aria-hidden="true"></i> Terkunci</td>
                            <td class="ukr2"><button class="aksibuk" onclick="update6(${taskvalue6.id},'${taskvalue6.nama}','${taskvalue6.nilai}')"><i class="fa fa-unlock" aria-hidden="true"></i> Buka Halaman</button></td>
                        `;
        } else {
            tmp6.innerHTML += `
                            <td class="ukr1">${taskvalue6.nama}</td>
                            <td class="ukr2 buka"><i class="fa fa-unlock" aria-hidden="true"></i> Terbuka</td>
                            <td class="ukr2"><button class="aksikun" onclick="update6(${taskvalue6.id},'${taskvalue6.nama}','${taskvalue6.nilai}')"><i class="fa fa-lock" aria-hidden="true"></i> Kunci Halaman</button></td>
                        `;
        }
    });

}

function update1(id, nama, nilai) {

    if (nilai == 0) {
        nilaibaru = 1;
    } else {
        nilaibaru = 0;
    }
    var taskUpdate = {
        nama: nama,
        id: id,
        nilai: nilaibaru
    }

    let db = fire1.database().ref("kontrolkuis1/" + id);
    db.set(taskUpdate);
    window.location = "hal_kontrol.html";

}

function update2(id, nama, nilai) {

    if (nilai == 0) {
        nilaibaru = 1;
    } else {
        nilaibaru = 0;
    }
    var taskUpdate = {
        nama: nama,
        id: id,
        nilai: nilaibaru
    }

    let db = fire2.database().ref("kontrolkuis2/" + id);
    db.set(taskUpdate);
    window.location = "hal_kontrol.html";

}

function update3(id, nama, nilai) {

    if (nilai == 0) {
        nilaibaru = 1;
    } else {
        nilaibaru = 0;
    }
    var taskUpdate = {
        nama: nama,
        id: id,
        nilai: nilaibaru
    }

    let db = fire3.database().ref("kontrolkuis3/" + id);
    db.set(taskUpdate);
    window.location = "hal_kontrol.html";

}

function update4(id, nama, nilai) {

    if (nilai == 0) {
        nilaibaru = 1;
    } else {
        nilaibaru = 0;
    }
    var taskUpdate = {
        nama: nama,
        id: id,
        nilai: nilaibaru
    }

    let db = fire4.database().ref("kontrolkuis4/" + id);
    db.set(taskUpdate);
    window.location = "hal_kontrol.html";

}

function update5(id, nama, nilai) {

    if (nilai == 0) {
        nilaibaru = 1;
    } else {
        nilaibaru = 0;
    }
    var taskUpdate = {
        nama: nama,
        id: id,
        nilai: nilaibaru
    }

    let db = fire5.database().ref("kontrolkuis5/" + id);
    db.set(taskUpdate);
    window.location = "hal_kontrol.html";

}


function update6(id, nama, nilai) {

    if (nilai == 0) {
        nilaibaru = 1;
    } else {
        nilaibaru = 0;
    }
    var taskUpdate = {
        nama: nama,
        id: id,
        nilai: nilaibaru
    }

    let db = firebase.database().ref("kontroltes/" + id);
    db.set(taskUpdate);
    window.location = "hal_kontrol.html";

}
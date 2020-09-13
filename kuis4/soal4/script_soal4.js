let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {
    
    cek = [];
    jwbs = [];
    hasilakhir = 0;
    benarr = 0;
    salahh = 0;

    if (dat.readyState == 4 && dat.status == 200) {
        // tankap apapun responsnya tangkap,lalu diubah ke objeck
        let data = JSON.parse(this.responseText);
        // melihat data 
        // console.log(data);

        // ---------------------------------
        // acak urutan soal
        //random urutan
        // for (let x = 0; x < 100; x++) {
        //     // acak angka dengan batas length.data dan minimum 0
        //     let angka = Math.floor(Math.random() * data.length) + 0;
        //     cek.push(angka);
        // }
        // membuang angka yang sama
        cek = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        console.log(cek);
        // ---------------------------------
        // ambil data tertentu

        for (let i = 0; i < cek.length; i++) {
            let nilai = cek[i];

            let soaldata = data[nilai]["soal" + nilai]["soal"];
            let jwb0 = data[nilai]["soal" + nilai]["a"];
            let jwb1 = data[nilai]["soal" + nilai]["b"];
            let jwb2 = data[nilai]["soal" + nilai]["c"];
            let jwb3 = data[nilai]["soal" + nilai]["d"];
            let nih = data[nilai]["soal" + nilai]["nih"];
            let bnr = data[nilai]["soal" + nilai]["benar"];

            let jwb = [jwb0, jwb1, jwb2, jwb3, nih];

            jwbs.push(bnr);

            // ---------------------------------
            // // rangkai konten soal;
            // let bg_pertanyaan = document.getElementById('bg_pertanyaan');
            // if (i != 0) {
            //     bg_pertanyaan.className += " hilang";
            // }

            //nomor ke-
            let nomor = document.querySelectorAll(".soal #nomornya");
            nomor[i].innerHTML = i+1;

            //soal
            let soal = document.querySelectorAll(".bg_pertanyaan #soalnya");
            soal[i].innerHTML = soaldata;
            
            //pilihan a
            let piliha = document.querySelectorAll(".textnya #pilihannya0");
            piliha[i].innerHTML = jwb0;

            //pilihan b
            let pilihb = document.querySelectorAll(".textnya #pilihannya1");
            pilihb[i].innerHTML = jwb1;
            
            //pilihan c
            let pilihc = document.querySelectorAll(".textnya #pilihannya2");
            pilihc[i].innerHTML = jwb2;

            //pilihan d
            let pilihd = document.querySelectorAll(".textnya #pilihannya3");
            pilihd[i].innerHTML = jwb3;

            let benar = document.querySelectorAll(".jwbbenar #jawabannya");
            benar[i].innerHTML = "Jawaban : " + nih; 
            
            // let bg_pertanyaan = document.getElementsByClassName("bg_pertanyaan");
            
            // for(let u=0; u<bg_pertanyaan.length; u++){
            //     if(u!=0){
            //         if(bg_pertanyaan[u].className.indexOf('hilang') == -1){
            //             bg_pertanyaan[u].className += " hilang";
                            
            //             }
            //     }
            // }
            // //nomor ke
            // document.getElementById('nomornya').innerHTML = i+1;

            // // ---------------------------------

            // //soal
            // document.getElementById("soalnya").innerHTML = soaldata;

            // // ---------------------------------

            

            // // ---------------------------------

            

            // // ---------------------------------

            // //tombol selanjutnya
            // let nav_selanjut = document.getElementById("nav_selanjut");
            // if (i == (cek.length - 1)) {
            //     nav_selanjut.className += " disable";
            // }

            // ---------------------------------

            // ---------------------------------


        }

    

    }
}
dat.open('GET', '../data_kuis4.json', true);
dat.send();
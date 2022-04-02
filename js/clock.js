let girilen_isim = prompt("İsminizi Girin")

let önyüz_yanıt = document.querySelector("#myName")

önyüz_yanıt.innerHTML = `${girilen_isim}`

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
    let thisday = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    d = 
    (d==1) ? " Pazartesi ":
    (d==2) ? " Salı ":
    (d==3) ? " Çarşamba ":
    (d==4) ? " Perşembe ":
    (d==5) ? " Cuma ":
    (d==6) ? " Cumartesi ":
    " Pazar ";

    month = 
    (month==0) ? " Ocak ":
    (month==1) ? " Şubat ":
    (month==2) ? " Mart ":
    (month==3) ? " Nisan ":
    (month==4) ? " Mayıs ":
    (month==5) ? " Haziran ":
    (month==6) ? " Ocak ":
    (month==7) ? " Şubat ":
    (month==8) ? " Mart ":
    (month==9) ? " Nisan ":
    (month==10) ? " Mayıs ":
    " Pazar";


    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + d + thisday + month + year;
    setTimeout(startTime);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


var deger = prompt("Kaç Sayı istersiniz? (2 veya 3)");
var toplam, cıkar, carp, bol;
var sayi1, sayi2, sayi3, sayi4, sayi5;
if (deger == 2) {
    //Değişkenler
    sayi1 = prompt("1.Sayı: ");
    sayi2 = prompt("2.Sayı: ");
    //İşlemler
    toplam = Number(sayi1)+Number(sayi2);
    carp = Number(sayi1)*Number(sayi2);
    if (Number(sayi1) > Number(sayi2)) {
        cıkar = Number(sayi1)-Number(sayi2);
        bol = Number(sayi1)/Number(sayi2)
    }else if (Number(sayi1) < Number(sayi2)) {
        cıkar = Number(sayi2)-Number(sayi1);
        bol = Number(sayi2)/Number(sayi1)
    }
    //Sonuçlar
    alert("Toplama Sonucu: "+toplam+" Çıkarma Sonucu: "+cıkar+" Çarpma Sonucu: "+carp+" Bölme Sonucu: "+bol)
}
if (deger == 3) {
    //Değişkenler
    sayi1 = prompt("1.Sayı: ");
    sayi2 = prompt("2.Sayı: ");
    sayi3 = prompt("3.Sayı: ");
    //İşlemler
    toplam = Number(sayi1)+Number(sayi2)+Number(sayi3);
    carp = Number(sayi1)*Number(sayi2)*Number(sayi3);
    if (sayi1 > sayi2 && sayi1 > sayi3) {
        if (sayi2 > sayi3) {
            cıkar = Number(sayi1)-Number(sayi2)-Number(sayi3);
            bol = Number(sayi1)-Number(sayi2)-Number(sayi3);
        }else{
            cıkar = Number(sayi1)-Number(sayi3)-Number(sayi2);
            bol = Number(sayi1)/Number(sayi3)/Number(sayi2);
        }
    }
    if (sayi2 > sayi1 && sayi2 > sayi3) {
        if (sayi1 > sayi3) {
            cıkar = Number(sayi2)-Number(sayi1)-Number(sayi3);
            bol = Number(sayi2)-Number(sayi1)-Number(sayi3);
        }else{
            cıkar = Number(sayi2)-Number(sayi3)-Number(sayi1);
            bol = Number(sayi2)/Number(sayi3)/Number(sayi1);
        }
    }
    if (sayi3 > sayi1 && sayi3 > sayi2) {
        if (sayi1 > sayi2) {
            cıkar = Number(sayi3)-Number(sayi1)-Number(sayi2);
            bol = Number(sayi3)-Number(sayi1)-Number(sayi2);
        }else{
            cıkar = Number(sayi3)-Number(sayi2)-Number(sayi1);
            bol = Number(sayi3)/Number(sayi2)/Number(sayi1);
        }
    }
    //Sonuçlar
    alert("Toplama Sonucu: "+toplam+" Çıkarma Sonucu: "+cıkar+" Çarpma Sonucu: "+carp+" Bölme Sonucu: "+bol)
}

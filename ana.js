//console.log('hi');
document.write ('merhaba dünya' + "</br>");
let x=7;
let y=3
let z=x+y; 
document.write ('z=' + z + "</br>");
var isim= "sun"; //string 
document.write ('adın: ' + isim + "</br>");
var soyad="summer";
document.write ('Soyadın: ' + soyad + "</br>");
var yaş=25, boy=200, kilo=75, memleket='university';
document.write('Age: ' + yaş + "</br>" + 'lenght= ' + boy + ' cm' + "</br>" + 'weigth: ' + kilo + ' kg ' + "</br>"+ 'city: ' + memleket + "</br>");
var havaYağmurluMu= true;//boolean önermeler doğru mu yanlış mı
document.write ('Hava yağmurlu mu?: ' + havaYağmurluMu + "</br>");
var toplam=2 + '2', toplam1= 2 + 2;
document.write ('toplam: ' + toplam + "</br>" + 'toplam1: ' + toplam1 + "</br>");
var yas= 20;
var yasyazi=yas.toString();

var yil="2022";
var yilsayi= Number(yil);

var yilsayi2=parseInt(yil);
var yilsayi3=parseFloat(yil);

document.write('degeR: '+ yilsayi2 + "</br>" );
document.write('yilsayi: '+ yilsayi + "</br>" );
var fiyat=22.345455;
document.write('fiyat: '+ fiyat.toFixed(3) + "</br>" );

document.write('Pi: '+ Math.PI + "</br>" );
document.write('Yuvarla: '+ Math.round(fiyat) + "</br>" );
document.write('tavana yuvarla: '+ Math.ceil(fiyat) + "</br>" );
document.write('zemine yuvarla: '+ Math.floor(fiyat) + "</br>" );

document.write('Üs: '+ Math.pow(2,2) + "</br>" );
document.write('max: '+ Math.max(2,1,0,-1,0,100) + "</br>" );
document.write('min: '+ Math.min(2,1,0,-1,0,100) + "</br>" );

var Tarih= new Date();
document.write('Tarih: '+ Tarih + "</br>" );
document.write('Greenwich Saati ve tarihi: '+ Tarih.toUTCString() + "</br>" );
// sayılar sıfırdan başlağıdı için 1 eksik gözükebilir//
document.write('AyınGünü: '+ Tarih.getDate() + "</br>" );
document.write('HaftanınGünü: '+ Tarih.getDay() + "</br>" );
document.write('Yıl: '+ Tarih.getFullYear() + "</br>" );
document.write('Saat: '+ Tarih.getHours() + "</br>" );
document.write('Milisaniye: '+ Tarih.getMilliseconds() + "</br>" );
document.write('Dakika: '+ Tarih.getMinutes() + "</br>" );
document.write('Ay: '+ Tarih.getMonth() + "</br>" );
document.write('Saniye: '+ Tarih.getSeconds() + "</br>" );
document.write('1970den beri: '+ Tarih.getTime() + "</br>" );
Tarih.setFullYear(2015);
document.write('zamanıGetir: '+ Tarih.getFullYear() + "</br>" );
//Listelere başlıyoruz iki yöntemle liste oluşturulur//

var liste = ['elma','armut','uzum','kivi','muz'];
var liste3= ['elma3','armut3','uzum3','kivi3','muz3'];
var liste2= new Array(1,5,5,2,6,8,1,10,-5,55,5,60);

document.write('Meyveler: '+ liste + "</br>" );
liste[5]="elmas";
liste[0]="patates";
document.write('liste: '+ liste + "</br>" );
document.write('Tür: '+ liste.sort() + "</br>" );
document.write('Uzunluk: '+ liste.length + "</br>" );
liste.push('elma'); //sona ekler
document.write('Menü: '+ liste + "</br>" );
liste.pop(); //sondan çıkarır
document.write('Menü: '+ liste + "</br>" );
liste.shift(); //başa ekler
document.write('Menü: '+ liste + "</br>" );
liste.unshift(); //baştan çıkarır
document.write('Menü: '+ liste + "</br>" );
delete liste [1]; //içini siler
document.write('Menü: '+ liste + "</br>" );

document.write('listemi: '+ Array.isArray(liste) + "</br>" ); //liste mi kontrol eder
document.write('listemi: '+ liste instanceof Array + "</br>" ); //liste mi kontrol eder
document.write('Menü: '+ liste + "</br>" );
liste= [];
document.write('liste: '+ liste + "</br>" );
document.write('tostring: '+ liste.toString() + "</br>" ); //metne dönüştürür
document.write('join: '+ liste.join(' / ') + "</br>" ); //ayrılma şeklini değiştirir

var liste = ['elma','armut','uzum','kivi','muz'];
var liste3= ['elma3','armut3','uzum3','kivi3','muz3'];
var liste2= new Array(1,5,5,2,6,8,1,10,-5,55,5,60);

document.write('join: '+ liste.join(' / ') + "</br>"); //ayrılma şeklini değiştirir




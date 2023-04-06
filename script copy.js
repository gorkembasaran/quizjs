// OOP: Nesne Tabanlı Programlama
// Object

// let soru = {
//     soruMetni : "Hangisi JS paket yönetim uygulamasıdır?",
//     cevapSecenekleri : {
//         a : "Node.js",
//         b : "Typescript",
//         c : "Npm"
//     },
//     dogruCevap : "c",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap;
//     }
// };
// let soru2 = {
//     soruMetni : "Hangisi .net paket yönetim uygulamasıdır?",
//     cevapSecenekleri : {
//         a : "Node.js",
//         b : "Typescript",
//         c : "Npm"
//     },
//     dogruCevap : "b",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap;
//     }
// };


// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7


function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    this.cevabıKontrolEt = function(cevap){
        return cevap === this.dogruCevap;
    }
}

let soru1 = new Soru("Hangisi JS paket yönetim uygulamasıdır?",{a : "Node.js",b : "Typescript",c : "Npm"}, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?",{a : "Node.js",b : "Nuget",c : "Npm"}, "b");

console.log(soru1.soruMetni);
console.log(soru1.cevabıKontrolEt("c"))
console.log(soru2.soruMetni);
console.log(soru2.dogruCevap)

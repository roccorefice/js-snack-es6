// #1
// //L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
// let numeroUno = Number(prompt("Scegli il primo numero!"));
// let numeroDue = Number(prompt("Scegli il secondo numero!"));
// const stampaNumMaggiore = (num1, num2) =>{
//   if (num1 > num2) {
//     return num1;
//   }else if (num1 < num2) {
//     return num2;
//   }
//   else {
//     return "riprova";
//   }
// }
// let numeroMaggiore = stampaNumMaggiore(numeroUno, numeroDue);
// console.log(numeroMaggiore);



// #2
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
// let numeroUtente = Number(prompt("Inserisci un numero"));
// const stampaSoloNumeroPari = num => {
//   if (num % 2 == 0){
//     return `Ottimo, numero pari: ${num}`
//   } else {
//     return `Mi dispiace non posso staparlo, ti stampo il successivo: ${num +1}`
//   }
// }
// let numeroPari = stampaSoloNumeroPari(numeroUtente);
// console.log(numeroPari);



// #3
//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
// let numInteri = [1, 20, 35, 46, 52, 69, 70, 88, 921];
// let numDaSommare = [];
// let sum = 0;
// for (let i = 0; i < numInteri.length; i++){
//   if (i % 2 === 0){
//     numDaSommare.push(numInteri[i]);
//   }
// }
// const sommaDegliElementiDentroArray = (arr) =>{
//   let totale = 0;
//   for ( let i = 0; i < arr.length; i++ ){
//     totale += arr[i];
//   }
//   return totale;
// }
// sum = sommaDegliElementiDentroArray(numDaSommare);
// console.log(numDaSommare);
// console.log(sum);



// #4
//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
// let parolaUno = prompt("Inserisci la prima parola");
// let parolaDue = prompt("Inserisci la seconda parola");
// let verifica = (parola1, parola2) => {
//   if (parola1.length < parola2.length) {
//     return parola1 + ", " + parola2;
//   }else if (parola2.length < parola1.length) {
//     return parola2 + ", " + parola1;
//   } else {
//     return "riprova";
//   }
// }
// let verificaUtente = verifica(parolaUno, parolaDue)
// console.log(verificaUtente);



// #5
// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero. 
// const number = prompt("Scrivi un numero a 4 cifre e io ti sommerò ogni cifra");
// let somma = 0;
// const sommaLeCifre = num => {
//   for (let i = 0; i < num.length; i++) {
//     let n = Number(number[i]);
//     somma = somma + n;
//   }
//   return somma
// }
// let sommaCifreUtente = sommaLeCifre(number);// console.log(number, sommaCifreUtente);



// #6
//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
// let numeri = [];
// const pushaSoloSeDispari = (num, array) => {
//     if (num % 2 ) {
//       return true
//        array.push(num);
//      }
//      return false;
// }
// for (let i = 0; i < 6; i++) {
//   let richiestaNumero = Number(prompt("scegli un numero"));
//   if (pushaSoloSeDispari(richiestaNumero)) {
//     numeri.push(richiestaNumero)
//   }
// }
// console.log(numeri);

// // Assicurati che il documento sia completamente caricato
// document.addEventListener("DOMContentLoaded", function () {
//     let currentIndex = 0; // Indice della slide corrente
//     const slides = document.querySelectorAll(".carousel-item"); // Tutte le slides
//     const nextButton = document.querySelector(".carousel-control-next"); // Bottone Next
//     const prevButton = document.querySelector(".carousel-control-prev"); // Bottone Previous
//     const indicators = document.querySelectorAll(".carousel-indicators button"); // Indicatori delle slides

//     // Funzione per mostrare la slide successiva
//     function showNextSlide() {
//         // Rimuovi la classe 'active' dalla slide corrente e dall'indicatore
//         slides[currentIndex].classList.remove("active");
//         indicators[currentIndex].classList.remove("active");

//         // Incrementa l'indice
//         currentIndex = (currentIndex + 1) % slides.length; // Torna a 0 dopo l'ultima slide

//         // Aggiungi la classe 'active' alla nuova slide e all'indicatore corrispondente
//         slides[currentIndex].classList.add("active");
//         indicators[currentIndex].classList.add("active");
//     }

//     // Funzione per mostrare la slide precedente
//     function showPrevSlide() {
//         // Rimuovi la classe 'active' dalla slide corrente e dall'indicatore
//         slides[currentIndex].classList.remove("active");
//         indicators[currentIndex].classList.remove("active");

//         // Decrementa l'indice
//         currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Torna all'ultima slide se è il primo

//         // Aggiungi la classe 'active' alla nuova slide e all'indicatore corrispondente
//         slides[currentIndex].classList.add("active");
//         indicators[currentIndex].classList.add("active");
//     }

//     // Gestione dei click sui pulsanti
//     nextButton.addEventListener("click", showNextSlide);
//     prevButton.addEventListener("click", showPrevSlide);

//     // Gestione dei click sugli indicatori
//     indicators.forEach((indicator, index) => {
//         indicator.addEventListener("click", () => {
//             // Cambia la slide al clic sull'indicatore corrispondente
//             if (currentIndex !== index) {
//                 // Rimuovi la classe 'active' dalla slide corrente e dall'indicatore
//                 slides[currentIndex].classList.remove("active");
//                 indicators[currentIndex].classList.remove("active");

//                 // Imposta il nuovo indice
//                 currentIndex = index;

//                 // Aggiungi la classe 'active' alla nuova slide e all'indicatore corrispondente
//                 slides[currentIndex].classList.add("active");
//                 indicators[currentIndex].classList.add("active");
//             }
//         });
//     });

//     // Imposta un intervallo per cambiare la slide automaticamente ogni 3 secondi
//     setInterval(showNextSlide, 3000); // Cambia immagine ogni 3 secondi
// });
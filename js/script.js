// Descrizione:
// Partendo dal markup dei file che vi passo nello zip, far funzionare lo slider.
// Avrà sia le funzionalità di navigazione Prev-Next (con anche il cambio della thumb attiva),
// sia la possibilità di navigazione direttamente dalle thumb 
// (ovvero se clicco su una thumb quella diventa active e vedo l’item corrispondente in grande).
// Bonus (come sempre se e solo alla fine se il resto funziona e l’ho compreso):
// - il mio slider funziona anche con i tasti freccia “su-giù” della tastiera (oltre che bottoni Prev-Next cioè le frecce in pagina);
// - applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// - quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce
// Consigli del giorno:
// regola d’oro: riciclare/centralizzare ovunque possibile!
// partite sempre da comprendere bene la logica che volete applicare, e solo dopo applicatela scrivendo codice 


// 1 - costruire la mia root
// 2 - inserire in data slides (un array di oggetti)
// 3 - creare un for dentro al div della prima immagine
//     v-for="element in slides" dove element rappresenta ogni oggetto dell array
// 4 - in img creare :src="element.image" --- element è l oggetto dell array e image la chiave;
//     con questa sintassi stampo il valore richiesto
// 5 - :alt="element.title"
// 6 - inserisco l attributo key --- :key="i"
// 7 - activeSlide : 0
// 8 - inserire la classe active nella slide con key=i --- <!-- :class="i === activeSlide ? 'active' '' " -->
//     aggiunta tramite operatore ternario

const root = new Vue ({

    el : "#app",

    data : {

        activeSlide : 0, // 0 perche l array slides parte da 0

        slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ]

    },

    methods : {

    }
})
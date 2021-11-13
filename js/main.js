// Rifare l’esercizio della to do list:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

// Mi comunicano ora dalla regia che lo variamo un attimo,
// la vostra variante sarà che:
// - il vostro array nei data non avrà delle semplici stringhe, ma sarà un array di oggetti;
// - gli oggetti avranno questo formato:
// { text: 'Fare la spesa', done: true },
// { text: 'Fare il bucato', done: false }
// etc.etc..
// quindi nell’elenco di output ciò che sara “done” sarà barrato, il resto invece con testo normale.
// Nella richiesta base mi limito al fatto che quel “done” nei task inseriti dall’utente sarà sempre false,
// gli unici true saranno alcuni nei dati di partenza.

// BONUS
// Gesticso i done dall’interfaccia,
// quindi il task potrà essere anche segnato come done e non per forza cancellato
// poi se l’utente vuole potrà anche cancellarlo del tutto.

// aggiungo istanza VUE
var app = new Vue({
    el : '#app',
    data : {

        // v-model testo nova task
        newTaskText : '',

        // array di oggetti con le cose da fare 
        tasks : [
            {
                'text' : 'fare la spesa',
                'done' : true
            },
            {
                'text': 'fare il bucato',
                'done': false
            },
            {
                'text': 'andare ad allenamento',
                'done': false
            },
            {
                'text': "fare l'esercizio",
                'done': false
            },
            {
                'text': 'guardare un episodio della serie',
                'done': false
            },
        ],
    },
    methods : {

        // funzione per cancellare una task
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },

        // funzione per aggiungere una task
        addTask() {
            newTask = {
                'text': this.newTaskText,
                'done' : false
            };
            this.tasks.push(newTask);
            this.newTaskText = '';
        },

        // funzione per settare una task come fatta
        taskDone(index) {
            this.tasks[index].done = !this.tasks[index].done;
        }
    },
});  
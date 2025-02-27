// fais par wsem pour mon tp de js fonction qui crée un gestionnaire de tâches
// Une fonction qui crée un gestionnaire de tâches
function creerGestionnaire() {
    return {
        // Je fais tableau contenant toutes les tâches
        taches: [],

        //  la méthode pour ajouter une tâche avec une description
        ajouterTache: function (description) {
            // je crée un objet tâche avec les propriétés "description" et "terminee"
            let nouvelleTache = {
                description: description, // On stocke la description de la tâche
                terminee: false // Par défaut, une nouvelle tâche n'est pas terminée
            };

            // J'ajoute  la tâche au tableau
            this.taches.push(nouvelleTache);
        },

        //  la méthode pour marquer une tâche comme terminée en utilisant son index
        terminerTache: function (index) {
            // je modifie la propriété "terminee" de la tâche ciblée
            this.taches[index].terminee = true;
        },

        //  la méthode pour afficher toutes les tâches
        afficherTaches: function () {
            console.log(" Liste des tâches :");

            // je parcours de toutes les tâches du tableau
            this.taches.forEach((tache, index) => {
                // Je determine si la tâche est terminée ou en cours
                let statut = tache.terminee ? " Terminée" : " En cours";

                // J'affiche la description et du statut de chaque tâche
                console.log(`${index}. ${tache.description} - ${statut}`);
            });
        }
    };
}

//  je fais le test de mon gestionnaire de tâches
let gestionnaire = creerGestionnaire();

// J'ajoute de plusieurs tâches
gestionnaire.ajouterTache("Lire mon livre préféré");
gestionnaire.ajouterTache("Réviser les TP de JavaScript");
gestionnaire.ajouterTache("Envoyer mes candidatures alternance");

// J'affiche les tâches
gestionnaire.afficherTaches();

// je fais le marquage d'une tâche comme terminée
gestionnaire.terminerTache(1);

// J'affiche les tâches pour finir
gestionnaire.afficherTaches();

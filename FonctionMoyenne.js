// fais par wsem
// Une fonction qui calcule la moyenne des éléments d'un tableau
function calculerMoyenne(tableau) {
    // Je verifie si l'entrée est bien un tableau
    if (!Array.isArray(tableau)) {
        return "Erreur : Le paramètre doit être un tableau.";
    }

    // Je verifie si le tableau est vide
    if (tableau.length === 0) {
        return 0; // sa retourne 0 si le tableau est vide
    }

    let somme = 0;

    // Je parcours le tableau pour vérifier que tous les éléments sont des nombres
    for (let i = 0; i < tableau.length; i++) {
        if (typeof tableau[i] !== "number") {
            return "Erreur : Tous les éléments du tableau doivent être des nombres.";
        }
        somme += tableau[i]; // L'ajout de l'élément à la somme
    }

    return somme / tableau.length; // Je calcul et retour de la moyenne
}

// Je test avec différents cas
console.log(calculerMoyenne([10, 20, 30, 40]));  // Résultat : 25
console.log(calculerMoyenne([]));                // Résultat : 0
console.log(calculerMoyenne("Bonjour"));         // Erreur
console.log(calculerMoyenne([10, "texte", 30])); // Erreur


// fais par wsem test fonction
// Une fonction qui vérifie si un tableau contient uniquement des nombres
function estTableauNumerique(tableau) {
    // je vérifie si le tableau est vide
    if (tableau.length === 0) {
        return false;
    }

    // je vérifie que tous les éléments du tableau sont des nombres
    for (let i = 0; i < tableau.length; i++) {
        if (typeof tableau[i] !== "number") {
            return false;
        }
    }

    return true;
}

// Je declare mes tableaux pour le test
let tableau1 = [1, 2, 3, 4, 5];          // il contient uniquement des nombres
let tableau2 = [1, "hello world W", 3, 4, 5];    // il contient une chaîne de caractères
let tableau3 = [];                       // le Tableau vide

// J'appel de la fonction avec différents tableaux et affichage des résultats
console.log(`Tableau 1 (nombres) : ${estTableauNumerique(tableau1)}`); // true
console.log(`Tableau 2 (mélangé) : ${estTableauNumerique(tableau2)}`); // false
console.log(`Tableau 3 (vide) : ${estTableauNumerique(tableau3)}`);    // false

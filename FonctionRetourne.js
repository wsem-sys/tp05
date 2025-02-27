// Une fonction qui prend un nombre n et retourne une nouvelle fonction
function creerMultiplicateur(n) {
    return function (nb) {
        return nb * n; // je multiplie le nombre donné par n
    };
}

// J'ai crée deux fonctions avec des valeurs de n différentes
let multiplierPar3 = creerMultiplicateur(3); // sa retourne une fonction qui multiplie par 3
let multiplierPar10 = creerMultiplicateur(10); // sa retourne une fonction qui multiplie par 10

// Nous avons Utilisation des fonctions retournées
console.log(multiplierPar3(4)); // 4 * 3 = 12
console.log(multiplierPar3(10)); // 10 * 3 = 30
console.log(multiplierPar10(2)); // 2 * 10 = 20
console.log(multiplierPar10(7)); // 7 * 10 = 70

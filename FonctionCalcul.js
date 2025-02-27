// La science c'est genial wsem
// Voici la fonction qui prend deux paramètres numériques et effectue le calcul (a * b) + (a + b)
function calcul(a, b) {
    // Je vérifie si les entrées sont bien des nombres
    if (typeof a !== "number" || typeof b !== "number") {
        return "Erreur : les paramètres doivent être des nombres.";
    }

    return (a * b) + (a + b);
}

// J'appel  la fonction avec des nombres
console.log(`Résultat avec (100, 0) : ${calcul(100, 0)}`);  // (100*0) + (100+0) = 0 + 100 = 100
console.log(`Résultat avec (1, 1) : ${calcul(1, 1)}`);  // (1*1) + (1+1) = 1 + 2 = 3

// Je test avec des chaînes de caractères
console.log(`Test avec des chaînes : ${calcul("100", "0")}`); // il devrait afficher une erreur

// Je réutilise  la fonction majusculePremiereLettre
function majusculePremiereLettre(chaine) {
    if (typeof chaine !== "string") {
        return "Erreur : Le paramètre doit être une chaîne de caractères.";
    }
    if (chaine.length === 0) {
        return "";
    }
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

// Une fonction qui met en majuscule la première lettre de chaque mot d'une phrase
function majusculePhrase(phrase) {
    if (typeof phrase !== "string") {
        return "Erreur : Le paramètre doit être une chaîne de caractères.";
    }

    // Je sépare la phrase en mots, applique la mise en majuscule et reforme la phrase
    return phrase.split(" ").map(majusculePremiereLettre).join(" ");
}

// Je test  la fonction avec différents cas
console.log(majusculePhrase("bonjour tout le monde"));  // Résultat : "Bonjour Tout Le Monde"
console.log(majusculePhrase("je suis wsem le supa saiyajin")); // Résultat : "Je Suis Wsem Le Supa Saiyajin"
console.log(majusculePhrase("vive it")); // Résultat : "Vive It"
console.log(majusculePhrase("j'aime le chocolat")); // Résultat : "J'aime Le Chocolat"
console.log(majusculePhrase(123)); // Résultat : "Erreur : Le paramètre doit être une chaîne de caractères."


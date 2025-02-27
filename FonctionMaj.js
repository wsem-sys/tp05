// fais par wsem
// Une fonction qui met la première lettre d'une chaîne en majuscule
function majusculePremiereLettre(chaine) {
    // je verifie si l'entrée est bien une chaîne de caractères
    if (typeof chaine !== "string") {
        return "Erreur : Le paramètre doit être une chaîne de caractères.";
    }

    // je verifie que la chaîne n'est pas vide
    if (chaine.length === 0) {
        return "";
    }

    // Je retourne la chaîne avec la première lettre en majuscule
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
}

// Nous allons test avec différents cas
console.log(majusculePremiereLettre("bonjour")); // Résultat : "Bonjour"
console.log(majusculePremiereLettre(""));        // Résultat : ""
console.log(majusculePremiereLettre(1484));       // Erreur

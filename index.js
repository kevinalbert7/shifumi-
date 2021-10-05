
var button = document.getElementsByTagName('button')
// image.setAttribute("src", "/img/1-pierre.jpg")

// Fonctions


function random() {     // Génère un nombre aléatoire entier entre 1 et 3
    
    var min = 1;
    var max = 3;


return    Math.floor(Math.random() * (max - min + 1) + min)

}

function compare(you, ia) {     // Compare les scores
    
    if (you === ia) {
        return "Egality"
    
    } else if ((you === 1 && ia === 3) || (you === 2 && ia === 1) || (you === 3 && ia === 2)) {
        return "You Win !"
    
    } else {
        return "IA Win !"
    }
}
function display(number){     // Affiche les images en fonction d'un nombre
    
    var picture = document.getElementById("image")
     if (number === 1){
        picture.setAttribute("src", "img/1-pierre.jpg")

    // if (number === 1){
    //     picture.setAttribute("src", "img/1-pierre.jpg")

    } else if (number === 2) {
        picture.setAttribute("src", "img/2-feuille.jpg")
        
    } else if (number === 3) {
        picture.setAttribute("src", "img/3-ciseaux.jpg")
    }
}
       





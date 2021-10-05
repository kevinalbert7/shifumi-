
// Fonctions

// --------------Fonction Random--------------

function random() {
    
    var min = 1;
    var max = 3;

    return Math.floor(Math.random() * (max - min + 1) + min)
}

// --------------On Click Pierre--------------

function onButtonClickPierre() {

    var picture = document.getElementById("image_joueur")
    picture.setAttribute("src", "img/1-pierre.jpg")
    var ia = random()
    display(ia)
    
    if(ia === 1) {
        result.innerHTML = "Egalite"
    
    } else if(ia === 2) {
        scoreIa +=
        result.innerHTML = "L'IA a gagné"
    
    } else {
        scoreJoueur +=
        result.innerHTML = "Vous avez gagné"
    }
}

// --------------On Click Feuille--------------

function onButtonClickFeuille() {
    
    var picture = document.getElementById("image_joueur")
    picture.setAttribute("src", "img/2-feuille.jpg")
    var ia = random()
    display(ia)
    
    if(ia === 2) {
        result.innerHTML = "Egalite"
    
    } else if(ia === 3) {
        scoreIa +=
        result.innerHTML = "L'IA a gagné"
    
    } else {
        scoreJoueur +=
        result.innerHTML = "Vous avez gagné"
    }
}

//--------------On Click Ciseaux--------------

function onButtonClickCiseaux() {
    
    var picture = document.getElementById("image_joueur")
    picture.setAttribute("src", "img/3-ciseaux.jpg")
    var ia = random()
    display(ia)
   
    if(ia === 3) {
        result.innerHTML = "Egalite"
    
    } else if(ia === 1) {
        scoreIa +=
        result.innerHTML = "L'IA a gagnée"
    
    } else {
        scoreJoueur+=
        result.innerHTML = "Vous avez gagné"
    }

}

// --------------Affiche les images--------------

function display(joueur) {
    
    var picture = document.getElementById("imageIA")
    
    if (joueur === 1) {
        picture.setAttribute("src", "img/1-pierre.jpg")
        
    } else if (joueur === 2) {
        picture.setAttribute("src", "img/2-feuille.jpg")
        
    } else if (joueur === 3) {
        picture.setAttribute("src", "img/3-ciseaux.jpg")
    }
}

//--------------Score--------------

var scoreJoueur = 0
var scoreIa = 0
    
    for(var i = 0; i < 4; i++) {
        
        if(scoreJoueur > scoreIa) {
            final_score.innerHTML = "L'IA gagne la partie !"
        } else if(scoreJoueur < scoreIa) {
            final_score.innerHTML = "Vous avez gagné la partie !"
        } else { 
            final_score.innerHTML = "Match nul !"
        }
    } 
    console.log(final_score)
        


//--------------Animation--------------
    
var myvar = setInterval(imageIA, 50)
setTimeout(function () {
clearInterval(myvar)} , 1000)

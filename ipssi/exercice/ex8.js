
//    prénom : Han / nom : Solo
//    prénom : Chew / nom : Bacca
var eleve1 = {
    prenom : "Han",
    nom : "Solo"
};
var eleve2 = {
    prenom : "Chew",
    nom : "Bacca"
};
var eleves = [ eleve1, eleve2];
console.log(eleves);




 // prof :
//     prénom : Han / nom : Solo
//     prénom : Chew / nom : Bacca
// élève :
//     prénom : Marty / nom : McFly
//     prénom : Doc / nom : Brown
var enseignement = { 
    students : eleves,
    prof: [ 
        {prenom: "Marty", nom : "McFly" },
        {prenom: "Doc", nom : "Brown" },
    ]
};

console.log(enseignement.prof[0].prenom);

// exercice 8.4
var text = '{"name" : "Dupont", "first_name" : "Jean"}';

var jsonText = JSON.parse(text);
console.log(jsonText.first_name);

// exercice 8.5
var number = {"random" : function(){
    return Math.random();
}};
console.log(number.random());
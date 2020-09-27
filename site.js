let livres = [{
    titre: "Learning ECMA Script",
    auteur: "Narayan Prusty",
    prix: "27,42"
},

{
    titre: "Learning ECMA",
    auteur: "Narayan Prusty",
    prix: "18,99"
},

{
    titre: "ECMAScript Cookbook",
    auteur: "Ross Harisson",
    prix: "19,99"
},

{
    titre: "Family guy",
    auteur: "Moi meme",
    prix: "2,50"
},


]
console.log(Math.floor(Math.random()* livres.length));
console.log(livres[Math.floor(Math.random()* livres.length)]);

function afficheRecommandations() {
    console.log(livres[Math.floor(Math.random()* livres.length)]);
}


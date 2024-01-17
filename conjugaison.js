//GPL-3.0-or-later


var personnes = ["", "je/j'", "tu", "il/elle/on", "nous", "vous", "elles/ils"];
var verbes = [
	["être au présent", "suis", "es", "est", "sommes", "êtes", "sont"],
	["être à l'imparfait", "étais", "étais", "était", "étions", "étiez", "étaient"],
	["avoir au présent", "ai", "as", "a", "avons", "avez", "ont"],
	["avoir à l'imparfait", "avais", "avais", "avait", "avions", "aviez", "avaient"],
	["finir au présent", "finis", "finis", "finit", "finissons", "finissez", "finissent"],
	["finir à l'imparfait", "finissais", "finissais", "finissait", "finissions", "finissiez", "finissaient"],
	["venir au présent", "viens", "viens", "vient", "venons", "venez", "viennent"],
	["venir à l'imparfait", "venais", "venais", "venait", "venions", "veniez", "venaient"],
	["aller au présent", "vais", "vas", "va", "allons", "allez", "vont"],
	["aller à l'imparfait", "allais", "allais", "allait", "allions", "alliez", "allaient"],
	["faire au présent", "fais", "fais", "fait", "faisons", "faites", "font"],
	["faire à l'imparfait", "faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"],
	["voir au présent", "vois", "vois", "voit", "voyons", "voyez", "voient"],
	["voir à l'imparfait", "voyais", "voyais", "voyait", "voyions", "voyiez", "voyaient"],
	["devoir au présent", "dois", "dois", "doit", "devons", "devez", "doivent"],
	["devoir à l'imparfait", "devais", "devais", "devait", "devions", "deviez", "devaient"],
	["pouvoir au présent", "peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
	["pouvoir à l'imparfait", "pouvais", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient"],
	["vouloir au présent", "veux", "veux", "veut", "voulons", "voulez", "veulent"],
	["vouloir à l'imparfait", "voulais", "voulais", "voulait", "voulions", "vouliez", "voulaient"],
	["vendre au présent", "vends", "vends", "vend", "vendons", "vendez", "vendent"],
	["vendre à l'imparfait", "vendais", "vendais", "vendait", "vendions", "vendiez", "vendaient"],
	["dire au présent", "dis", "dis", "dit", "disons", "dites", "disent"],
	["dire à l'imparfait", "disais", "disais", "disait", "disions", "disiez", "disaient"]
];

var verbe;
var personne;
var nbEssais = 1;
var nbPoints = 0;


function checkValeurs(valeur, min, max) {
	return (valeur < min && valeur > max);
}

function checkProposition() {
	if(document.getElementById("valeurProposee").value == verbes[verbe][personne]) {
		nbPoints++;
		let pourcentage = ", réussite " + Math.round(100 * nbPoints / nbEssais, 0) + "%";
		if(nbPoints > 1) document.getElementById("affichagePoints").innerHTML = nbPoints + " points" + pourcentage;
		else document.getElementById("affichagePoints").innerHTML = nbPoints + " point" + pourcentage;
		document.getElementById("commentaire").innerHTML = "Bonne réponse";
	}
	else
	{
		document.getElementById("commentaire").innerHTML = "Mauvaise réponse, il fallait répondre <i>" + verbes[verbe][personne] + "</i>.";
	}
	nouvelleQuestion();
}

function nouvelleQuestion() {
	nbEssais++;
	personne = Math.floor(Math.random() * 6) + 1;
	verbe = Math.floor(Math.random() * verbes.length);
	document.getElementById("personne").innerHTML = personnes[personne];
	document.getElementById("valeurProposee").placeholder = verbes[verbe][0];
	document.getElementById("valeurProposee").value = "";
}

document.addEventListener("DOMContentLoaded", (event) => {
	nouvelleQuestion();
  });
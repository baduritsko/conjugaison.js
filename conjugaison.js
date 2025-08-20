//GPL-3.0-or-later


var personnes = ["", "je/j'", "tu", "il/elle/on", "nous", "vous", "elles/ils"];
var verbes = [
	// ÊTRE
	["être au présent", "suis", "es", "est", "sommes", "êtes", "sont"],
	["être à l'imparfait", "étais", "étais", "était", "étions", "étiez", "étaient"],
	["être au futur simple", "serai", "seras", "sera", "serons", "serez", "seront"],
	["être au passé simple", "fus", "fus", "fut", "fûmes", "fûtes", "furent"],
	["être au passé composé", "ai été", "as été", "a été", "avons été", "avez été", "ont été"],

	// AVOIR
	["avoir au présent", "ai", "as", "a", "avons", "avez", "ont"],
	["avoir à l'imparfait", "avais", "avais", "avait", "avions", "aviez", "avaient"],
	["avoir au futur simple", "aurai", "auras", "aura", "aurons", "aurez", "auront"],
	["avoir au passé simple", "eus", "eus", "eut", "eûmes", "eûtes", "eurent"],
	["avoir au passé composé", "ai eu", "as eu", "a eu", "avons eu", "avez eu", "ont eu"],

	// FINIR
	["finir au présent", "finis", "finis", "finit", "finissons", "finissez", "finissent"],
	["finir à l'imparfait", "finissais", "finissais", "finissait", "finissions", "finissiez", "finissaient"],
	["finir au futur simple", "finirai", "finiras", "finira", "finirons", "finirez", "finiront"],
	["finir au passé simple", "finis", "finis", "finit", "finîmes", "finîtes", "finirent"],
	["finir au passé composé", "ai fini", "as fini", "a fini", "avons fini", "avez fini", "ont fini"],

	// VENIR
	["venir au présent", "viens", "viens", "vient", "venons", "venez", "viennent"],
	["venir à l'imparfait", "venais", "venais", "venait", "venions", "veniez", "venaient"],
	["venir au futur simple", "viendrai", "viendras", "viendra", "viendrons", "viendrez", "viendront"],
	["venir au passé simple", "vins", "vins", "vint", "vînmes", "vîntes", "vinrent"],
	["venir au passé composé", "suis venu", "es venu", "est venu", "sommes venus", "êtes venus", "sont venus"],

	// ALLER
	["aller au présent", "vais", "vas", "va", "allons", "allez", "vont"],
	["aller à l'imparfait", "allais", "allais", "allait", "allions", "alliez", "allaient"],
	["aller au futur simple", "irai", "iras", "ira", "irons", "irez", "iront"],
	["aller au passé simple", "allai", "allas", "alla", "allâmes", "allâtes", "allèrent"],
	["aller au passé composé", "suis allé", "es allé", "est allé", "sommes allés", "êtes allés", "sont allés"],

	// FAIRE
	["faire au présent", "fais", "fais", "fait", "faisons", "faites", "font"],
	["faire à l'imparfait", "faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"],
	["faire au futur simple", "ferai", "feras", "fera", "ferons", "ferez", "feront"],
	["faire au passé simple", "fis", "fis", "fit", "fîmes", "fîtes", "firent"],
	["faire au passé composé", "ai fait", "as fait", "a fait", "avons fait", "avez fait", "ont fait"],

	// VOIR
	["voir au présent", "vois", "vois", "voit", "voyons", "voyez", "voient"],
	["voir à l'imparfait", "voyais", "voyais", "voyait", "voyions", "voyiez", "voyaient"],
	["voir au futur simple", "verrai", "verras", "verra", "verrons", "verrez", "verront"],
	["voir au passé simple", "vis", "vis", "vit", "vîmes", "vîtes", "virent"],
	["voir au passé composé", "ai vu", "as vu", "a vu", "avons vu", "avez vu", "ont vu"],

	// DEVOIR
	["devoir au présent", "dois", "dois", "doit", "devons", "devez", "doivent"],
	["devoir à l'imparfait", "devais", "devais", "devait", "devions", "deviez", "devaient"],
	["devoir au futur simple", "devrai", "devras", "devra", "devrons", "devrez", "devront"],
	["devoir au passé simple", "dus", "dus", "dut", "dûmes", "dûtes", "durent"],
	["devoir au passé composé", "ai dû", "as dû", "a dû", "avons dû", "avez dû", "ont dû"],

	// POUVOIR
	["pouvoir au présent", "peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
	["pouvoir à l'imparfait", "pouvais", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient"],
	["pouvoir au futur simple", "pourrai", "pourras", "pourra", "pourrons", "pourrez", "pourront"],
	["pouvoir au passé simple", "pus", "pus", "put", "pûmes", "pûtes", "purent"],
	["pouvoir au passé composé", "ai pu", "as pu", "a pu", "avons pu", "avez pu", "ont pu"],

	// VOULOIR
	["vouloir au présent", "veux", "veux", "veut", "voulons", "voulez", "veulent"],
	["vouloir à l'imparfait", "voulais", "voulais", "voulait", "voulions", "vouliez", "voulaient"],
	["vouloir au futur simple", "voudrai", "voudras", "voudra", "voudrons", "voudrez", "voudront"],
	["vouloir au passé simple", "voulus", "voulus", "voulut", "voulûmes", "voulûtes", "voulurent"],
	["vouloir au passé composé", "ai voulu", "as voulu", "a voulu", "avons voulu", "avez voulu", "ont voulu"],

	// VENDRE
	["vendre au présent", "vends", "vends", "vend", "vendons", "vendez", "vendent"],
	["vendre à l'imparfait", "vendais", "vendais", "vendait", "vendions", "vendiez", "vendaient"],
	["vendre au futur simple", "vendrai", "vendras", "vendra", "vendrons", "vendrez", "vendront"],
	["vendre au passé simple", "vendis", "vendis", "vendit", "vendîmes", "vendîtes", "vendirent"],
	["vendre au passé composé", "ai vendu", "as vendu", "a vendu", "avons vendu", "avez vendu", "ont vendu"],

	// DIRE
	["dire au présent", "dis", "dis", "dit", "disons", "dites", "disent"],
	["dire à l'imparfait", "disais", "disais", "disait", "disions", "disiez", "disaient"],
	["dire au futur simple", "dirai", "diras", "dira", "dirons", "direz", "diront"],
	["dire au passé simple", "dis", "dis", "dit", "dîmes", "dîtes", "dirent"],
	["dire au passé composé", "ai dit", "as dit", "a dit", "avons dit", "avez dit", "ont dit"]
];


var verbe;
var personne;
var nbEssais = 0;
var nbPoints = 0;


function checkValeurs(valeur, min, max) {
	return (valeur < min && valeur > max);
}

function checkProposition() {
	if(document.getElementById("valeurProposee").value.toLowerCase() == verbes[verbe][personne]) {
		nbPoints++;
		let pourcentage = ", réussite " + Math.round(100 * nbPoints / nbEssais, 0) + "%";
		document.getElementById("commentaire").innerHTML = "Bonne réponse";
	}
	else
	{
		document.getElementById("commentaire").innerHTML = "Mauvaise réponse, il fallait répondre <i>" + verbes[verbe][personne] + "</i>.";
	}
	let pourcentage = ", réussite " + Math.round(100 * nbPoints / nbEssais, 0) + "%";
	if(nbPoints > 1) document.getElementById("affichagePoints").innerHTML = nbPoints + " points" + pourcentage;
	else document.getElementById("affichagePoints").innerHTML = nbPoints + " point" + pourcentage;
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
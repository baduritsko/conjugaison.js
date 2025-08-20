var verbe;
var personne;
var nbEssais = 0;
var nbPoints = 0;
var commentaire;
var reponseUtilisateur;
var themeCSS = true;

document.addEventListener("DOMContentLoaded", (event) => {
	commentaire = document.getElementById("commentaire");
	reponseUtilisateur = document.getElementById("reponse");
	nouvelleQuestion();
  });

function switchTheme() {
	document.getElementById("themeCSS").href = themeCSS ? "css/contraste.css" : "css/standard.css";
	themeCSS = !themeCSS;
}

function checkProposition() {
	const valeurProposee = reponseUtilisateur.value.trim().toLowerCase();
	if(!valeurProposee) {
		reponseUtilisateur.value = "";
		commentaire.innerHTML = "Veuillez saisir une réponse";
		return;
	}
	if(valeurProposee == verbe[personne]) {
		nbPoints++;
		commentaire.innerHTML = "Bonne réponse";
	}
	else
	{
		commentaire.innerHTML = "Mauvaise réponse, il fallait répondre <i>" + verbe[personne] + "</i>.";
	}
	document.getElementById("score").innerHTML = nbPoints + (nbPoints > 1 ? " points": " point") + ", réussite " + Math.round(100 * nbPoints / nbEssais, 0) + "%";
	nouvelleQuestion();
}

function nouvelleQuestion() {
	nbEssais++;
	verbe = verbes[Math.floor(Math.random() * verbes.length)];
	personne = Math.floor(Math.random() * (verbe.length - 1)) + 1;
	document.getElementById("personne").innerHTML = personnes[personne];
	reponseUtilisateur.placeholder = verbe[0];
	reponseUtilisateur.value = "";
}

const personnes = ["", "je/j'", "tu", "il/on", "nous", "vous", "ils", "elle", "elles"];
const verbes = [
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
	["venir au passé composé", "suis venu", "es venu", "est venu", "sommes venus", "êtes venus", "sont venus", "est venue", "sont venues"],
	
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
	["dire au passé composé", "ai dit", "as dit", "a dit", "avons dit", "avez dit", "ont dit"],

	// MANGER
	["manger au présent", "mange", "manges", "mange", "mangeons", "mangez", "mangent"],
	["manger à l'imparfait", "mangeais", "mangeais", "mangeait", "mangions", "mangiez", "mangeaient"],
	["manger au futur simple", "mangerai", "mangeras", "mangera", "mangerons", "mangerez", "mangeront"],
	["manger au passé simple", "mangeai", "mangeas", "mangea", "mangeâmes", "mangeâtes", "mangèrent"],
	["manger au passé composé", "ai mangé", "as mangé", "a mangé", "avons mangé", "avez mangé", "ont mangé"],

	// JOUER
	["jouer au présent", "joue", "joues", "joue", "jouons", "jouez", "jouent"],
	["jouer à l'imparfait", "jouais", "jouais", "jouait", "jouions", "jouiez", "jouaient"],
	["jouer au futur simple", "jouerai", "joueras", "jouera", "jouerons", "jouerez", "joueront"],
	["jouer au passé simple", "jouai", "jouas", "joua", "jouâmes", "jouâtes", "jouèrent"],
	["jouer au passé composé", "ai joué", "as joué", "a joué", "avons joué", "avez joué", "ont joué"],

	// AIMER
	["aimer au présent", "aime", "aimes", "aime", "aimons", "aimez", "aiment"],
	["aimer à l'imparfait", "aimais", "aimais", "aimait", "aimions", "aimiez", "aimaient"],
	["aimer au futur simple", "aimerai", "aimeras", "aimera", "aimerons", "aimerez", "aimeront"],
	["aimer au passé simple", "aimai", "aimas", "aima", "aimâmes", "aimâtes", "aimèrent"],
	["aimer au passé composé", "ai aimé", "as aimé", "a aimé", "avons aimé", "avez aimé", "ont aimé"],

	// PARLER
	["parler au présent", "parle", "parles", "parle", "parlons", "parlez", "parlent"],
	["parler à l'imparfait", "parlais", "parlais", "parlait", "parlions", "parliez", "parlaient"],
	["parler au futur simple", "parlerai", "parleras", "parlera", "parlerons", "parlerez", "parleront"],
	["parler au passé simple", "parlai", "parlas", "parla", "parlâmes", "parlâtes", "parlèrent"],
	["parler au passé composé", "ai parlé", "as parlé", "a parlé", "avons parlé", "avez parlé", "ont parlé"],

	// REGARDER
	["regarder au présent", "regarde", "regardes", "regarde", "regardons", "regardez", "regardent"],
	["regarder à l'imparfait", "regardais", "regardais", "regardait", "regardions", "regardiez", "regardaient"],
	["regarder au futur simple", "regarderai", "regarderas", "regardera", "regarderons", "regarderez", "regarderont"],
	["regarder au passé simple", "regardai", "regardas", "regarda", "regardâmes", "regardâtes", "regardèrent"],
	["regarder au passé composé", "ai regardé", "as regardé", "a regardé", "avons regardé", "avez regardé", "ont regardé"],

	// ÉCOUTER
	["écouter au présent", "écoute", "écoutes", "écoute", "écoutons", "écoutez", "écoutent"],
	["écouter à l'imparfait", "écoutais", "écoutais", "écoutait", "écoutions", "écoutiez", "écoutaient"],
	["écouter au futur simple", "écouterai", "écouteras", "écoutera", "écouterons", "écouterez", "écouteront"],
	["écouter au passé simple", "écoutai", "écoutas", "écouta", "écoutâmes", "écoutâtes", "écoutèrent"],
	["écouter au passé composé", "ai écouté", "as écouté", "a écouté", "avons écouté", "avez écouté", "ont écouté"],

	// LIRE
	["lire au présent", "lis", "lis", "lit", "lisons", "lisez", "lisent"],
	["lire à l'imparfait", "lisais", "lisais", "lisait", "lisions", "lisiez", "lisaient"],
	["lire au futur simple", "lirai", "liras", "lira", "lirons", "lirez", "liront"],
	["lire au passé simple", "lus", "lus", "lut", "lûmes", "lûtes", "lurents"],
	["lire au passé composé", "ai lu", "as lu", "a lu", "avons lu", "avez lu", "ont lu"],

	// ÉCRIRE
	["écrire au présent", "écris", "écris", "écrit", "écrivons", "écrivez", "écrivent"],
	["écrire à l'imparfait", "écrivais", "écrivais", "écrivait", "écrivions", "écriviez", "écrivaient"],
	["écrire au futur simple", "écrirai", "écriras", "écrira", "écrirons", "écrirez", "écriront"],
	["écrire au passé simple", "écrivis", "écrivis", "écrivit", "écrivîmes", "écrivîtes", "écrivirent"],
	["écrire au passé composé", "ai écrit", "as écrit", "a écrit", "avons écrit", "avez écrit", "ont écrit"],

	// DORMIR
	["dormir au présent", "dors", "dors", "dort", "dormons", "dormez", "dorment"],
	["dormir à l'imparfait", "dormais", "dormais", "dormait", "dormions", "dormiez", "dormaient"],
	["dormir au futur simple", "dormirai", "dormiras", "dormira", "dormirons", "dormirez", "dormiront"],
	["dormir au passé simple", "dormis", "dormis", "dormit", "dormîmes", "dormîtes", "dormirent"],
	["dormir au passé composé", "ai dormi", "as dormi", "a dormi", "avons dormi", "avez dormi", "ont dormi"],

	// MARCHER
	["marcher au présent", "marche", "marches", "marche", "marchons", "marchez", "marchent"],
	["marcher à l'imparfait", "marchais", "marchais", "marchait", "marchions", "marchiez", "marchaient"],
	["marcher au futur simple", "marcherai", "marcheras", "marchera", "marcherons", "marcherez", "marcheront"],
	["marcher au passé simple", "marchai", "marchas", "marcha", "marchâmes", "marchâtes", "marchèrent"],
	["marcher au passé composé", "ai marché", "as marché", "a marché", "avons marché", "avez marché", "ont marché"],

	// COURIR
	["courir au présent", "cours", "cours", "court", "courons", "courez", "courent"],
	["courir à l’imparfait", "courais", "courais", "courait", "courions", "couriez", "couraient"],
	["courir au futur simple", "courrai", "courras", "courra", "courrons", "courrez", "courront"],
	["courir au passé simple", "courus", "courus", "courut", "courûmes", "courûtes", "coururent"],
	["courir au passé composé", "ai couru", "as couru", "a couru", "avons couru", "avez couru", "ont couru"],

	// CHANTER
	["chanter au présent", "chante", "chantes", "chante", "chantons", "chantez", "chantent"],
	["chanter à l’imparfait", "chantais", "chantais", "chantait", "chantions", "chantiez", "chantaient"],
	["chanter au futur simple", "chanterai", "chanteras", "chantera", "chanterons", "chanterez", "chanteront"],
	["chanter au passé simple", "chantai", "chantas", "chanta", "chantâmes", "chantâtes", "chantèrent"],
	["chanter au passé composé", "ai chanté", "as chanté", "a chanté", "avons chanté", "avez chanté", "ont chanté"]
];
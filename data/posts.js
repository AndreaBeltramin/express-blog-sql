//creo un array dove inserisco una lista di almeno 5 post, per ognuno indico titolo,
//contenuto, immagine e tags sotto forma di array di stringhe

const urlImg = "http://localhost:3000";
const posts = [
	{
		id: 1,
		title: "ciambellone",
		content: "ciambellone fatto in casa",
		img: `${urlImg}/images/ciambellone.jpeg`,
		tags: ["cucina", "dolce", "dessert"],
		category: "dessert",
	},
	{
		id: 2,
		title: "cracker di barbabietola",
		content: "cracker di barbabietola fatti in casa",
		img: `${urlImg}/images/cracker_barbabietola.jpeg`,
		tags: ["cucina", "antipasto"],
		category: "panificati",
	},
	{
		id: 3,
		title: "pane dolce fritto",
		content: "pane dolce fritto fatto in casa",
		img: `${urlImg}/images/pane_fritto_dolce.jpeg`,
		tags: ["cucina", "panificazione", "dolce"],
		category: "dessert",
	},
	{
		id: 4,
		title: "pasta alla barbabietola",
		content: "pasta alla barbabietola fatta in casa",
		img: `${urlImg}/images/pasta_barbabietola.jpeg`,
		tags: ["cucina", "pasta", "primo"],
		category: "primo piatto",
	},
	{
		id: 5,
		title: "torta paesana",
		content: "torta paesana fatta in casa",
		img: `${urlImg}/images/torta_paesana.jpeg`,
		tags: ["cucina", "dolce", "dessert"],
		category: "dessert",
	},
];

module.exports = posts;

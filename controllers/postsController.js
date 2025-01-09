//connetto il database ad Express
const connection = require("../db/connection");

//index => mostra la lista intera dei post
function index(req, res) {
	//dichiariamo la lista dei post filtrata = alla lista dei post originale
	let filteredPosts = [...posts];
	//se la richiesta contiene un tag come parametro
	if (req.query.tag) {
		//allora filtriamo la lista dei post
		//e cerchiamo se nella lista dei tags di ogni post è incluso il tag cercato
		filteredPosts = posts.filter((post) => post.tags.includes(req.query.tag));
	}
	//diamo in risposta la lista dei post filtrati come oggetto json
	res.json(filteredPosts);
}

//show => mostra un singolo post
function show(req, res) {
	//recuperiamo l'id dall'URL e lo trasformiamo in un numero
	const id = parseInt(req.params.id);
	//cerchiamo il post con quell'id nella lista dei post
	const post = posts.find((post) => post.id === id);

	//facciamo un controllo se non trovo nessun post con quell'id
	if (!post) {
		const err = new Error("Id post not found");
		err.code = 404;
		throw err;
		/*
		//ritorno uno status 404 e un messaggio di errore
		return res.status(404).json({
			error: "Not Found",
			message: "Post non trovato",
		});
		*/
	}
	//diamo in risposta il post trovato
	res.json(post);
}

//store => creazione di un nuovo post
function store(req, res) {
	const { title, content, img, tags } = req.body;
	//creo un nuovo id
	const id = posts[posts.length - 1].id + 1;
	//controllo i parametri in entrata dal body
	if (!title || !content || !img || !tags?.length) {
		const err = new Error("Invalid params");
		err.code = 400;
		throw err;
		//return res.status(400).json({ error: "Invalid params" });
	}
	//creo un nuovo oggetto post
	const newPost = {
		id: id,
		title: req.body.title,
		content: req.body.content,
		img: req.body.img,
		tags: req.body.tags,
	};
	//aggiungo il nuovo post alla lista dei post
	posts.push(newPost);
	//diamo una risposta con la lista dei post aggiornata
	res.status(201).json(posts);
}

//update => modifica totale di un post
function update(req, res) {
	const { title, content, img, tags } = req.body;
	//recuperiamo l'id dall'URL e lo trasformiamo in un numero
	const id = parseInt(req.params.id);
	//cerchiamo il post con quell'id nella lista dei post
	const post = posts.find((post) => post.id === id);

	//facciamo un controllo se non trovo nessun post con quell'id
	if (!post) {
		const err = new Error("Id post not found");
		err.code = 404;
		throw err;
		/*
		//ritorno uno status 404 e un messaggio di errore
		return res.status(404).json({
			error: "Not Found",
			message: "Post non trovato",
		});*/
	}
	//controllo i parametri in entrata dal body
	if (!title || !content || !img || !tags?.length) {
		const err = new Error("Invalid params");
		err.code = 400;
		throw err;
		//return res.status(400).json({ error: "Invalid params" });
	}

	post.title = title;
	post.content = content;
	post.img = img;
	post.tags = tags;

	//diamo in risposta il post trovato
	res.json(post);
}

//modify => modifica parziale di un post
function modify(req, res) {
	//recuperiamo l'id dall'URL e lo trasformiamo in un numero
	const id = parseInt(req.params.id);
	//cerchiamo il post con quell'id nella lista dei post
	const post = posts.find((post) => post.id === id);

	//facciamo un controllo se non trovo nessun post con quell'id
	if (!post) {
		const err = new Error("Id post not found");
		err.code = 404;
		throw err;
		/*
		//ritorno uno status 404 e un messaggio di errore
		return res.status(404).json({
			error: "Not Found",
			message: "Post non trovato",
		});*/
	}

	post.title = req.body.title;

	//diamo in risposta il post trovato
	res.json(post);
}

//destroy => cancellazione di un post
function destroy(req, res) {
	//recuperiamo l'id dall'URL e lo trasformiamo in un numero
	const id = parseInt(req.params.id);
	//cerchiamo il post con quell'id nella lista dei post
	const post = posts.find((post) => post.id === id);

	//facciamo un controllo se non trovo nessun post con quell'id
	if (!post) {
		const err = new Error("Id post not found");
		err.code = 404;
		throw err;
		/*
		//ritorno uno status 404 e un messaggio di errore
		return res.status(404).json({
			error: "Not Found",
			message: "Post non trovato",
		});*/
	}

	//rimuoviamo il post con quell'id dalla lista dei post
	posts.splice(posts.indexOf(post), 1);
	//stampiamo in console la lista dei post aggiornata
	console.log(posts);
	//diamo una risposta con stato 204 e nessun contenuto
	res.sendStatus(204);
}

//esporto le funzioni
module.exports = { index, show, store, update, modify, destroy };

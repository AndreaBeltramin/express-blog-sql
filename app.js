//! CONFIG EXPRESS
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

//! REGISTERING MIDDLEWARES
const errorsHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");

// configuro gli asset statici sull'applicazione in modo che si possano
// visualizzare le immagini associate ad ogni post
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

//! REGISTERING ROUTES
const postsRouter = require("./routers/posts");
app.use("/posts", postsRouter);

// creo il progetto base con una rotta / che ritorna un testo
app.get("/", (req, res) => {
	res.send("<h1>Server del mio blog</h1>");
});

//! MIDDLEWARE ERROR
app.use(errorsHandler);
app.use(notFound);

//! START LISTENING
app.listen(port, () => {
	console.log("Example app listening on port " + port);
});

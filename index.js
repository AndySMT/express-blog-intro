/*

Bonus:
filtrare i dati sulla base di parametri in query string
*/

//! Importo il modulo express
const express = require("express");

//! Importo il modulo posts
const ImportPosts = require("./data/posts.js");

//! Creo un'istanza di express
const app = express();

//! Creo una porta per il server
const PORT = 2222;

//! metto il server in ascolto sulla porta definita
app.listen(PORT, () => {});

//! definisco path di default
app.use(express.static("public"));

//! definisco rotta index
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

//! definisco rotta bacheca
app.get("/bacheca", (req, res) => {
  res.json({
    posts: ImportPosts,
    counter: ImportPosts.posts.length,
  });
});

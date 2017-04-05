const express = require("express");
const app = express();

const config = require("./knexfile");
const env = process.env.NODE_ENV || "development";
const knex = require("knex")(config[env]);

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

var listaDePessoas = [
  {nome: "João",telefone: "25698521",endereco: "Rua 1"},
  {nome: "Maria",telefone: "26485974",endereco: "Rua Avenida"},
  {nome: "José",telefone: "65874125",endereco: "Avenida 2"}
];

app.get('/pessoas', function(req, res) {
  res.send(listaDePessoas);
});

app.post('/pessoas', function(req, res) {
  contatos.push(req.body);
  res.send(true);
});

app.post("/salvar", (req,res) => {
	let pessoa = req.body;
	knex("pessoas").insert(pessoa, "idpessoa").then((ret) => {
		pessoa.idpessoa = ret[0];
		res.send(true); 
	});
	console.log(pessoa);
});

app.listen("2017");

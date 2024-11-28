import express from "express";
import path from "path";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, './../public')));
server.use('/', ()=>{});

server.listen(8080, ()=>{
    console.log("Servidor funcionando na porta 8080");
})

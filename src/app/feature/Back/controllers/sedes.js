//Para trabajr las conexiones
'use strict'
var pool = require('pg');
var sedes= require('../models/sedes')

var UrlConexion = 'postgres://deprsegw:PNne0NY0oipuuxzlHbJKvQiJM09-dU06@castor.db.elephantsql.com/deprsegw' 
var conexionPsgt = new pool.Client(UrlConexion);

conexionPsgt.connect(function(err) {
  if(err) {
    console.error('No pudo Conectarse a postgres', err);
  }
  else{
    console.log('Conectado Exitosamente a Postgres');
  }
});

function getSedes(req,res){
    conexionPsgt.query('select * from sedes', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      res =  result.rows;
      console.log(res);
      conexionPsgt.end();
  });
}
//Prueba
var req = 'Hola'
var res = [];
getSedes(req,res);

module.exports = {
  getSedes
};
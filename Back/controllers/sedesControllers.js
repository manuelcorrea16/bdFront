
var pool = require('pg');

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

 exports.findAll = (req, res) => {
    conexionPsgt.query('select * from sedes', function(err, result) {
      if(err) {
        console.error('error running query', err);
      }
      res.send(result.rows)
      console.log(res);
      //conexionPsgt.end();
  });
  };
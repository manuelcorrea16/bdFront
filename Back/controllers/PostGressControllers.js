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

 exports.findAllSedes = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*"); 
    conexionPsgt.query('select * from sedes', function(err, result) {
      if(err) {
        console.error('error running query', err);
      }
      res.send(result.rows)
  });
  };
  
  exports.findAllProgramas = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    conexionPsgt.query('select * from programas', function(err, result) {
      if(err) {
        console.error('error running query', err);
      }
      res.send(result.rows)
  });
  };
  
  exports.findAllAsignaturas = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    conexionPsgt.query('select * from asignaturas', function(err, result) {
      if(err) {
        console.error('error running query', err);
      }
      res.send(result.rows)
  });
  };

  exports.findAllGrupos = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    conexionPsgt.query('select * from grupos', function(err, result) {
      if(err) {
        console.error('error running query', err);
      }
      res.send(result.rows)
  });
  };

  exports.findAllProfesores = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    conexionPsgt.query("select * from empleados where tipo_empleado = 'Docente'", function(err, result) {
      if(err) {
        console.error('error running query', err);
      }
      res.send(result.rows)
  });
  };


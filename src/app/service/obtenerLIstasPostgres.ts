import { Injectable } from "@angular/core";
import { sede } from 'Back/models/sedes';


@Injectable()
//Esto es una prueba debe retornar lo que retorne la consulta del js
export class postGresService{
    obtenerSedes(): sede[] {
        return [
            { codigo: 1, nombre: 'Sede Medellín', cod_ciudad: 1 },
            { codigo: 2, nombre: 'Sede Bello', cod_ciudad: 12 },
            { codigo: 3, nombre: 'Sede Oriente ', cod_ciudad: 13 },
            { codigo: 4, nombre: 'Sede Apartadó', cod_ciudad: 11 }
          ]
    }
}
import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'vegeta',
          poder: 7500
        },
        {
          nombre: 'Freezer',
          poder: 12000
        }
      ];

      get personajes(): Personaje[] {
        return [...this._personajes];
      }

    constructor(){}

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}
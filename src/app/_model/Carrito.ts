import { Albums } from "./Albums";
import { Cancion } from "./Cancion";
import { Usuarios } from "./Usuarios";

export class Carrito{
    id : number; 
    usuario : Usuarios;
    cancion : Cancion;
    album : Albums;
}
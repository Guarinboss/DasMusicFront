import { Albums } from "./Albums";
import { Artista } from "./Artista";

/**
 * Clase que mapea el servicio PostRegistroLogin
 */
 export class Cancion{
    nombre: string;
    fechaLanzamiento: Date;
    precio: number;
    duracion: number;
    imagen: any;
    album: Albums;
    artista: Artista;
}
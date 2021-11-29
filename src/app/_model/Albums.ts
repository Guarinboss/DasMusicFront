import { Artista } from "./Artista";

/**
 * Clase que mapea el servicio de artista 
 */
export class Albums {
    id: number;
    fechaLanzamiento: Date;
    nombre: string;
    imagen: any;
    precio: number;
    numeroCanciones: string;
    artista: Artista;
}
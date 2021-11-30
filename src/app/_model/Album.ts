import { Artista } from "./Artista";

export class Album{
    id: number;
    nombre: string;
    fechaLanzamiento: Date;
    numeroCanciones: number;
    precio: number;
    imagen: any;
    id_artista: number;
    artista: Artista;
}
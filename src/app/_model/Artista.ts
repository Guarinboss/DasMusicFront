import { Byte } from "@angular/compiler/src/util";
import { Album } from "./Album";

/**
 * Clase que mapea el servicio de artista 
 */
export class Artista{
    id: number;
    imagen: any;
    nombre: string;
    generoMusical: string;
    fechaNacimiento: Date;
    nacionalidad: string;
    descripcion: string;
    album: Album[];
}
import { generarIdUnico } from "./funcionesgrales";
export class Entidad {
    protected id: number;
    protected nombre: string;

    constructor(nombre: string, idsExistentes: Set<number>) {
        this.id = generarIdUnico(idsExistentes);
        this.nombre = nombre;
    }

    public getNombre():string{
        return this.nombre;
    }
    public getId():number{
        return this.id;
    }

    public setNombre(nombre : string){
        if (nombre !== null) {
            this.nombre = nombre;
        }
    }
}

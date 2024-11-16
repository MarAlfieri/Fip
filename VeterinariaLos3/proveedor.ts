import { Entidad } from "./entidad";
export class Proveedor extends Entidad {
    private telefono: string;

    constructor(nombre: string, telefono: string, idsExistentes: Set<number>) {
        super(nombre, idsExistentes);
        this.telefono = telefono;
    }
    
    public getTelefono():string{
        return this.telefono;
    }

    public setTelefono(telefono:string){
        if(telefono !== null){
            this.telefono = telefono;
        }
    }
}

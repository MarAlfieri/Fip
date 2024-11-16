import { Entidad } from "./entidad";
export class Paciente extends Entidad {
    private especie: string;
    private idDuenio: number;

    constructor(nombre: string, especie: string, idDuenio: number, idsExistentes: Set<number>) {
        super(nombre, idsExistentes);
        this.especie = especie === 'perro' || especie === 'gato' ? especie : 'exotica';
        this.idDuenio = idDuenio;
    }

    
    public getEspecie():string{
        return this.especie;
    }
    public getIdDuenio():number{
        return this.idDuenio;
    }

    

    public setEspecie(especie : string){
        if (especie !== null) {
            this.especie = especie;
        }
    }

    public setIdDuenio(idDuenio : number){
        if (idDuenio !== null) {
            this.idDuenio = idDuenio;
        }
    }
}

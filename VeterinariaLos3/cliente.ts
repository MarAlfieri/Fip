import { Entidad } from "./entidad";
export class Cliente extends Entidad {
    private telefono: string;
    private esVIP: boolean;
    private visitas: number;

    constructor(nombre: string, telefono: string, visitas: number, idsExistentes: Set<number>) {
        super(nombre, idsExistentes);
        this.telefono = telefono;
        this.visitas = visitas;
        this.esVIP = visitas >= 5;
    }
   
    public getTelefono(): string{
        return this.telefono;
    }
    public getVisitas(): number{
        return this.visitas;
    }
    public getEsVip(): boolean{
        return this.esVIP;
    }

    public setTelefono(telefono : string){
        if (telefono !== null) {
            this.telefono = telefono;
        }
    }
    public setVisita(visitas : number){
        if (visitas !== null) {
            this.visitas = visitas;
        }
    }

    public incrementarVisitas(): void {
        this.visitas++;
        if (this.visitas >= 5) {
            this.esVIP = true;
        }
    }
}

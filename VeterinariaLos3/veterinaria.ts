import { Entidad } from "./entidad";
import { Cliente } from "./cliente";
import { Paciente } from "./paciente";
export class Veterinaria extends Entidad {
    private direccion: string;
    private clientes: Map<number, Cliente> = new Map();
    private pacientes: Map<number, Paciente> = new Map();

    constructor(nombre: string, direccion: string, idsExistentes: Set<number>) {
        super(nombre, idsExistentes);
        this.direccion = direccion;
    }
    
    public getDireccion():string{
        return this.direccion;
    }

    public altaCliente(nombre: string, telefono: string, visitas: number, idsExistentes : Set<number>) :void {
        const cliente = new Cliente(nombre, telefono, visitas, idsExistentes);
        this.clientes.set(cliente.getId(), cliente);
    }

    public modificarCliente(id: number, nombre?: string, telefono?: string, visitas?: number): void {
        const cliente = this.clientes.get(id);
        if (cliente) {
            if (nombre) cliente.setNombre(nombre);
            if (telefono) cliente.setTelefono(telefono);
            if (visitas) cliente.setVisita(visitas);
            console.log("Cliente modificado correctamente...".yellow)
        } else {
            console.log("Cliente no encontrado...".red)
        }
    }

    public bajaCliente(id: number): void {
        if (this.clientes.get(id) !== undefined) {
            this.clientes.delete(id);
            console.log("Cliente elimiando correctamente...".yellow);
        }else{
            console.log("Cliente no encontrado...".red);
        }
    }
    
    public imprimirClientes(): void {
        console.log("Clientes:");
        this.clientes.forEach(cliente => {
            console.log(`ID: ${cliente.getId()}, Nombre: ${cliente.getNombre()}, Teléfono: ${cliente.getTelefono()}, VIP: ${cliente.getEsVip()}, Visitas: ${cliente.getVisitas()}`);
        });
    }

    public altaPaciente(nombre: string, especie: string, idDuenio: number, idsExistentes : Set<number> ): void {
        const paciente = new Paciente(nombre, especie, idDuenio, idsExistentes);
        this.pacientes.set(paciente.getId(), paciente);
    }

    public modificarPaciente(id: number, nombre?: string, especie?: string, idDuenio?: number): void {
        const paciente = this.pacientes.get(id);
        if (paciente) {
            if (nombre) paciente.setNombre(nombre);
            if (especie) paciente.setEspecie(especie === 'perro' || especie === 'gato' ? especie : 'exotica');
            if (idDuenio) paciente.setIdDuenio(idDuenio)
            console.log("Paciente modificado correctamente...".yellow)
        } else {
            console.log("Paciente no encontrado".red)
        }
    }

    public bajaPaciente(id: number): void {
        if (this.pacientes.get(id) !== undefined) {
            this.pacientes.delete(id);
            console.log("Paciente elimiando correctamente...".yellow)
        }else{
            console.log("Paciente no encontrado...".red)
        }
    }

    public imprimirPacientes(): void {
        console.log("Pacientes:");
        this.pacientes.forEach(paciente => {
            console.log(`ID: ${paciente.getId()}, Nombre: ${paciente.getNombre()}, Especie: ${paciente.getEspecie()}, ID Dueño: ${paciente.getIdDuenio()}`);
        });
    }

    public setDireccion(direccion : string){
        if(direccion !== null){
            this.direccion = direccion;
        }
    }
}

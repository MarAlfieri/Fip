import { Veterinaria } from "./veterinaria";
import { Proveedor } from "./proveedor";

export class RedVeterinarias {
    private idsExistentes: Set<number> = new Set();
    private veterinarias: Map<number, Veterinaria> = new Map();
    private proveedores: Map<number, Proveedor> = new Map();

    //Metodos propios de la la red de Veterinarias
    public altaVeterinaria(nombre: string, direccion: string): void {
        const vet = new Veterinaria(nombre, direccion, this.idsExistentes);
        this.veterinarias.set(vet.getId(), vet);
    }

    public modificarVeterinaria(id: number, nombre?: string, direccion?: string): void {
        const vet = this.veterinarias.get(id);
        if (vet) {
            if (nombre) vet.setNombre(nombre);
            if (direccion) vet.setDireccion(direccion);
        } else {
            console.log("Veterinaria no encontrada".red)
        }
    }
    public bajaVeterinaria(id: number): void {
        if (this.veterinarias.get(id) !== undefined) {
            this.veterinarias.delete(id);
            console.log("Veterinaria elimianda correctamente...".yellow);
        }else{
            console.log("Veterinaria no encontrada...".red);
        }
    }
    
    public imprimirVeterinarias(): void {
        console.log("Veterinarias:");
        this.veterinarias.forEach(vet => {
            console.log(`ID: ${vet.getId()}, Nombre: ${vet.getNombre()}, Dirección: ${vet.getDireccion()}`);
            vet.imprimirClientes();
            vet.imprimirPacientes();
        });
    }

    public altaProveedor(nombre: string, telefono: string): void {
        const proveedor = new Proveedor(nombre, telefono, this.idsExistentes);
        this.proveedores.set(proveedor.getId(), proveedor);
    }

    public modificarProveedor(id: number, nombre?: string, telefono?: string): void {
        const proveedor = this.proveedores.get(id);
        if (proveedor) {
            if (nombre) proveedor.setNombre(nombre);
            if (telefono) proveedor.setTelefono(telefono);
            console.log("Proveedor modificado correctamente...".yellow)
        } else {
            console.log("Proveedor no encontrado".red)
        }
    }
    
    public bajaProveedor(id: number): void {
        if (this.proveedores.get(id) !== undefined) {
            this.proveedores.delete(id);
            console.log("Proveedor elimiando correctamente...".yellow);
        }else{
            console.log("Proveedor no encontrado...".red);
        }
    }

    public imprimirProveedores(): void {
        console.log("Proveedores:");
        this.proveedores.forEach(proveedor => {
            console.log(`ID: ${proveedor.getId()}, Nombre: ${proveedor.getNombre()}, Teléfono: ${proveedor.getTelefono()}`);
        });
    }

    //Metodos propios de cada Veterinaria
    
    public altaClienteVeterinaria(idVeterinaria: number, nombre: string, telefono: string, visitas: number) :void {
        this.veterinarias.get(idVeterinaria)?.altaCliente(nombre, telefono , visitas, this.idsExistentes)
    }

    public modificarClienteVeterinaria(idVeterinaria: number, idCliente: number, nombre: string, telefono?: string, visitas?: number) :void {
        this.veterinarias.get(idVeterinaria)?.modificarCliente(idCliente, nombre,telefono, visitas );
    }

    public bajaClienteVeterinaria(idVeterinaria: number, idCliente: number) :void {
        this.veterinarias.get(idVeterinaria)?.bajaCliente(idCliente);
    }

    public altaPacienteVeterinaria(idVeterinaria: number, nombre: string, especie: string, idDuenio: number) :void {
        this.veterinarias.get(idVeterinaria)?.altaPaciente(nombre, especie, idDuenio, this.idsExistentes)
    }

    public modificarPacienteVeterinaria(idVeterinaria: number, idPaciente: number, nombre?: string, especie?: string, idDuenio?: number) :void {
        this.veterinarias.get(idVeterinaria)?.modificarPaciente(idPaciente, nombre, especie, idDuenio );
    }

    public bajaPacienteVeterinaria(idVeterinaria: number, id: number) :void {
        this.veterinarias.get(idVeterinaria)?.bajaPaciente(id);
    }
    
    public imprimirClientesVeterinaria(idVeterinaria: number) :void {
        this.veterinarias.get(idVeterinaria)?.imprimirClientes();
    }
    public imprimirPacientesVeterinaria(idVeterinaria: number) :void {
        this.veterinarias.get(idVeterinaria)?.imprimirPacientes();
    }
}
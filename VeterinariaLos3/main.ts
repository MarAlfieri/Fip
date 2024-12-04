import * as readlineSync from 'readline-sync';
import "colors";
import { RedVeterinarias } from './redveterinarias';

// Crear una instancia de la red de veterinarias
const red = new RedVeterinarias();

//Opciones del menú principal
function mostrarMenuPrincipal() {
    console.log("________________________________".green);
    console.log("\n 🏥 Red de Veterinarias Los 3 🐕".yellow);
    console.log("________________________________".green);
    console.log("\n--- MENÚ PRINCIPAL ---".blue);
    console.log("________________________________".green);
    console.log("1.🏥 Veterinarias".green);
    console.log("2.🛒 Proveedores".green);
    console.log("3.👫 Clientes".green);
    console.log("4.🐕 Pacientes".green);
    console.log("5.📤 Salir".green);
    console.log("________________________________".green);
}

//Menú secundario común a todas las entidades para alta, baja y modificación
function mostrarMenuAMBL(entidad: string) {
    console.log("________________________________".green);
    console.log("\n 🏥 Red de Veterinarias Los 3 🐕".yellow)
    console.log("________________________________".green);
    console.log(`\n--- MENÚ ${entidad} ---`.blue);
    console.log("________________________________".green);
    console.log("1.📥 Alta".green);
    console.log("2.📝 Modificación".green);
    console.log("3.🗑️  Baja".green);
    console.log("4.🖨️  Listado".green);
    console.log("5.📤 Volver al menú principal".green);
    console.log("________________________________".green);
}

//Alta, modificación, baja y listado de Veterinarias
function gestionarVeterinarias() {
    let continuar = true;
    while (continuar) {
        mostrarMenuAMBL("VETERINARIAS");
        const opcion = readlineSync.question("Seleccione una opcion: ".blue);
        switch (opcion) {
            case "1":
                const nombreVet = readlineSync.question("Ingrese el nombre de la veterinaria: ");
                const direccionVet = readlineSync.question("Ingrese direccion Veterinaria: ");
                red.altaVeterinaria(nombreVet, direccionVet)
                console.log(`Veterinaria ${nombreVet} ingresada correctamente.`.yellow);
                break;
            case "2":
                const idVetModificar = readlineSync.questionInt("Ingrese Id de veterinaria para modificar datos: ");
                const nuevoNombreVet = readlineSync.question("Ingrese el nuevo nombre de la veterinaria: ");
                const nuevaDireccionVet = readlineSync.question("Ingrese nueva direccion Veterinaria: ");
                red.modificarVeterinaria(idVetModificar, nuevoNombreVet, nuevaDireccionVet);
                break;
            case "3":
                const idVetBorrar = readlineSync.questionInt("Ingrese Id de Veterinaria a dar de baja: ");
                red.bajaVeterinaria(idVetBorrar);
                break;
            case "4":
                console.log("IMPRESIÓN DE VETERINARIAS DE LA RED".green);
                red.imprimirVeterinarias();
                break;
            case "5":
                continuar = false;
                console.log("Volviendo al Menú principal..".yellow);
                break;
            default:
                console.log("Opción inválida.".red);
                break;
        }
    }
}

//Alta, modificación, baja y listado de Proveedores
function gestionarProveedores() {
    let continuar: boolean = true;
    while (continuar) {
        mostrarMenuAMBL("PROVEEDORES");

        const opcion = readlineSync.question("Seleccione una opcion: ".blue);

        switch (opcion) {
            case "1":
                const nombre = readlineSync.question("Ingrese el nombre del proveedor: ");
                const telefono = readlineSync.question("Ingrese el telefono del proveedor: ");
                red.altaProveedor(nombre, telefono);
                console.log(`Proveedor ${nombre} ingresado correctamente.`.yellow);
                break;
            case "2":
                const idProveedorModificar = readlineSync.questionInt("Ingrese Id de proveedor para modificar datos: ");
                const nuevoNombreProveedor = readlineSync.question("Ingrese el nuevo nombre del proveedor: ");
                red.modificarProveedor(idProveedorModificar, nuevoNombreProveedor);
                break;
            case "3":
                const idProveedorBaja = readlineSync.questionInt("Ingrese Id de proveedor a dar de baja: ");
                red.bajaProveedor(idProveedorBaja);
                break;
            case "4":
                console.log("IMPRESIÓN DE PROVEEDORES DE LA RED".green);
                red.imprimirProveedores();
                break;
            case "5":
                continuar = false;
                console.log("Volviendo al Menú principal..".yellow);
                break;
            default:
                console.log("Opción inválida.".red);
                break;
        }
    }
}
//Alta, modificación, baja y listado de Clientes
function gestionarClientes() {
    let continuar: boolean = true;
    while (continuar) {
        mostrarMenuAMBL("CLIENTES");

        const opcion = readlineSync.question("Seleccione una opcion: ".blue);

        let idVeterinaria: number = 0;
        if (parseInt(opcion) > 0 && parseInt(opcion) < 5){
            idVeterinaria = readlineSync.questionInt("Ingrese Id de veterinaria para el Cliente: ");
        }
        switch (opcion) {
            case "1":
                const nombre = readlineSync.question("Ingrese el nombre del cliente: ");
                const telefono = readlineSync.question("Ingrese el telefono del cliente: ");
                const visitas = readlineSync.questionInt("Ingrese el numero de visitas del cliente: ");
                red.altaClienteVeterinaria(idVeterinaria, nombre, telefono, visitas);
                console.log(`Cliente ${nombre} ingresado correctamente.`.yellow);
                break;
            case "2":
                const idClienteModificar = readlineSync.questionInt("Ingrese Id de cliente a modificar: ");
                const nuevoNombreCliente = readlineSync.question("Ingrese el nuevo nombre del cliente: ");
                red.modificarClienteVeterinaria(idVeterinaria, idClienteModificar, nuevoNombreCliente);
                break;
            case "3":
                const idClienteBaja = readlineSync.questionInt("Ingrese Id del cliente a dar de baja: ");
                red.bajaClienteVeterinaria(idVeterinaria, idClienteBaja);
                break;
            case "4":
                console.log("IMPRESIÓN DE CLIENTES POR VETERINARIA SELECCIONADA".green);
                red.imprimirClientesVeterinaria(idVeterinaria);
                break;
            case "5":
                continuar = false;
                console.log("Volviendo al Menú principal..".yellow);
                break;
            default:
                console.log("Opción inválida.".red);
                break;
        }
    }
}

//Alta, modificación, baja y listado de Pacientes
function gestionarPacientes() {
    let continuar: boolean = true;
    while (continuar) {
        mostrarMenuAMBL("PACIENTES");
        const opcion = readlineSync.question("Seleccione una opcion: ".blue);

        let idVeterinaria: number = 0;
        if (parseInt(opcion) > 0 && parseInt(opcion) < 5){
            idVeterinaria = readlineSync.questionInt("Ingrese Id de veterinaria para el Paciente: ");
        }
        switch (opcion) {
            case "1":
                const nombre = readlineSync.question("Ingrese el nombre del paciente: ");
                const especie = readlineSync.question("Ingrese la especie del paciente: ");
                const idDuenio = readlineSync.questionInt("Ingrese Id del dueno de la mascota: ");
                red.altaPacienteVeterinaria(idVeterinaria, nombre, especie, idDuenio);
                console.log(`Paciente ${nombre} ingresado correctamente.`.yellow);
                break;
            case "2":
                const idPacienteModificar = readlineSync.questionInt("Ingrese Id de paciente a modificar: ");
                const nuevoNombrePaciente = readlineSync.question("Ingrese el nuevo nombre del paciente: ");
                red.modificarPacienteVeterinaria(idVeterinaria, idPacienteModificar, nuevoNombrePaciente);
                break;
            case "3":
                const idPacienteBaja = readlineSync.questionInt("Ingrese Id del paciente a dar de baja: ");
                red.bajaPacienteVeterinaria(idVeterinaria, idPacienteBaja);
                break;
            case "4":
                console.log("IMPRESIÓN DE PACIENTES POR VETERINARIA SELECCIONADA".green);
                red.imprimirPacientesVeterinaria(idVeterinaria);
                break;
            case "5":
                continuar = false;
                console.log("Volviendo al Menú principal..".yellow);
                break;
            default:
                console.log("Opción inválida.".red);
                break;
        }
    }
}

//Despliegue del Menú principal
function main() {
    let continuar = true;
    while (continuar) {
        mostrarMenuPrincipal();
        const opcion = readlineSync.question("Seleccione una opcion: ".blue);
        switch (opcion) {
            case "1":
                gestionarVeterinarias();
                break;
            case "2":
                gestionarProveedores();
                break;
            case "3":
                gestionarClientes();
                break;
            case "4":
                gestionarPacientes();
                break;
            case "5":
                continuar = false;
                console.log("Saliendo del programa...".yellow);
                break;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida.".red);
                break;
        }
    }
}

main();

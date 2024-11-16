"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var redveterinarias_1 = require("./redveterinarias");
// Crear una instancia de la red de veterinarias
var red = new redveterinarias_1.RedVeterinarias();
function mostrarMenuPrincipal() {
    console.log("Red de Veterinarias Los 3");
    console.log("\n--- MENÚ PRINCIPAL ---");
    console.log("1. Veterinarias");
    console.log("2. Proveedores");
    console.log("3. Clientes");
    console.log("4. Pacientes");
    console.log("5. Salir");
}
function mostrarMenuAMBL(entidad) {
    console.log("Red de Veterinarias Los 3");
    console.log("\n--- MEN\u00DA ".concat(entidad, " ---"));
    console.log("1. Alta");
    console.log("2. Modificación");
    console.log("3. Baja");
    console.log("4. Listado");
    console.log("5. Volver al menú principal");
}
function gestionarVeterinarias() {
    mostrarMenuAMBL("VETERINARIAS");
    var continuar = true;
    while (continuar) {
        var opcion = readlineSync.questionInt("Seleccione una opción: ");
        switch (opcion) {
            case 1:
                var nombreVet = readlineSync.question("Ingrese el nombre de la veterinaria: ");
                var direccionVet = readlineSync.question("Ingrese dirección Veterinaria: ");
                red.altaVeterinaria(nombreVet, direccionVet);
                console.log("Veterinaria ".concat(nombreVet, " ingresada correctamente."));
                break;
            case 2:
                var idVetModificar = readlineSync.questionInt("Ingrese Id de veterinaria para modificar datos: ");
                var nuevoNombreVet = readlineSync.question("Ingrese el nuevo nombre de la veterinaria: ");
                var nuevaDireccionVet = readlineSync.question("Ingrese nueva dirección Veterinaria: ");
                red.modificarVeterinaria(idVetModificar, nuevoNombreVet, nuevaDireccionVet);
                break;
            case 3:
                var idVetBorrar = readlineSync.questionInt("Ingrese Id de Veterinaria a dar de baja: ");
                red.bajaVeterinaria(idVetBorrar);
                break;
            case 4:
                console.log("IMPRESIÓN DE VETERINARIAS DE LA RED");
                red.imprimirVeterinarias();
                break;
            case 5:
                continuar = false;
                console.log("Volviendo al Menú principal..");
                break;
            default:
                console.log("Opción inválida.");
                break;
        }
    }
}
function gestionarProveedores() {
    mostrarMenuAMBL("PROVEEDORES");
    var continuar = true;
    while (continuar) {
        var opcion = readlineSync.questionInt("Seleccione una opción: ");
        switch (opcion) {
            case 1:
                var nombre = readlineSync.question("Ingrese el nombre del proveedor: ");
                var telefono = readlineSync.question("Ingrese el telefono del proveedor: ");
                red.altaProveedor(nombre, telefono);
                console.log("Proveedor ".concat(nombre, " ingresado correctamente."));
                break;
            case 2:
                var idProveedorModificar = readlineSync.questionInt("Ingrese Id de proveedor para modificar datos: ");
                var nuevoNombreProveedor = readlineSync.question("Ingrese el nuevo nombre del proveedor: ");
                red.modificarProveedor(idProveedorModificar, nuevoNombreProveedor);
                break;
            case 3:
                var idProveedorBaja = readlineSync.questionInt("Ingrese Id de proveedor a dar de baja: ");
                red.bajaProveedor(idProveedorBaja);
                break;
            case 4:
                console.log("IMPRESIÓN DE PROVEEDORES DE LA RED");
                red.imprimirProveedores();
                break;
            case 5:
                continuar = false;
                console.log("Volviendo al Menú principal..");
                break;
            default:
                console.log("Opción inválida.");
                break;
        }
    }
}
function gestionarClientes() {
    mostrarMenuAMBL("CLIENTES");
    var continuar = true;
    while (continuar) {
        var opcion = readlineSync.questionInt("Seleccione una opción: ");
        var idVeterinaria = 0;
        if (opcion > 0 && opcion < 5) {
            idVeterinaria = readlineSync.questionInt("Ingrese Id de veterinaria para el Cliente: ");
        }
        switch (opcion) {
            case 1:
                var nombre = readlineSync.question("Ingrese el nombre del cliente: ");
                var telefono = readlineSync.question("Ingrese el telefono del cliente: ");
                var visitas = readlineSync.questionInt("Ingrese el número de visitas del cliente: ");
                red.altaClienteVeterinaria(idVeterinaria, nombre, telefono, visitas);
                console.log("Cliente ".concat(nombre, " ingresado correctamente."));
                break;
            case 2:
                var idClienteModificar = readlineSync.questionInt("Ingrese Id de cliente a modificar: ");
                var nuevoNombreCliente = readlineSync.question("Ingrese el nuevo nombre del cliente: ");
                red.modificarClienteVeterinaria(idVeterinaria, idClienteModificar, nuevoNombreCliente);
                break;
            case 3:
                var idClienteBaja = readlineSync.questionInt("Ingrese Id del cliente a dar de baja: ");
                red.bajaClienteVeterinaria(idVeterinaria, idClienteBaja);
                break;
            case 4:
                console.log("IMPRESIÓN DE CLIENTES POR VETERINARIA SELECCIONADA");
                red.imprimirClientesVeterinaria(idVeterinaria);
                break;
            case 5:
                continuar = false;
                console.log("Volviendo al Menú principal..");
                break;
            default:
                console.log("Opción inválida.");
                break;
        }
    }
}
function gestionarPacientes() {
    mostrarMenuAMBL("PACIENTES");
    var continuar = true;
    while (continuar) {
        var opcion = readlineSync.questionInt("Seleccione una opción: ");
        var idVeterinaria = 0;
        if (opcion > 0 && opcion < 5) {
            idVeterinaria = readlineSync.questionInt("Ingrese Id de veterinaria para el Paciente: ");
        }
        switch (opcion) {
            case 1:
                var nombre = readlineSync.question("Ingrese el nombre del paciente: ");
                var especie = readlineSync.question("Ingrese la especie del paciente: ");
                var idDuenio = readlineSync.questionInt("Ingrese Id del dueño de la mascota: ");
                red.altaPacienteVeterinaria(idVeterinaria, nombre, especie, idDuenio);
                console.log("Paciente ".concat(nombre, " ingresado correctamente."));
                break;
            case 2:
                var idPacienteModificar = readlineSync.questionInt("Ingrese Id de paciente a modificar: ");
                var nuevoNombrePaciente = readlineSync.question("Ingrese el nuevo nombre del paciente: ");
                red.modificarPacienteVeterinaria(idVeterinaria, idPacienteModificar, nuevoNombrePaciente);
                break;
            case 3:
                var idPacienteBaja = readlineSync.questionInt("Ingrese Id del paciente a dar de baja: ");
                red.bajaPacienteVeterinaria(idVeterinaria, idPacienteBaja);
                break;
            case 4:
                console.log("IMPRESIÓN DE PACIENTES POR VETERINARIA SELECCIONADA");
                red.imprimirPacientesVeterinaria(idVeterinaria);
                break;
            case 5:
                continuar = false;
                console.log("Volviendo al Menú principal..");
                break;
            default:
                console.log("Opción inválida.");
                break;
        }
    }
}
function main() {
    var continuar = true;
    while (continuar) {
        mostrarMenuPrincipal();
        var opcion = readlineSync.questionInt("Seleccione una opción: ");
        switch (opcion) {
            case 1:
                gestionarVeterinarias();
                break;
            case 2:
                gestionarProveedores();
                break;
            case 3:
                gestionarClientes();
                break;
            case 4:
                gestionarPacientes();
                break;
            case 5:
                continuar = false;
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción inválida. Por favor, seleccione una opción válida.");
                break;
        }
    }
}
main();

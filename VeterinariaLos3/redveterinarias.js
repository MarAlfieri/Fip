"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinarias = void 0;
var veterinaria_1 = require("./veterinaria");
var proveedor_1 = require("./proveedor");
var RedVeterinarias = /** @class */ (function () {
    function RedVeterinarias() {
        this.idsExistentes = new Set();
        this.veterinarias = new Map();
        this.proveedores = new Map();
    }
    //Metodos propios de la la red de Veterinarias
    RedVeterinarias.prototype.altaVeterinaria = function (nombre, direccion) {
        var vet = new veterinaria_1.Veterinaria(nombre, direccion, this.idsExistentes);
        this.veterinarias.set(vet.getId(), vet);
    };
    RedVeterinarias.prototype.modificarVeterinaria = function (id, nombre, direccion) {
        var vet = this.veterinarias.get(id);
        if (vet) {
            if (nombre)
                vet.setNombre(nombre);
            if (direccion)
                vet.setDireccion(direccion);
        }
    };
    RedVeterinarias.prototype.bajaVeterinaria = function (id) {
        this.veterinarias.delete(id);
    };
    RedVeterinarias.prototype.imprimirVeterinarias = function () {
        console.log("Veterinarias:");
        this.veterinarias.forEach(function (vet) {
            console.log("ID: ".concat(vet.getId(), ", Nombre: ").concat(vet.getNombre(), ", Direcci\u00F3n: ").concat(vet.getDireccion()));
            vet.imprimirClientes();
            vet.imprimirPacientes();
        });
    };
    RedVeterinarias.prototype.altaProveedor = function (nombre, telefono) {
        var proveedor = new proveedor_1.Proveedor(nombre, telefono, this.idsExistentes);
        this.proveedores.set(proveedor.getId(), proveedor);
    };
    RedVeterinarias.prototype.modificarProveedor = function (id, nombre, telefono) {
        var proveedor = this.proveedores.get(id);
        if (proveedor) {
            if (nombre)
                proveedor.setNombre(nombre);
            if (telefono)
                proveedor.setTelefono(telefono);
        }
    };
    RedVeterinarias.prototype.bajaProveedor = function (id) {
        this.proveedores.delete(id);
    };
    RedVeterinarias.prototype.imprimirProveedores = function () {
        console.log("Proveedores:");
        this.proveedores.forEach(function (proveedor) {
            console.log("ID: ".concat(proveedor.getId(), ", Nombre: ").concat(proveedor.getNombre(), ", Tel\u00E9fono: ").concat(proveedor.getTelefono()));
        });
    };
    //Metodos propios de cada Veterinaria
    RedVeterinarias.prototype.altaClienteVeterinaria = function (idVeterinaria, nombre, telefono, visitas) {
        var _a;
        (_a = this.veterinarias.get(idVeterinaria)) === null || _a === void 0 ? void 0 : _a.altaCliente(nombre, telefono, visitas, this.idsExistentes);
    };
    RedVeterinarias.prototype.modificarClienteVeterinaria = function (idVeterinaria, idCliente, nombre, telefono, visitas) {
        var _a;
        (_a = this.veterinarias.get(idVeterinaria)) === null || _a === void 0 ? void 0 : _a.modificarCliente(idCliente, nombre, telefono, visitas);
    };
    RedVeterinarias.prototype.bajaClienteVeterinaria = function (idVeterinaria, idCliente) {
        var _a;
        (_a = this.veterinarias.get(idVeterinaria)) === null || _a === void 0 ? void 0 : _a.bajaCliente(idCliente);
    };
    RedVeterinarias.prototype.altaPacienteVeterinaria = function (idVeterinaria, nombre, especie, idDuenio) {
        var _a;
        (_a = this.veterinarias.get(idVeterinaria)) === null || _a === void 0 ? void 0 : _a.altaPaciente(nombre, especie, idDuenio, this.idsExistentes);
    };
    RedVeterinarias.prototype.modificarPacienteVeterinaria = function (idVeterinaria, idPaciente, nombre, especie, idDuenio) {
        var _a;
        (_a = this.veterinarias.get(idVeterinaria)) === null || _a === void 0 ? void 0 : _a.modificarPaciente(idPaciente, nombre, especie, idDuenio);
    };
    RedVeterinarias.prototype.bajaPacienteVeterinaria = function (idVeterinaria, id) {
        var _a;
        (_a = this.veterinarias.get(idVeterinaria)) === null || _a === void 0 ? void 0 : _a.bajaPaciente(id);
    };
    RedVeterinarias.prototype.imprimirClientesVeterinaria = function (idVeterinaria) {
        var _a;
        (_a = this.veterinarias.get(idVeterinaria)) === null || _a === void 0 ? void 0 : _a.imprimirClientes();
    };
    RedVeterinarias.prototype.imprimirPacientesVeterinaria = function (idVeterinaria) {
        var _a;
        (_a = this.veterinarias.get(idVeterinaria)) === null || _a === void 0 ? void 0 : _a.imprimirPacientes();
    };
    return RedVeterinarias;
}());
exports.RedVeterinarias = RedVeterinarias;

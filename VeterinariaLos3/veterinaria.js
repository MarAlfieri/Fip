"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var entidad_1 = require("./entidad");
var cliente_1 = require("./cliente");
var paciente_1 = require("./paciente");
var Veterinaria = /** @class */ (function (_super) {
    __extends(Veterinaria, _super);
    function Veterinaria(nombre, direccion, idsExistentes) {
        var _this = _super.call(this, nombre, idsExistentes) || this;
        _this.clientes = new Map();
        _this.pacientes = new Map();
        _this.direccion = direccion;
        return _this;
    }
    Veterinaria.prototype.getDireccion = function () {
        return this.direccion;
    };
    Veterinaria.prototype.altaCliente = function (nombre, telefono, visitas, idsExistentes) {
        var cliente = new cliente_1.Cliente(nombre, telefono, visitas, idsExistentes);
        this.clientes.set(cliente.getId(), cliente);
    };
    Veterinaria.prototype.modificarCliente = function (id, nombre, telefono, visitas) {
        var cliente = this.clientes.get(id);
        if (cliente) {
            if (nombre)
                cliente.setNombre(nombre);
            if (telefono)
                cliente.setTelefono(telefono);
            if (visitas)
                cliente.setVisita(visitas);
        }
    };
    Veterinaria.prototype.bajaCliente = function (id) {
        this.clientes.delete(id);
    };
    Veterinaria.prototype.imprimirClientes = function () {
        console.log("Clientes:");
        this.clientes.forEach(function (cliente) {
            console.log("ID: ".concat(cliente.getId(), ", Nombre: ").concat(cliente.getNombre(), ", Tel\u00E9fono: ").concat(cliente.getTelefono(), ", VIP: ").concat(cliente.getEsVip(), ", Visitas: ").concat(cliente.getVisitas()));
        });
    };
    Veterinaria.prototype.altaPaciente = function (nombre, especie, idDuenio, idsExistentes) {
        var paciente = new paciente_1.Paciente(nombre, especie, idDuenio, idsExistentes);
        this.pacientes.set(paciente.getId(), paciente);
    };
    Veterinaria.prototype.modificarPaciente = function (id, nombre, especie, idDuenio) {
        var paciente = this.pacientes.get(id);
        if (paciente) {
            if (nombre)
                paciente.setNombre(nombre);
            if (especie)
                paciente.setEspecie(especie === 'perro' || especie === 'gato' ? especie : 'exotica');
            if (idDuenio)
                paciente.setIdDuenio(idDuenio);
        }
    };
    Veterinaria.prototype.bajaPaciente = function (id) {
        this.pacientes.delete(id);
    };
    Veterinaria.prototype.imprimirPacientes = function () {
        console.log("Pacientes:");
        this.pacientes.forEach(function (paciente) {
            console.log("ID: ".concat(paciente.getId(), ", Nombre: ").concat(paciente.getNombre(), ", Especie: ").concat(paciente.getEspecie(), ", ID Due\u00F1o: ").concat(paciente.getIdDuenio()));
        });
    };
    Veterinaria.prototype.setDireccion = function (direccion) {
        if (direccion !== null) {
            this.direccion = direccion;
        }
    };
    return Veterinaria;
}(entidad_1.Entidad));
exports.Veterinaria = Veterinaria;

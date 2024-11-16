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
exports.Paciente = void 0;
var entidad_1 = require("./entidad");
var Paciente = /** @class */ (function (_super) {
    __extends(Paciente, _super);
    function Paciente(nombre, especie, idDuenio, idsExistentes) {
        var _this = _super.call(this, nombre, idsExistentes) || this;
        _this.especie = especie === 'perro' || especie === 'gato' ? especie : 'exotica';
        _this.idDuenio = idDuenio;
        return _this;
    }
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.getIdDuenio = function () {
        return this.idDuenio;
    };
    Paciente.prototype.setEspecie = function (especie) {
        if (especie !== null) {
            this.especie = especie;
        }
    };
    Paciente.prototype.setIdDuenio = function (idDuenio) {
        if (idDuenio !== null) {
            this.idDuenio = idDuenio;
        }
    };
    return Paciente;
}(entidad_1.Entidad));
exports.Paciente = Paciente;

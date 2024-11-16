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
exports.Cliente = void 0;
var entidad_1 = require("./entidad");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nombre, telefono, visitas, idsExistentes) {
        var _this = _super.call(this, nombre, idsExistentes) || this;
        _this.telefono = telefono;
        _this.visitas = visitas;
        _this.esVIP = visitas >= 5;
        return _this;
    }
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.getVisitas = function () {
        return this.visitas;
    };
    Cliente.prototype.getEsVip = function () {
        return this.esVIP;
    };
    Cliente.prototype.setTelefono = function (telefono) {
        if (!telefono == null) {
            this.telefono = telefono;
        }
    };
    Cliente.prototype.setVisita = function (visitas) {
        if (!visitas == null) {
            this.visitas = visitas;
        }
    };
    Cliente.prototype.incrementarVisitas = function () {
        this.visitas++;
        if (this.visitas >= 5) {
            this.esVIP = true;
        }
    };
    return Cliente;
}(entidad_1.Entidad));
exports.Cliente = Cliente;

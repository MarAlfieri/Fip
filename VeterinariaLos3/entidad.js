"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entidad = void 0;
var funcionesgrales_1 = require("./funcionesgrales");
var Entidad = /** @class */ (function () {
    function Entidad(nombre, idsExistentes) {
        this.id = (0, funcionesgrales_1.generarIdUnico)(idsExistentes);
        this.nombre = nombre;
    }
    Entidad.prototype.getNombre = function () {
        return this.nombre;
    };
    Entidad.prototype.getId = function () {
        return this.id;
    };
    Entidad.prototype.setNombre = function (nombre) {
        if (nombre !== null) {
            this.nombre = nombre;
        }
    };
    return Entidad;
}());
exports.Entidad = Entidad;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarIdUnico = generarIdUnico;
function generarIdUnico(idsExistentes) {
    var id;
    do {
        id = Math.floor(Math.random() * 1000000);
    } while (idsExistentes.has(id));
    idsExistentes.add(id);
    return id;
}

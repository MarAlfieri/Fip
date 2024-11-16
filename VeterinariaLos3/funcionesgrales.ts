export function generarIdUnico(idsExistentes: Set<number>): number {
    let id: number;
    do {
        id = Math.floor(Math.random() * 1000000);
    } while (idsExistentes.has(id));
    idsExistentes.add(id);
    return id;
}

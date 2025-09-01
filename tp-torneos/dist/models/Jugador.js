export default class Jugador {
    id;
    nombre;
    edad;
    posicion;
    constructor(id, nombre, edad, posicion) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion ? posicion : null;
    }
    toString() {
        return `Jugador: ${this.id}, Nombre: ${this.nombre}, Edad: ${this.edad}, Posicion: ${this.posicion}`;
    }
}
//# sourceMappingURL=Jugador.js.map
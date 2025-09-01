export default class Arbitro {
    id;
    nombre;
    experiencia;
    nacionalidad;
    constructor(id, nombre, experiencia, nacionalidad) {
        this.id = id;
        this.nombre = nombre;
        this.experiencia = experiencia;
        this.nacionalidad = nacionalidad;
    }
    toString() {
        return `Arbitro: Nombre: ${this.nombre}, Experiencia: ${this.experiencia}, Nacionalidad: ${this.nacionalidad}`;
    }
}
//# sourceMappingURL=Arbitro.js.map
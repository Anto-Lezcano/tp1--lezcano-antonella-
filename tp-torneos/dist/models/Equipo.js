import Jugador from "./Jugador.js";
export default class Equipo {
    id;
    nombre;
    jugadores = [];
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    agregarJugador(jugador) {
        if (this.jugadores.some((j) => j.id === jugador.id)) {
            throw new Error(`El jugador con ID ${jugador.id} ya existe en el equipo`);
        }
        this.jugadores.push(jugador);
    }
    listarIntegrantes() {
        return this.jugadores.map((jugador) => jugador.toString());
    }
    get cantidad() {
        return this.jugadores.length;
    }
    toString() {
        return `Equipo: ${this.nombre} (${this.cantidad} jugadores)`;
    }
}
//# sourceMappingURL=Equipo.js.map
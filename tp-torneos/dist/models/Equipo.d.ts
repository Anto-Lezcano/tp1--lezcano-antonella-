import type ICompetidor from "../interfaces/ICompetidor.js";
import Jugador from "./Jugador.js";
export default class Equipo implements ICompetidor {
    readonly id: string;
    nombre: string;
    private jugadores;
    constructor(id: string, nombre: string);
    agregarJugador(jugador: Jugador): void;
    listarIntegrantes(): string[];
    get cantidad(): number;
    toString(): string;
}
//# sourceMappingURL=Equipo.d.ts.map
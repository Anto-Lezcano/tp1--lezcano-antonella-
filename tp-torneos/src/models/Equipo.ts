import type ICompetidor from "../interfaces/ICompetidor.js";
import Jugador from "./Jugador.js";

export default class Equipo implements ICompetidor {
  readonly id: string;
  nombre: string;
  private jugadores: Jugador[] = [];

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  agregarJugador(jugador: Jugador): void {
    if (this.jugadores.some((j) => j.id === jugador.id)) {
      throw new Error(`El jugador con ID ${jugador.id} ya existe en el equipo`);
    }
    this.jugadores.push(jugador);
  }
  listarIntegrantes(): string[] {
    return this.jugadores.map((jugador) => jugador.toString());
  }

  get cantidad(): number {
    return this.jugadores.length;
  }
  toString(): string {
    return `Equipo: ${this.nombre} (${this.cantidad} jugadores)`;
  }
}

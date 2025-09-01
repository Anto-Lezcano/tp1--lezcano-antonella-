import Deporte from "./Deporte.js";
import type Equipo from "./Equipo.js";

export default class Futbol extends Deporte {
  constructor() {
    super("Futbol", 11);
  }

  validar(equipo: Equipo): boolean {
    const esValido = equipo.cantidad === this.maxPorEquipo;
    if (!esValido) {
      console.log(
        `El equipo ${equipo.nombre} incumple con la cantidad de jugadores permitidos, debe tener exactamente ${this.maxPorEquipo} jugadores`
      );
    }
    return esValido;
  }
}

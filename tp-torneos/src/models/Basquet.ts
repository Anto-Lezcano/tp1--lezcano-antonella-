import Deporte from "./Deporte.js";
import type Equipo from "./Equipo.js";

export default class Basquet extends Deporte {
  constructor() {
    super("Basquet", 5);
  }

  validar(equipo: Equipo): boolean {
    return equipo.cantidad === this.maxPorEquipo;
  }
}

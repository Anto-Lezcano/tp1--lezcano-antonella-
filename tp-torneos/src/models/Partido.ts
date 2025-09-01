import type IIdentificable from "../interfaces/IIdentificable.js";
import type Equipo from "./Equipo.js";
import type Deporte from "./Deporte.js";
import Resultado from "./Resultado.js";
import type Arbitro from "./Arbitro.js";

export default class Partido implements IIdentificable {
  readonly id: string;
  private local: Equipo;
  private visitante: Equipo;
  private deporte: Deporte;
  private resultado?: Resultado;
  private arbitro?: Arbitro | undefined;
  constructor(
    id: string,
    local: Equipo,
    visitante: Equipo,
    deporte: Deporte,
    arbitro?: Arbitro | undefined
  ) {
    if (local.id === visitante.id) {
      throw new Error("El equipo local no puede ser el mismo que el visitante");
    }

    this.id = id;
    this.local = local;
    this.visitante = visitante;
    this.deporte = deporte;
    this.arbitro = arbitro || undefined;
  }

  asignarArbitro(arbitro: Arbitro): void {
    this.arbitro = arbitro;
  }
  jugar(golesLocal: number, golesVisitante: number): void {
    if (
      !this.deporte.validar(this.local) ||
      !this.deporte.validar(this.visitante)
    ) {
      throw new Error(
        "Uno o ambos equipos no cumplen con las reglas del deporte"
      );
    }

    this.resultado = new Resultado(golesLocal, golesVisitante);
  }

  toString(): string {
    const resultadoStr = this.resultado
      ? this.resultado.toString()
      : "No jugado";
    const arbitroStr = this.arbitro ? `, Arbitro: ${this.arbitro.nombre}` : "";
    return `Partido ${this.id}: ${this.local.nombre} vs ${this.visitante.nombre} (${this.deporte.nombre}) - ${resultadoStr}${arbitroStr}`;
  }

  getResultado(): Resultado | undefined {
    return this.resultado;
  }

  getLocal(): Equipo {
    return this.local;
  }

  getVisitante(): Equipo {
    return this.visitante;
  }
}

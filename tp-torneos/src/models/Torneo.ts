import type IIdentificable from "../interfaces/IIdentificable.js";
import type Partido from "./Partido.js";
import TablaPosiciones from "./TablaPosiciones.js";
import type Equipo from "./Equipo.js";

export default class Torneo implements IIdentificable {
  readonly id: string;
  nombre: string;
  private partidos: Partido[] = [];
  private tablaPosiciones: TablaPosiciones;
  private equipos: Equipo[] = [];

  constructor(id: string, nombre: string, equipos: Equipo[]) {
    this.id = id;
    this.nombre = nombre;
    this.equipos = equipos;
    this.tablaPosiciones = new TablaPosiciones(equipos);
  }

  programarPartido(partido: Partido): void {
    this.partidos.push(partido);
  }

  jugarPartido(
    idPartido: string,
    golesLocal: number,
    golesVisitante: number
  ): void {
    const partido = this.buscarPartido(idPartido);
    if (!partido) {
      throw new Error(`Partido con ID ${idPartido} no encontrado`);
    }

    partido.jugar(golesLocal, golesVisitante);
    this.tablaPosiciones.actualizarConPartido(partido);
  }

  listarPartidos(): Partido[] {
    return this.partidos;
  }

  buscarPartido(id: string): Partido | undefined {
    return this.partidos.find((partido) => partido.id === id);
  }

  mostrarTablaPosiciones(): void {
    this.tablaPosiciones.mostrarTabla();
  }
}

import type IIdentificable from "../interfaces/IIdentificable.js";
import type Partido from "./Partido.js";
import type Equipo from "./Equipo.js";
export default class Torneo implements IIdentificable {
    readonly id: string;
    nombre: string;
    private partidos;
    private tablaPosiciones;
    private equipos;
    constructor(id: string, nombre: string, equipos: Equipo[]);
    programarPartido(partido: Partido): void;
    jugarPartido(idPartido: string, golesLocal: number, golesVisitante: number): void;
    listarPartidos(): Partido[];
    buscarPartido(id: string): Partido | undefined;
    mostrarTablaPosiciones(): void;
}
//# sourceMappingURL=Torneo.d.ts.map
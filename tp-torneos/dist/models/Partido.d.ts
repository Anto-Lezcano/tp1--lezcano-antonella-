import type IIdentificable from "../interfaces/IIdentificable.js";
import type Equipo from "./Equipo.js";
import type Deporte from "./Deporte.js";
import Resultado from "./Resultado.js";
import type Arbitro from "./Arbitro.js";
export default class Partido implements IIdentificable {
    readonly id: string;
    private local;
    private visitante;
    private deporte;
    private resultado?;
    private arbitro?;
    constructor(id: string, local: Equipo, visitante: Equipo, deporte: Deporte, arbitro?: Arbitro | undefined);
    asignarArbitro(arbitro: Arbitro): void;
    jugar(golesLocal: number, golesVisitante: number): void;
    toString(): string;
    getResultado(): Resultado | undefined;
    getLocal(): Equipo;
    getVisitante(): Equipo;
}
//# sourceMappingURL=Partido.d.ts.map
import Equipo from "../models/Equipo.js";
export default interface IPuntuacionEquipo {
    equipo: Equipo;
    puntos: number;
    partidosJugados: number;
    partidosGanados: number;
    partidosEmpatados: number;
    partidosPerdidos: number;
    golesFavor: number;
    golesContra: number;
    diferenciaGoles: number;
}
//# sourceMappingURL=IPuntuacionEquipo.d.ts.map
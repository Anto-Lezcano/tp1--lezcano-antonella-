import type Equipo from "./Equipo.js";
import type Partido from "./Partido.js";
import type IPuntuacionEquipo from "../interfaces/IPuntuacionEquipo.js";
export default class TablaPosiciones {
    private puntuaciones;
    constructor(equipos: Equipo[]);
    actualizarConPartido(partido: Partido): void;
    obtenerTabla(): IPuntuacionEquipo[];
    mostrarTabla(): void;
}
//# sourceMappingURL=TablaPosiciones.d.ts.map
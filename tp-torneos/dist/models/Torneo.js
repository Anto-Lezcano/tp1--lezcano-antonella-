import TablaPosiciones from "./TablaPosiciones.js";
export default class Torneo {
    id;
    nombre;
    partidos = [];
    tablaPosiciones;
    equipos = [];
    constructor(id, nombre, equipos) {
        this.id = id;
        this.nombre = nombre;
        this.equipos = equipos;
        this.tablaPosiciones = new TablaPosiciones(equipos);
    }
    programarPartido(partido) {
        this.partidos.push(partido);
    }
    jugarPartido(idPartido, golesLocal, golesVisitante) {
        const partido = this.buscarPartido(idPartido);
        if (!partido) {
            throw new Error(`Partido con ID ${idPartido} no encontrado`);
        }
        partido.jugar(golesLocal, golesVisitante);
        this.tablaPosiciones.actualizarConPartido(partido);
    }
    listarPartidos() {
        return this.partidos;
    }
    buscarPartido(id) {
        return this.partidos.find((partido) => partido.id === id);
    }
    mostrarTablaPosiciones() {
        this.tablaPosiciones.mostrarTabla();
    }
}
//# sourceMappingURL=Torneo.js.map
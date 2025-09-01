import Resultado from "./Resultado.js";
export default class Partido {
    id;
    local;
    visitante;
    deporte;
    resultado;
    arbitro;
    constructor(id, local, visitante, deporte, arbitro) {
        if (local.id === visitante.id) {
            throw new Error("El equipo local no puede ser el mismo que el visitante");
        }
        this.id = id;
        this.local = local;
        this.visitante = visitante;
        this.deporte = deporte;
        this.arbitro = arbitro || undefined;
    }
    asignarArbitro(arbitro) {
        this.arbitro = arbitro;
    }
    jugar(golesLocal, golesVisitante) {
        if (!this.deporte.validar(this.local) ||
            !this.deporte.validar(this.visitante)) {
            throw new Error("Uno o ambos equipos no cumplen con las reglas del deporte");
        }
        this.resultado = new Resultado(golesLocal, golesVisitante);
    }
    toString() {
        const resultadoStr = this.resultado
            ? this.resultado.toString()
            : "No jugado";
        const arbitroStr = this.arbitro ? `, Arbitro: ${this.arbitro.nombre}` : "";
        return `Partido ${this.id}: ${this.local.nombre} vs ${this.visitante.nombre} (${this.deporte.nombre}) - ${resultadoStr}${arbitroStr}`;
    }
    getResultado() {
        return this.resultado;
    }
    getLocal() {
        return this.local;
    }
    getVisitante() {
        return this.visitante;
    }
}
//# sourceMappingURL=Partido.js.map
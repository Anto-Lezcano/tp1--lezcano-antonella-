export default class Resultados {
    golesLocal = 0;
    golesVisitante = 0;
    constructor(golesLocal, golesVisitante) {
        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitante;
    }
    toString() {
        return `Goles Local: ${this.golesLocal}, Goles Visitante: ${this.golesVisitante}`;
    }
}
//# sourceMappingURL=Resultado.js.map
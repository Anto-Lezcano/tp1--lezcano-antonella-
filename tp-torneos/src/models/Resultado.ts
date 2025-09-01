export default class Resultados {
  golesLocal: number = 0;
  golesVisitante: number = 0;
  constructor(golesLocal: number, golesVisitante: number) {
    this.golesLocal = golesLocal;
    this.golesVisitante = golesVisitante;
  }

  toString(): string {
    return `Goles Local: ${this.golesLocal}, Goles Visitante: ${this.golesVisitante}`;
  }
}

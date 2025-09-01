import Equipo from "./Equipo.js";
export default abstract class Deporte {
  nombre: string;
  maxPorEquipo: number;

  constructor(nombre: string, maxPorEquipo: number) {
    this.nombre = nombre;
    this.maxPorEquipo = maxPorEquipo;
  }

  abstract validar(equipo: Equipo): boolean;
}

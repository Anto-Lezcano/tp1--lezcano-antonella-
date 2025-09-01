import type IIdentificable from "../interfaces/IIdentificable.js";

export default class Arbitro implements IIdentificable {
  readonly id: string;
  nombre: string;
  experiencia: number;
  nacionalidad: string;
  constructor(
    id: string,
    nombre: string,
    experiencia: number,
    nacionalidad: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.experiencia = experiencia;
    this.nacionalidad = nacionalidad;
  }

  toString(): string {
    return `Arbitro: Nombre: ${this.nombre}, Experiencia: ${this.experiencia}, Nacionalidad: ${this.nacionalidad}`;
  }
}

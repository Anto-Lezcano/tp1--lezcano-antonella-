export default class Jugador {
  id: string;
  nombre: string;
  edad: number;
  posicion?: string | null;

  constructor(
    id: string,
    nombre: string,
    edad: number,
    posicion?: string | null
  ) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.posicion = posicion ? posicion : null;
  }

  toString(): string {
    return `Jugador: ${this.id}, Nombre: ${this.nombre}, Edad: ${this.edad}, Posicion: ${this.posicion}`;
  }
}

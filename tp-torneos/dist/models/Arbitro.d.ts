import type IIdentificable from "../interfaces/IIdentificable.js";
export default class Arbitro implements IIdentificable {
    readonly id: string;
    nombre: string;
    experiencia: number;
    nacionalidad: string;
    constructor(id: string, nombre: string, experiencia: number, nacionalidad: string);
    toString(): string;
}
//# sourceMappingURL=Arbitro.d.ts.map
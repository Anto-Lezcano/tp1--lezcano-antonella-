import Deporte from "./Deporte.js";
export default class Basquet extends Deporte {
    constructor() {
        super("Basquet", 5);
    }
    validar(equipo) {
        return equipo.cantidad === this.maxPorEquipo;
    }
}
//# sourceMappingURL=Basquet.js.map
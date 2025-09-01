export default class TablaPosiciones {
    puntuaciones = new Map();
    constructor(equipos) {
        equipos.forEach((equipo) => {
            this.puntuaciones.set(equipo.id, {
                equipo,
                puntos: 0,
                partidosJugados: 0,
                partidosGanados: 0,
                partidosEmpatados: 0,
                partidosPerdidos: 0,
                golesFavor: 0,
                golesContra: 0,
                diferenciaGoles: 0,
            });
        });
    }
    actualizarConPartido(partido) {
        const resultado = partido.getResultado();
        if (!resultado)
            return; // Partido no jugado
        const local = partido.getLocal();
        const visitante = partido.getVisitante();
        const puntuacionLocal = this.puntuaciones.get(local.id);
        const puntuacionVisitante = this.puntuaciones.get(visitante.id);
        if (!puntuacionLocal || !puntuacionVisitante)
            return;
        // Actualizar estadísticas básicas
        puntuacionLocal.partidosJugados++;
        puntuacionVisitante.partidosJugados++;
        puntuacionLocal.golesFavor += resultado.golesLocal;
        puntuacionLocal.golesContra += resultado.golesVisitante;
        puntuacionVisitante.golesFavor += resultado.golesVisitante;
        puntuacionVisitante.golesContra += resultado.golesLocal;
        puntuacionLocal.diferenciaGoles =
            puntuacionLocal.golesFavor - puntuacionLocal.golesContra;
        puntuacionVisitante.diferenciaGoles =
            puntuacionVisitante.golesFavor - puntuacionVisitante.golesContra;
        // Asignar puntos según resultado
        if (resultado.golesLocal > resultado.golesVisitante) {
            // Victoria local
            puntuacionLocal.puntos += 3;
            puntuacionLocal.partidosGanados++;
            puntuacionVisitante.partidosPerdidos++;
        }
        else if (resultado.golesLocal < resultado.golesVisitante) {
            // Victoria visitante
            puntuacionVisitante.puntos += 3;
            puntuacionVisitante.partidosGanados++;
            puntuacionLocal.partidosPerdidos++;
        }
        else {
            // Empate
            puntuacionLocal.puntos += 1;
            puntuacionVisitante.puntos += 1;
            puntuacionLocal.partidosEmpatados++;
            puntuacionVisitante.partidosEmpatados++;
        }
    }
    obtenerTabla() {
        return Array.from(this.puntuaciones.values()).sort((a, b) => {
            // Ordenar por puntos (descendente)
            if (b.puntos !== a.puntos)
                return b.puntos - a.puntos;
            // En caso de empate, por diferencia de goles (descendente)
            if (b.diferenciaGoles !== a.diferenciaGoles)
                return b.diferenciaGoles - a.diferenciaGoles;
            // Si persiste el empate, por goles a favor (descendente)
            return b.golesFavor - a.golesFavor;
        });
    }
    mostrarTabla() {
        const tabla = this.obtenerTabla();
        console.log("\n--- TABLA DE POSICIONES ---");
        console.log("Pos | Equipo | PJ | PG | PE | PP | GF | GC | DG | Pts");
        console.log("------------------------------------------------------");
        tabla.forEach((puntuacion, index) => {
            console.log(`${(index + 1)
                .toString()
                .padEnd(3)} | ${puntuacion.equipo.nombre.padEnd(15)} | ${puntuacion.partidosJugados
                .toString()
                .padEnd(2)} | ${puntuacion.partidosGanados
                .toString()
                .padEnd(2)} | ${puntuacion.partidosEmpatados
                .toString()
                .padEnd(2)} | ${puntuacion.partidosPerdidos
                .toString()
                .padEnd(2)} | ${puntuacion.golesFavor
                .toString()
                .padEnd(2)} | ${puntuacion.golesContra
                .toString()
                .padEnd(2)} | ${puntuacion.diferenciaGoles.toString().padEnd(2)} | ${puntuacion.puntos}`);
        });
    }
}
//# sourceMappingURL=TablaPosiciones.js.map
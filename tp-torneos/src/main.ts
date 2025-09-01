import Jugador from "./models/Jugador.js";
import Equipo from "./models/Equipo.js";
import Futbol from "./models/Futbol.js";
import Basquet from "./models/Basquet.js";
import Partido from "./models/Partido.js";
import Torneo from "./models/Torneo.js";
import Arbitro from "./models/Arbitro.js";

// Crear jugadores de fútbol
const jugadoresFutbol = [
  new Jugador("1", "Lionel Messi", 36, "Delantero"),
  new Jugador("2", "Sergio Agüero", 35, "Delantero"),
  new Jugador("3", "Marc-André ter Stegen", 31, "Portero"),
  new Jugador("4", "Gerard Piqué", 36, "Defensa"),
  new Jugador("5", "Sergio Busquets", 35, "Mediocampista"),
  new Jugador("6", "Jordi Alba", 34, "Defensa"),
  new Jugador("7", "Frenkie de Jong", 26, "Mediocampista"),
  new Jugador("8", "Pedri", 21, "Mediocampista"),
  new Jugador("9", "Robert Lewandowski", 35, "Delantero"),
  new Jugador("10", "Ousmane Dembélé", 26, "Delantero"),
  new Jugador("11", "Ronald Araújo", 24, "Defensa"),
];

// Crear jugadores de básquet
const jugadoresBasquet = [
  new Jugador("12", "Michael Jordan", 60, "Alero"),
  new Jugador("13", "Scottie Pippen", 58, "Alero"),
  new Jugador("14", "Dennis Rodman", 62, "Ala-Pívot"),
  new Jugador("15", "Toni Kukoč", 55, "Alero"),
  new Jugador("16", "Luc Longley", 54, "Pívot"),
];

// Crear equipos de fútbol
const equipoFutbol1 = new Equipo("e1", "Barcelona");
const equipoFutbol2 = new Equipo("e2", "Manchester City");

// Agregar jugadores a equipos de fútbol (11 jugadores cada uno)
jugadoresFutbol.forEach((jugador) => {
  equipoFutbol1.agregarJugador(jugador);
});

// Segundo equipo de futbol
const jugadoresFutbol2 = [
  new Jugador("17", "Erling Haaland", 23, "Delantero"),
  new Jugador("18", "Kevin De Bruyne", 32, "Mediocampista"),
  new Jugador("19", "Ederson", 30, "Portero"),
  new Jugador("20", "Rúben Dias", 26, "Defensa"),
  new Jugador("21", "Kyle Walker", 33, "Defensa"),
  new Jugador("22", "İlkay Gündoğan", 33, "Mediocampista"),
  new Jugador("23", "Phil Foden", 23, "Mediocampista"),
  new Jugador("24", "Jack Grealish", 28, "Mediocampista"),
  new Jugador("25", "Bernardo Silva", 29, "Mediocampista"),
  new Jugador("26", "John Stones", 29, "Defensa"),
  new Jugador("27", "Riyad Mahrez", 32, "Delantero"),
];

jugadoresFutbol2.forEach((jugador) => {
  equipoFutbol2.agregarJugador(jugador);
});

// Crear equipos de básquet
const equipoBasquet1 = new Equipo("e3", "Chicago Bulls");
const equipoBasquet2 = new Equipo("e4", "LA Lakers");

// Agregar jugadores a equipos de básquet
jugadoresBasquet.forEach((jugador) => {
  equipoBasquet1.agregarJugador(jugador);
});

// Segundo equipo de básquet
const jugadoresBasquet2 = [
  new Jugador("28", "LeBron James", 39, "Alero"),
  new Jugador("29", "Anthony Davis", 30, "Pívot"),
  new Jugador("30", "Russell Westbrook", 35, "Base"),
  new Jugador("31", "Carmelo Anthony", 39, "Alero"),
  new Jugador("32", "Dwight Howard", 37, "Pívot"),
];

jugadoresBasquet2.forEach((jugador) => {
  equipoBasquet2.agregarJugador(jugador);
});

// Crear deportes
const futbol = new Futbol();
const basquet = new Basquet();

// Crear árbitros
const arbitro1 = new Arbitro("a1", "Pierluigi Collina", 25, "Italiano");
const arbitro2 = new Arbitro("a2", "Howard Webb", 20, "Inglés");

// Demostrar polimorfismo
console.log("=== VALIDACIÓN DE EQUIPOS ===");
console.log("Validación equipo Barcelona:", futbol.validar(equipoFutbol1));
console.log(
  "Validación equipo Manchester City:",
  futbol.validar(equipoFutbol2)
);
console.log(
  "Validación equipo Chicago Bulls:",
  basquet.validar(equipoBasquet1)
);
console.log("Validación equipo LA Lakers:", basquet.validar(equipoBasquet2));

// Crear partidos con árbitros
const partido1 = new Partido(
  "p1",
  equipoFutbol1,
  equipoFutbol2,
  futbol,
  arbitro1
);
const partido2 = new Partido(
  "p2",
  equipoBasquet1,
  equipoBasquet2,
  basquet,
  arbitro2
);

// Crear torneo
const todosLosEquipos = [
  equipoFutbol1,
  equipoFutbol2,
  equipoBasquet1,
  equipoBasquet2,
];
const torneo = new Torneo("t1", "Torneo Internacional", todosLosEquipos);

// Programar partidos
torneo.programarPartido(partido1);
torneo.programarPartido(partido2);

// Jugar partidos a través del torneo
console.log("\n=== JUGANDO PARTIDOS ===");
try {
  torneo.jugarPartido("p1", 3, 1);
  console.log("Partido de fútbol jugado exitosamente");
} catch (error: any) {
  console.error("Error al jugar partido de fútbol:", error.message);
}

try {
  torneo.jugarPartido("p2", 95, 88);
  console.log("Partido de básquet jugado exitosamente");
} catch (error: any) {
  console.error("Error al jugar partido de básquet:", error.message);
}

// Mostrar información de partidos con árbitros
console.log("\n=== PARTIDOS CON ÁRBITROS ===");
torneo.listarPartidos().forEach((partido) => {
  console.log(partido.toString());
});

// Mostrar tabla de posiciones
console.log("\n=== TABLA DE POSICIONES ===");
torneo.mostrarTablaPosiciones();

// Mostrar información de los equipos
console.log("\n=== INFORMACIÓN DE EQUIPOS ===");
console.log(equipoFutbol1.toString());
console.log(equipoFutbol2.toString());
console.log(equipoBasquet1.toString());
console.log(equipoBasquet2.toString());

// Buscar un partido específico
const partidoEncontrado = torneo.buscarPartido("p1");
if (partidoEncontrado) {
  console.log("Partido encontrado:", partidoEncontrado.toString());
}

// información de árbitros
console.log("\n=== INFORMACIÓN DE ÁRBITROS ===");
console.log(arbitro1.toString());
console.log(arbitro2.toString());

// Listado de integrantes de equipos
console.log("\n=== INTEGRANTES DE EQUIPOS ===");
console.log(`Integrantes de ${equipoFutbol1.nombre}:`);
equipoFutbol1.listarIntegrantes().forEach((integrante, index) => {
  console.log(`${index + 1}. ${integrante}`);
});

console.log(`\nIntegrantes de ${equipoBasquet1.nombre}:`);
equipoBasquet1.listarIntegrantes().forEach((integrante, index) => {
  console.log(`${index + 1}. ${integrante}`);
});

// Demostrar manejo de errores
try {
  const jugadorDuplicado = new Jugador(
    "1",
    "Jugador Duplicado",
    25,
    "Delantero"
  );
  equipoFutbol1.agregarJugador(jugadorDuplicado);
} catch (error: any) {
  console.error("Error al agregar jugador duplicado:", error.message);
}

// Intentar crear partido con el mismo equipo
try {
  const partidoInvalido = new Partido(
    "p3",
    equipoFutbol1,
    equipoFutbol1,
    futbol
  );
  console.log("Partido inválido creado (esto no debería mostrarse)");
} catch (error: any) {
  console.error("Error al crear partido inválido:", error.message);
}

// motor.js — El Motor del Barrio
// Célula: ______   Negocio: ______

const registros = [
  { persona: "Doña Rosa", categoria: "Granos",  dia: 1, valor: 23500 },
  { persona: "Don Pedro", categoria: "Aseo",    dia: 1, valor: 27400 },
  { persona: "Doña Rosa", categoria: "Lácteos", dia: 2, valor: 9600 },
  // ... completen hasta tener mínimo 24 registros
];

// ---------- NIVEL 1 · Datos ----------
function mostrarRegistro(registro) {
  // devuelve un texto: "Día 1 · Doña Rosa · Granos · $23500"
}
function listarTodo(datos) {}

// ---------- NIVEL 2 · Reportes ----------
function totalGeneral(datos) {}
function promedio(datos) {}
function registroMayor(datos) {}
function filtrarPorCategoria(datos, categoria) {}
function totalesPorCategoria(datos) {}

// ---------- NIVEL 3 · Set y Map ----------
function personasUnicas(datos) {}
function recurrentesLento(datos) {}
function recurrentesRapido(datos) {}
function categoriaEstrella(datos) {}
function parQueSuma(datos, objetivo) {}

// ---------- NIVEL 4 · Cola y pila ----------
const colaDeAtencion = [];
function llegar(persona) {}
function atender() {}

const historial = [];
function agregarRegistro(datos, registro) {}
function deshacer(datos) {}

// ---------- ZONA DE PRUEBAS ----------
console.log(mostrarRegistro(registros[0]));
console.log(totalGeneral(registros));
console.log(totalGeneral([])); // caso borde: arreglo vacío
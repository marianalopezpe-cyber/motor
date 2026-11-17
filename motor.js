// motor.js — El Motor del Barrio
// Célula: ______   Negocio: ______

const registros = [
    { persona: "Mateo Garcia", categoria: "Bandeja", dia: 1, valor: 17500, jugo: "mora" },
    { persona: "Sofía Lopez", categoria: "Bandeja", dia: 1, valor: 17500, jugo: "mango" },
    { persona: "Daniel Martínez", categoria: "Ejecutivo", dia: 2, valor: 21000, jugo: "piña" },
    { persona: "Andrés López", categoria: "Ajiaco", dia: 5, valor: 19000, jugo: "mora" },
    { persona: "Samuel Rojas", categoria: "Ajiaco", dia: 6, valor: 19000, jugo: "mango" },
    { persona: "Felipe Moreno", categoria: "Ajiaco", dia: 2, valor: 19000, jugo: "piña" },
  { persona: "Gabriel Vargas", categoria: "Del dia", dia: 1, valor: 15000, jugo: "limonada" },
    { persona: "Miguel Hernandez", categoria: "Del dia", dia: 3, valor: 15000, jugo: "limonada" },
    { persona: "Santiago Saldarriaga", categoria: "Del dia", dia: 3, valor: 15000, jugo: "limonada" },
  { persona: "⁠ ⁠Sebastián Torres", categoria: "Ajiaco", dia: 1, valor: 19000, jugo: "mora" },
    { persona: "Miguel Hernandez", categoria: "Del dia", dia: 2, valor: 15000, jugo: "limonada" },
    { persona: "Samuel Rojas", categoria: "Del dia", dia: 7, valor: 15000, jugo: "limonada" },
    { persona: "Miguel Hernandez", categoria: "Del dia", dia: 7, valor: 15000, jugo: "limonada" },
    { persona: "Miguel Hernandez", categoria: "Del dia", dia: 4, valor: 15000, jugo: "limonada" },
    { persona: "Samuel Rojas", categoria: "Ajiaco", dia: 4, valor: 19000, jugo: "mango" },
    { persona: "Santiago Saldarriaga", categoria: "Ejecutivo", dia: 2, valor: 21000, jugo: "piña" },
  { persona: "Miguel Hernandez", categoria: "Del dia", dia: 3, valor: 15000, jugo: "limonada" },
  { persona: "Daniel Martínez", categoria: "Ajiaco", dia: 3, valor: 19000, jugo: "piña" },
    { persona: "Miguel Hernandez", categoria: "Ejecutivo", dia: 6, valor: 21000, jugo: "piña" },
 { persona: "Miguel Hernandez", categoria: "Ejecutivo", dia: 7, valor: 21000, jugo: "piña" },
 { persona: "Santiago Saldarriaga", categoria: "Ajiaco", dia: 7, valor: 19000, jugo: "mora" },
 { persona: "Samuel Rojas", categoria: "Ajiaco", dia: 4, valor: 19000, jugo: "mango" },
 { persona: "Laura Restrepo", categoria: "Bandeja", dia: 5, valor: 17500, jugo: "mango" },
{ persona: "Camilo Torres", categoria: "Ejecutivo", dia: 6, valor: 21000, jugo: "piña" }
];

// ---------- NIVEL 1 · Datos ----------

// Muestra la información de un registro
function mostrarRegistro(registro) {
    return `Día ${registro.dia} · ${registro.persona} · ${registro.categoria} · $${registro.valor}`;
}

// Recorre y muestra todos los registros
function listarTodo(datos) {
    for (let i = 0; i < datos.length; i++) {
        console.log(mostrarRegistro(datos[i]));
    }
}

// ---------- EJECUCIÓN DEL MOTOR ----------

console.log("MOTOR DEL RESTAURANTE LA SAZON DE BRIANGIL");
console.log("LISTADO DE PEDIDOS");

listarTodo(registros);

console.log("Total de registros:", registros.length);

// ---------- NIVEL 2 · Reportes ----------
function totalGeneral(datos) { }
function promedio(datos) { }
function registroMayor(datos) { }
function filtrarPorCategoria(datos, categoria) { }
function totalesPorCategoria(datos) { }

// ---------- NIVEL 3 · Set y Map ----------
function personasUnicas(datos) { }
function recurrentesLento(datos) { }
function recurrentesRapido(datos) { }
function categoriaEstrella(datos) { }
function parQueSuma(datos, objetivo) { }

// ---------- NIVEL 4 · Cola y pila ----------
const colaDeAtencion = [];
function llegar(persona) { }
function atender() { }

const historial = [];
function agregarRegistro(datos, registro) { }
function deshacer(datos) { }

// ---------- ZONA DE PRUEBAS ----------
console.log(mostrarRegistro(registros[0]));
console.log(totalGeneral(registros));
console.log(totalGeneral([])); // caso borde: arreglo vacío
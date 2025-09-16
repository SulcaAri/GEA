document.getElementById("form-encuesta").addEventListener("submit", function(e) {
  e.preventDefault(); // Evita recargar la página

  // --- Validación de edad (18 a 60) ---
  const edadInput = document.getElementById("edad");
  const edadStr = edadInput.value.trim();
  const edad = parseInt(edadStr, 10);

  if (!edadStr || Number.isNaN(edad) || edad < 18 || edad > 60) {
    console.warn("Intento con edad fuera de rango:", edad);
    alert("⚠️ Solo pueden responder personas de 18 a 60 años.");
    edadInput.focus();
    return; // No continúa si la edad no es válida
  }

  // Obtener datos
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const pais = document.getElementById("pais").value;
  const dni = document.getElementById("dni").value.trim();

  // Obtener idiomas
  const ingles = document.querySelector('input[name="ingles"]:checked')?.value || "No seleccionado";
  const frances = document.querySelector('input[name="frances"]:checked')?.value || "No seleccionado";
  const aleman = document.querySelector('input[name="aleman"]:checked')?.value || "No seleccionado";

  // Mostrar todo en la consola
  console.clear();
  console.log("📋 Resultados de la encuesta:");
  console.log("Nombre:", nombre);
  console.log("Apellido:", apellido);
  console.log("Edad:", edad);
  console.log("Correo:", correo);
  console.log("País:", pais);
  console.log("DNI:", dni);
  console.log("Nivel de Inglés:", ingles);
  console.log("Nivel de Francés:", frances);
  console.log("Nivel de Alemán:", aleman);

  // También mostrarlo como objeto completo
  const datosEncuesta = {
    nombre,
    apellido,
    edad,
    correo,
    pais,
    dni,
    ingles,
    frances,
    aleman
  };
  console.log("✅ Objeto completo:", datosEncuesta);

  // Mensaje visual para el usuario
  alert("✅ Encuesta enviada. Revisa la consola (F12) para ver los resultados.");
});

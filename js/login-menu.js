document.addEventListener("DOMContentLoaded", () => {
  const navLogin = document.getElementById("nav-login");
  const navRegister = document.getElementById("nav-register");
  const navUser = document.getElementById("nav-user");
  const userName = document.getElementById("user-name");
  const btnLogout = document.getElementById("btn-logout");

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  function mostrarUsuario(nombre) {
    navLogin.classList.add("oculto");
    navRegister.classList.add("oculto");
    navUser.classList.remove("oculto");
    userName.textContent = `👤 ${nombre}`;
  }

  function cerrarSesion() {
    localStorage.removeItem("usuario");
    navLogin.classList.remove("oculto");
    navRegister.classList.remove("oculto");
    navUser.classList.add("oculto");
    userName.textContent = "";
  }

  // Mostrar usuario si ya está logueado
  const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
  if (usuarioGuardado && usuarioGuardado.nombre) {
    mostrarUsuario(usuarioGuardado.nombre);
  } else {
    // 🚨 Si no hay usuario, pedimos login
    alert("Debes iniciar sesión para continuar 🚪");
    // Si tienes modal de login, puedes abrirlo automáticamente:
    const loginModalEl = document.getElementById("loginModal");
    if (loginModalEl) {
      const loginModal = new bootstrap.Modal(loginModalEl);
      loginModal.show();
    }
  }

  // Iniciar sesión
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();

      if (!email || !password) {
        alert("Por favor completa los campos");
        return;
      }

      const usuario = {
        nombre: email,
        email,
      };

      localStorage.setItem("usuario", JSON.stringify(usuario));
      mostrarUsuario(usuario.nombre);

      const loginModalEl = document.getElementById("loginModal");
      const loginModal = bootstrap.Modal.getInstance(loginModalEl);
      if (loginModal) {
        loginModal.hide();
      }
    });
  }

  // Registro
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("registerName").value.trim();
      const email = document.getElementById("registerEmail").value.trim();
      const password = document.getElementById("registerPassword").value.trim();

      if (!nombre || !email || !password) {
        alert("Por favor completa todos los campos");
        return;
      }

      const usuario = {
        nombre: email, // se usa el correo como "nombre"
        email,
      };

      localStorage.setItem("usuario", JSON.stringify(usuario));
      mostrarUsuario(usuario.nombre);

      const registerModalEl = document.getElementById("registerModal");
      const registerModal = bootstrap.Modal.getInstance(registerModalEl);
      if (registerModal) {
        registerModal.hide();
      }
    });
  }

  // Cerrar sesión
  if (btnLogout) {
    btnLogout.addEventListener("click", (e) => {
      e.preventDefault();
      cerrarSesion();
      alert("Has cerrado sesión. Debes iniciar sesión de nuevo para continuar.");
    });
  }
});

// js/login-menu.js
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});

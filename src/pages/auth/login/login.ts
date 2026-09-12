
import type { IUser } from "../../../types/IUser";


const formulario = document.getElementById("login-form") as HTMLFormElement;
const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const usuariosGuardados = localStorage.getItem("users");

    const usuarios: IUser[] = usuariosGuardados
        ? JSON.parse(usuariosGuardados)
        : [];

    const usuarioEncontrado = usuarios.find(
        (usuario) =>
            usuario.email === email.value &&
            usuario.password === password.value
    );

    if (!usuarioEncontrado) {
        alert("Email o contraseña incorrectos");
        return;
    }

    localStorage.setItem(
    "userData",
    JSON.stringify(usuarioEncontrado)
);

alert("Inicio de sesión correcto");

if (usuarioEncontrado.role === "admin") {
    window.location.href = "/src/pages/admin/admin.html";
} else {
    window.location.href = "/src/pages/client/home/home.html";
}
});

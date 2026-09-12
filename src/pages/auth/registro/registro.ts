
import type { IUser } from "../../../types/IUser";

const formulario = document.getElementById("registro-form") as HTMLFormElement;
const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const usuariosGuardados = localStorage.getItem("users");
    const usuarios: IUser[] = usuariosGuardados
        ? JSON.parse(usuariosGuardados)
        : [];

    const emailExiste = usuarios.some(
        (usuario) => usuario.email === email.value
    );

    if (emailExiste) {
        alert("Ese email ya está registrado");
        return;
    }

    const nuevoUsuario: IUser = {
        email: email.value,
        password: password.value,
        role: "client"
    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem("users", JSON.stringify(usuarios));
    alert("Usuario registrado correctamente");

    formulario.reset();
});

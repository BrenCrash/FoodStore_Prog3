
import type { IUser } from "../types/IUser";
export const obtenerUsuario = (): IUser | null => {
    const usuarioGuardado = localStorage.getItem("userData");

    return usuarioGuardado
        ? JSON.parse(usuarioGuardado)
        : null;
};

export const crearAdmin = () => {
    const usuariosGuardados = localStorage.getItem("users");

    const usuarios: IUser[] = usuariosGuardados
        ? JSON.parse(usuariosGuardados)
        : [];

    const adminExiste = usuarios.some(
        (usuario) => usuario.email === "admin@foodstore.com"
    );

    if (!adminExiste) {
        const admin: IUser = {
            email: "admin@foodstore.com",
            password: "admin123",
            role: "admin"
        };

        usuarios.push(admin);

        localStorage.setItem("users", JSON.stringify(usuarios));
    }
};
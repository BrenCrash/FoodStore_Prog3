import { obtenerUsuario, crearAdmin } from "./utils/auth";
import { irAlLogin, irAlAdmin, irAlClient } from "./utils/navigate";

const protegerRutas = () => {

    crearAdmin();
    const usuario = obtenerUsuario();
    const ruta = window.location.pathname;

    if (ruta === "/") {
        if (!usuario) {
            irAlLogin();
        } else if (usuario.role === "admin") {
            irAlAdmin();
        } else {
            irAlClient();
        }

    }

    if (!usuario) {
        if (ruta.includes("/admin/") || ruta.includes("/client/")) {
            irAlLogin();
        }

    }
    if (usuario?.role === "client" && ruta.includes("/admin/")) {
        irAlClient();
    }

};

protegerRutas();
import { getJugadores } from "../models/jugadoresModel.js";

export const getJugadoresController = async () => {
    try {
        const jugadores = await getJugadores();
        return Response.json(jugadores); // ✅ Aquí estaba el error
    } catch (error) {
        console.error("Error al obtener futbolistas", error);
        return Response.json({ error: "Error al obtener futbolistas" }, { status: 500 });
    }
};

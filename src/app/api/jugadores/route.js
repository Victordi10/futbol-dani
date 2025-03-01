import { getJugadoresController } from "@/app/lib/controllers/jugadoresController";

export async function GET() {
    return getJugadoresController();
}

import db from '../db.js';

export const getJugadores = async()=>{
    const sql = 'SELECT * FROM jugadores';
    const jugadores = await db(sql);
    return jugadores;
}
"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [futbolistas, setFutbolistas] = useState([]);

  const getFutbolistas = async () => {
    try {
      const res = await fetch("/api/jugadores");
      const data = await res.json();
      setFutbolistas(data);
    } catch (error) {
      console.error("Ocurrió un error", error);
    }
  };

  useEffect(() => {
    getFutbolistas();
  }, []);

  return (
    <div className="container w-full mx-auto flex flex-col items-center ">
      <h1 className="text-2xl md:text-5xl text-sky-950">Lista de Futbolistas</h1>
      <ul className="mt-8 flex flex-col items-start w-full">
        {futbolistas.length > 0 ? (
          futbolistas.map((futbolista) => (
            <li key={futbolista.id} className="text-lg text-gray-800">
              {futbolista.nombre} - {futbolista.goles} goles - {futbolista.asistencias} asistencias - {futbolista.partidos} partidos
            </li>
          ))
        ) : (
          <p className="text-center text-2xl">Cargando futbolistas...</p>
        )}
      </ul>
    </div>
  );
}

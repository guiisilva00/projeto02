"use client";

import { useState, useEffect } from "react";
import dados from "@/filmes.json";
import { useParams } from "next/navigation";
import "./filme.css";

export default function Filme() {
    const [filme, setFilme] = useState(null);
    const params = useParams();

    useEffect(() => {
        const filmeEncontrado = dados.find(f => f.id == params.id);
        setFilme(filmeEncontrado);
    }, [])

    return (
        <main>
            {filme != null && <>
                <div>
                    <a href="/filmes">Voltar</a>
                    <img src={filme.imagem} alt="" />
                    <h1>Nome do filme: {filme.titulo}</h1>
                    <h2>Ano de lançamento: {filme.ano}</h2>
                    <p><b>Descrição do filme: </b> {filme.sinopse}</p>
                    <h3><b>Duração do filme (minutos) </b>{filme.duracaoMinutos}</h3>
                    <h3><b>Diretor: </b>{filme.diretores}</h3>
                    <h3><b>Genero: </b>{filme.genero}</h3>
                </div>
            </>}
        </main>
    )
}
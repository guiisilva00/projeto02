"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "./produto.css";

export default function Produto() {
    const [produto, setProduto] = useState(null);
    const params = useParams();

    useEffect(() => {
        if (params?.id) {

            fetch(`https://dummyjson.com/products/${params.id}`)
                .then(res => res.json())
                .then(console.log);
        }
    }, [params?.id])

    return (
        <main>
            {produto !== null && <>
                <div>
                    <a href="/produtos">Voltar</a>
                    <h1>Título: {produto.title}</h1>
                    <img src={produto.thumbnail} />
                </div></>}
        </main>
    )
}
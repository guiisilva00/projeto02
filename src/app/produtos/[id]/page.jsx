"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from 'next/link';
import "./produto.css";

export default function Produto() {
    const [produto, setProduto] = useState(null);
    const params = useParams();

    useEffect(() => {
        if (params?.id) {
            fetch(`https://dummyjson.com/products/${params.id}`)
                .then((res) => res.json())
                .then((data) => {
                    setProduto(data);
                });
        }
    }, [params?.id]);

    return (
        <main className="pagina-produto">
            {produto !== null && (
                <div className="card-detalhe-produto">
                    <Link className="voltar-produtos" href="/produtos">Voltar aos produtos</Link>                    
                    <img src={produto.thumbnail} alt={produto.title} />
                    <h1>{produto.title}</h1>
                    <p>{produto.description}</p>
                    <p>Categoria: {produto.category}</p>
                    <p>Marca: {produto.brand}</p>
                    <p>Preço: ${produto.price}</p>
                    <p>Desconto: {produto.discountPercentage}%</p>
                    <p>Avaliação: {produto.rating}</p>
                    <p>Estoque: {produto.stock} unidades</p>
                    <p>{produto.shippingInformation}</p>
                </div>
            )}
        </main>
    );
}

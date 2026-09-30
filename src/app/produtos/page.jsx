"use client";

import { useState, useEffect } from "react";
import CardProduto from "@/components/CardProduto";
import "./produtos.css"

export default function Produtos() {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [msgErro, setMsgErro] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setListaProdutos(data.products);
        setMsgErro("");
      })
      .catch((error) => setMsgErro(error.message));
  }, []);

  return (
    <main>
      {msgErro !== "" && <p>ERRO: {msgErro}</p>}
      {listaProdutos.length > 0 && (
        <div className="container-produtos">
          {listaProdutos.map((p) => (
            <CardProduto key={p.id} produto={p} />
          ))}
        </div>
      )}
    </main>
  );
}
import "./cardProduto.css";

export default function CardProduto({ produto }) {

  return (
    <main>
      <div className="wrapper-produto">
        <img src={produto.thumbnail}/>
        <h3>{produto.title}</h3>
        <a href={`/produtos/${produto.id}`}>Saiba mais</a>

      </div>
    </main>
  );
}
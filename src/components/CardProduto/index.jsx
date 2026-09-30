import "./cardProduto.css";
import Link from 'next/link'


export default function CardProduto({ produto }) {

  return (
    <main className="wrapper-produto">
      <img src={produto.thumbnail} alt={produto.title} />
      <h3>{produto.title}</h3>
      <Link href={`/produtos/${produto.id}`}>Saiba mais</Link>

    </main>
  );
}

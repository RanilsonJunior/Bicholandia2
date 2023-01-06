import './styles.css';
import { ProdutoIndex } from '../ProdutoIndex';

export const MaisVendidos = () => {
  return (
    <main>
      <h3>Mais Vendidos</h3>
      <div className="linha"></div>
      <section className="slider ">
        <ProdutoIndex />
        <ProdutoIndex />
        <ProdutoIndex />
        <ProdutoIndex />
        <ProdutoIndex />
        <ProdutoIndex />
      </section>
    </main>
  );
};

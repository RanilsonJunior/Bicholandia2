import './styles.css';
import product01 from '../../imagens/produto/produto1.png';

export const ProdutoIndex = () => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <img src={product01} alt="ração" className="card-img" />
          <h2 className="card-title">Nome do Produto</h2>
          <div className="card-body">
            <div className="card-star">
              <span className="rating-value">5.0</span>
              <span className="star">&#9733;</span>
            </div>
            <p className="card-price">R$500,00</p>
          </div>
          <div className="card-footer">
            <a href="#">
              <button className="botao botao-buy">Compre Agora</button>
            </a>
            <button className="botao botao-add">Add Carrinho</button>
          </div>
        </div>
      </div>
    </>
  );
};

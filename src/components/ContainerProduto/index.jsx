import './styles.css';

import { ButtonContainerProduto } from '../ButtonContainerProduto';

export const ContainerProduto = () => {
  return (
    <section className="container-buy-product">
      <div className="text-option">Escolha uma opção:</div>
      <div className="option-product">
        <span className="option1" onClick="">
          <i className="fa-solid fa-check"></i> 1KG
        </span>
        <span className="option2">
          <i className="fa-solid fa-check"></i> 3KG
        </span>
        <span className="option3">
          <i className="fa-solid fa-check"></i> 10,1KG
        </span>
        <div className="line1"></div>
      </div>
      <div className="value">
        <span className="old-value">R$ 28,90</span>
        <span className="new-value">R$ 27,99</span>
        <span className="cash">à vista</span>
      </div>
      <ButtonContainerProduto text="Adicionar ao carinho" />
      <ButtonContainerProduto text="Comprar" />
    </section>
  );
};

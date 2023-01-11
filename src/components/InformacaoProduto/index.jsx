import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const InformacaoProduto = () => {
  return (
    <section className="container-information">
      <span className="name-product">Ração Gran Plus Choice Gatos Adultos Frango e Carne 10,1 Kg</span>
      <div className="code">ID 1</div>
      <div className="container-star">
        <span className="number-star">4.80</span>
        <span className="star">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className="opinion">(1236 opiniões)</span>
      </div>
      <span>informações</span>
      <ul>
        <li>Proteínas nobres.</li>
        <li>Ajudam no trato urinário.</li>
        <li>Indicada para gatos adultos.</li>
        <li>Delicioso sabor frango e carne</li>
      </ul>
    </section>
  );
};

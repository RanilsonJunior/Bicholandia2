import P from 'prop-types';

import './styles.css';

export const ButtonContainerProduto = ({ text }) => {
  return (
    <button type="button" className="btn-buy-product">
      {text}
    </button>
  );
};

ButtonContainerProduto.propTypes = {
  text: P.string.isRequired,
};

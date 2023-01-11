import P from 'prop-types';

import './styles.css';

export const ButtonAccessibility = ({ text, onclick }) => (
  <button className="btn-font" onClick={onclick}>
    {text}
  </button>
);

ButtonAccessibility.propTypes = {
  text: P.string.isRequired,
  onclick: P.func.isRequired,
};

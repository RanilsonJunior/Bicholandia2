import './styles.css';
import { useState, useRef } from 'react';
import { ButtonAccessibility } from '../ButtonAccessibility';
import { nunito, openDyslexic, tahoma } from '../../utils/changeFontFamily';
// import { Range } from '../Range';

export const InsideMenu2 = () => {
  const [reverse, setReverse] = useState(false);
  const [reverse2, setReverse2] = useState(false);
  const reverseClass = reverse ? ' ativo' : '';
  const reverseClass2 = reverse2 ? ' ativo' : '';

  const menu2Cachorro = useRef();
  const menu2Gato = useRef();
  const menu2Coelho = useRef();
  const menu2Bringuedo = useRef();
  // --------------------------------------------------

  const menu2CachorroAbrir = () => {
    menu2Cachorro.current.classList.add('ativo');
  };

  const menu2CachorroFechar = () => {
    menu2Cachorro.current.classList.remove('ativo');
  };

  const menu2GatoAbrir = () => {
    menu2Gato.current.classList.add('ativo');
  };

  const menu2GatoFechar = () => {
    menu2Gato.current.classList.remove('ativo');
  };

  const menu2CoelhoAbrir = () => {
    menu2Coelho.current.classList.add('ativo');
  };

  const menu2CoelhoFechar = () => {
    menu2Coelho.current.classList.remove('ativo');
  };

  const menu2BrinquedoAbrir = () => {
    menu2Bringuedo.current.classList.add('ativo');
  };

  const menu2BrinquedoFechar = () => {
    menu2Bringuedo.current.classList.remove('ativo');
  };
  // ---------------------------------------------------

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleClick2 = () => {
    setReverse2(!reverse2);
  };

  return (
    <nav className="menu2">
      <div className={`btn-menu2-numero1${reverseClass2}`} onClick={handleClick2}>
        <div className="linha1"></div>
        <div className="linha2"></div>
        <div className="linha3"></div>
      </div>
      <div className={`menu2-numero1${reverseClass2}`}>
        <li className="cachorro" onMouseEnter={menu2CachorroAbrir} onMouseLeave={menu2CachorroFechar}>
          <a href="#">
            Cachorro<i className="fa-solid fa-angle-right"></i>
          </a>
        </li>
        <li className="gato" onMouseEnter={menu2GatoAbrir} onMouseLeave={menu2GatoFechar}>
          <a className="gato2" href="/gatos.html">
            Gatos<i className="fa-solid fa-angle-right"></i>
          </a>
        </li>
        <li className="coelho" onMouseEnter={menu2CoelhoAbrir} onMouseLeave={menu2CoelhoFechar}>
          <a href="#">
            Coelhos<i className="fa-solid fa-angle-right"></i>
          </a>
        </li>
        <li className="brinquedo" onMouseEnter={menu2BrinquedoAbrir} onMouseLeave={menu2BrinquedoFechar}>
          <a href="#">
            Brinquedos<i className="fa-solid fa-angle-right"></i>
          </a>
        </li>
      </div>
      <div
        ref={menu2Cachorro}
        className={'menu2-cachorro'}
        onMouseEnter={menu2CachorroAbrir}
        onMouseLeave={menu2CachorroFechar}
      >
        <li>
          <a href="#">Cachorro</a>
        </li>
        <li>
          <a href="#">Cachorro</a>
        </li>
        <li>
          <a href="#">Cachorro</a>
        </li>
        <li>
          <a href="#">Cachorro</a>
        </li>
      </div>
      <div ref={menu2Gato} className="menu2-gato" onMouseEnter={menu2GatoAbrir} onMouseLeave={menu2GatoFechar}>
        <li>
          <a href="/produto.html">Ração</a>
        </li>
        <li>
          <a href="#">Gato</a>
        </li>
        <li>
          <a href="#">Gato</a>
        </li>
        <li>
          <a href="#">Gato</a>
        </li>
      </div>
      <div ref={menu2Coelho} className="menu2-coelho" onMouseEnter={menu2CoelhoAbrir} onMouseLeave={menu2CoelhoFechar}>
        <li>
          <a href="#">Coelho</a>
        </li>
        <li>
          <a href="#">Coelho</a>
        </li>
        <li>
          <a href="#">Coelho</a>
        </li>
        <li>
          <a href="#">Coelho</a>
        </li>
      </div>
      <div
        ref={menu2Bringuedo}
        className="menu2-brinquedo"
        onMouseEnter={menu2BrinquedoAbrir}
        onMouseLeave={menu2BrinquedoFechar}
      >
        <li>
          <a href="#">Brinquedo</a>
        </li>
        <li>
          <a href="#">Brinquedo</a>
        </li>
        <li>
          <a href="#">Brinquedo</a>
        </li>
        <li>
          <a href="#">Brinquedo</a>
        </li>
      </div>

      <div className="btn-acessibilidade" onClick={handleClick}>
        <span>Acessibilidade</span>
        <i className="fa-solid fa-gear"></i>
      </div>
      <div className={`acessibilidade${reverseClass}`}>
        <div className="acessibilidade-font">
          <ButtonAccessibility text="Default" onclick={nunito} />
          <ButtonAccessibility text="Dylexic" onclick={openDyslexic} />
          <ButtonAccessibility text="Tahoma" onclick={tahoma} />
        </div>
        <div className="range-font">
          {/* <ButtonAccessibility text="+" /> */}
          {/* <ButtonAccessibility text="-" /> */}
          {/* <span className="a-menor">A-</span> */}
          {/* <button type="range" className="range1" min="16" max="28" value="16"></button> */}
          {/* <Range /> */}
          {/* <span className="a-maior">A+</span> */}
        </div>
      </div>
    </nav>
  );
};

import './styles.css';

import logoRoyalCanin from '../../imagens/slide-logo/logo-royal-canin.png';
import logoPremier from '../../imagens/slide-logo/logo-premier.png';
import logoPedigree from '../../imagens/slide-logo/logo-pedigree.png';
import logoProPlan from '../../imagens/slide-logo/logo-pro-plan.png';
import logoGranPlus from '../../imagens/slide-logo/logo-gran-plus.png';
import logoHills from '../../imagens/slide-logo/logo-hills.png';
import logoOrigemNatural from '../../imagens/slide-logo/logo-origem-natural.png';
import logoEquilibrio from '../../imagens/slide-logo/logo-equilibrio.png';

export const LogoContainer2 = () => {
  return (
    <span className="container2">
      <img className="img-logo" src={logoRoyalCanin} alt="Logo da royal canin" />
      <img className="img-logo" src={logoPremier} alt="Logo da premier" />
      <img className="img-logo" src={logoPedigree} alt="Logo da pedigree" />
      <img className="img-logo" src={logoProPlan} alt="Logo da pro plan" />
      <img className="img-logo" src={logoGranPlus} alt="Logo da gran plus" />
      <img className="img-logo" src={logoHills} alt="Logo da hills" />
      <img className="img-logo" src={logoOrigemNatural} alt="Logo da origem natural" />
      <img className="img-logo" src={logoEquilibrio} alt="Logo da equilíbrio" />
    </span>
  );
};

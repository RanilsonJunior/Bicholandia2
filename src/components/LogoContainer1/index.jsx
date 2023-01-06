import './styles.css';

import logoRoyalCanin from '../../imgs/slide-logo/logo-royal-canin.png';
import logoPremier from '../../imgs/slide-logo/logo-premier.png';
import logoPedigree from '../../imgs/slide-logo/logo-pedigree.png';
import logoProPlan from '../../imgs/slide-logo/logo-pro-plan.png';
import logoGranPlus from '../../imgs/slide-logo/logo-gran-plus.png';
import logoHills from '../../imgs/slide-logo/logo-hills.png';
import logoOrigemNatural from '../../imgs/slide-logo/logo-origem-natural.png';
import logoEquilibrio from '../../imgs/slide-logo/logo-equilibrio.png';

export const LogoContainer1 = () => {
  return (
    <span className="container1">
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

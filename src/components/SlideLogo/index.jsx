import './styles.css';

import { LogoContainer1 } from '../LogoContainer1';
import { LogoContainer2 } from '../LogoContainer2';

export const SlideLogo = () => {
  return (
    <div className="logo-container-main">
      <div className="logo-container">
        <LogoContainer1 />
        <LogoContainer2 />
      </div>
    </div>
  );
};

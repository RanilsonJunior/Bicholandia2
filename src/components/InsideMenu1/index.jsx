import './styles.css';

export const InsideMenu = () => {
  return (
    <>
      <a href="#" className="logo">
        Bicholândia
      </a>
      <ul className="nav-list">
        <div className="boxSearch">
          <button className="search" type="search" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <li>
          <a href="/login.html">
            <i className="fa-solid fa-user"></i>Entre ou Cadastre-se
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa-solid fa-cart-shopping"></i>Carrinho
          </a>
        </li>
      </ul>
    </>
  );
};

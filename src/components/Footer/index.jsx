import './styles.css';

export const Footer = () => {
  return (
    <footer>
      <div className="sobre">
        <h3>Sobre a Bicholândia</h3>
        <a href="#">Quem somos</a>
        <a href="#">Nossas lojas</a>
        <a href="#">Eventos</a>
        <a href="#">Trabalhe conosco</a>
        <a href="#">Campanhas Sociais</a>
      </div>
      <div className="duvidas">
        <h3>Dúvidas</h3>
        <a href="#">Atendimento</a>
        <a href="#">Ajuda online</a>
        <a href="#">Política de promoções</a>
        <a href="#">Política de entregas</a>
      </div>
      <div className="servicos">
        <h3>Serviços</h3>
        <a href="#">Retirada na Loja</a>
        <a href="#">Meu Desconto</a>
      </div>
      <div className="redes-sociais">
        <h3>Siga a Bicholandia nas Redes Sociais</h3>
        <div className="icones">
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

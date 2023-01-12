import './styles.css';

export const CaminhoDaPagina = () => {
  return (
    <section className="caminho">
      <a href="/index.html">Página Inicial</a> <i className="fa-solid fa-angle-right"> </i>{' '}
      <a href="/gatos.html">Gatos</a> <i className="fa-solid fa-angle-right"></i> <a href="/index.html">Ração</a>
    </section>
  );
};

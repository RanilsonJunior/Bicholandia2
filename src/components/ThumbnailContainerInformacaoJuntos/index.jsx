import React from 'react';
import { ThumbnailSlider } from '../ThumbnailSlider';
import { InformacaoProduto } from '../InformacaoProduto';
import { ContainerProduto } from '../ContainerProduto';

export const ThumbnailContainerInformacaoJuntos = () => {
  return (
    <main style={{ display: 'flex', justifyContent: 'center' }}>
      <ThumbnailSlider />
      <InformacaoProduto />
      <ContainerProduto />
    </main>
  );
};

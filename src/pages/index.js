import React from "react";
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import {css} from '@emotion/react';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import heroCSS from '../css/hero.module.css';
import Encuentra from '../components/encuentra';
import Listado from '../components/listado-propiedades';

const ImageBackground = styled(BackgroundImage)`
  height:600px;
`;

const IndexPage = () => {
  
const inicio = useInicio();

const {nombre,contenido,imagen} = inicio[0];

  return(
    <Layout>
      <ImageBackground
        tag="section"
        fluid={imagen.sharp.fluid}
        css={css`
          height: 600px;
        `}
      >
        <div className={heroCSS.imagenbg}>
          <h1 className={heroCSS.titulo}>Venta de Casas y Departamentos en S.M.A.</h1>
        </div>
      </ImageBackground>

      <main>
        <div css={css`
          max-width: 800px;
          margin: 0 auto;
        `}>
          <h1>{nombre}</h1>
          <p css={css`
            text-align:center;
          `}
          >{contenido}</p>
        </div>
      </main>

      <Encuentra/>

      <Listado/>

    </Layout>
)
}

export default IndexPage

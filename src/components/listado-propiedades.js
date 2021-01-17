import React, {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import usePropiedades from '../hooks/usePropiedades';
import Previo from '../components/propiedadPre';
import ListadoCss from '../css/listado.module.css';
import useFiltro from '../hooks/useFiltro';

const Listado = () => {

    const resultado = usePropiedades();
    const [propiedades] = useState(resultado);
    const [filtradas, guardarFiltradas] = useState([]);

    const {categoria} = useFiltro();

    useEffect(() => {
        if(categoria){
            const filtro = propiedades.filter(propiedad => propiedad.categorias.nombre === categoria);
            guardarFiltradas(filtro);
        }else{
            guardarFiltradas(propiedades);
        }
    }, [categoria, propiedades])


    return ( 
        <>
        <h2 css={css`
            margin-top:5rem;
        `}>Nuestras Propiedades</h2>

        {/* {FiltroUi()} */}

        <ul className={ListadoCss.propiedades}>
            {filtradas.map(propiedad => (
                <Previo
                    key={propiedad.id}
                    propiedad={propiedad}
                />
            ))}
        </ul>
        </>
     );
}
 
export default Listado;
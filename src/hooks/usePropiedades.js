import {graphql, useStaticQuery} from 'gatsby';

const usePropiedades = () => {

    const datos = useStaticQuery(graphql`
    
        query{
            allStrapiPropiedades{
                nodes{
                    nombre 
                    descripcion
                    id
                    wc
                    precio
                    estacionamiento
                    habitaciones
                    categorias{
                        nombre
                    }    
                    agentes{
                        nombre
                        telefono
                        email
                    }
                    imagen{
                        sharp: childImageSharp{
                            fluid(maxWidth: 600, maxHeight: 400){
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    
    `);
    return datos.allStrapiPropiedades.nodes.map(propiedad => ({
        nombre: propiedad.nombre,
        id: propiedad.id,
        wc: propiedad.wc,
        estacionamiento: propiedad.estacionamiento,
        precio: propiedad.precio,
        descripcion: propiedad.descripcion,
        imagen: propiedad.imagen,
        habitaciones: propiedad.habitaciones,
        agentes: propiedad.agentes,
        categoria: propiedad.categoria

    }))
}

export default usePropiedades;
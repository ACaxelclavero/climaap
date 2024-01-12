import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Loading from "./Loading.jsx"
import useClima from "../hooks/useClima"

const AppClima = () => {

    const { resultado, cargando, noResultado } =  useClima()
  return (
        <>
        <main   className='dos-columnas'>
            <Formulario />
        
        {
            cargando ? <Loading /> :
            resultado?.name ? <Resultado /> :
            noResultado ? <p>{noResultado}</p>
            : <p>El clima se mostrara aqui</p>
          }   
        </main>
        </>
    )
}

export default AppClima
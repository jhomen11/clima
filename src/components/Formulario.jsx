import React, {useState} from 'react';
import Error from './Error';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar, limpiar}) => {

    
    const [error, guardarError] = useState(false);

    //Paso 2,Extraer ciudad y pais que vienen de la busqueda
    const {ciudad, pais} = busqueda;

    //Paso 3, Funcion que lee los datos del la busqueda y los coloca en el state
    const handleChange = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    //Paso 4, Funcion que se ejecuta al presionar el boton del formulario
    const handleSubmit = (e) => {
        e.preventDefault()
       

        //Paso 5, validad formulario
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }

        
        guardarError(false)
        
        guardarConsultar(true)
        
        
       
    }
    
        
    return (
        <form className="formulario"
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje='Ambos campos son obligatorios' />  : null}
            <div className="form-1">
                <label htmlFor="ciudad">Ciudad: </label>
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
            </div>
            <div className="form-1">
                <label htmlFor="pais">Pais: </label>
                <select name="pais" 
                        id="pais"   
                        value={pais}
                        onChange={handleChange}
                        >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="CL">Chile</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="VE">Venezuela</option>
                </select>
            </div>

            <button 
                className="boton"
                type="submit">Buscar Clima
            </button>
        </form>
    );
};

export default Formulario;
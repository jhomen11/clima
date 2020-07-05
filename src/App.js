import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error'


function App() {

  //Paso 1, el state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
});
  
  //State para usar con el useEfect
  const [consultar, guardarConsultar] = useState(false)
  const [resultado, guardarResultado] = useState({})
  const [error, guardarError] = useState(false);

  const {ciudad, pais} = busqueda;

  useEffect(() =>{
    
    //Funcion para consultar la informacion de la api
    const consultarAPI = async() =>{
      if(consultar){
        const key = 'f5c5d9bb4aa4bcef5ff660928bbe8eee';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}`;
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        
        guardarResultado(resultado)
        guardarConsultar(false);
        guardarBusqueda({
          ciudad:'',
          pais:''
      })
        
        
        if(resultado.cod === "404"){
          guardarError(true)
        }
        else{
          guardarError(false)
        }

      }
    }
    consultarAPI();
  }, [consultar,ciudad, pais]);

    let componente;
    if(error){
      componente = <Error mensaje='No se encontro resultados' />
    }
    else{
      componente = <Clima 
        resultado={resultado}
      />
    }


  return (
    
    <Fragment>
      <Header 
        titulo='Clima React App'
      />

      <div className="contenedor">
          <div className="contenedor-1">
            <Formulario 
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            />
          </div >
          <div className="clima">
            {componente}
          </div>
          
        </div>
    </Fragment>
  );
}

export default App;

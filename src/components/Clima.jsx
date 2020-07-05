import React from 'react';

const Clima = ({resultado}) => {

    const {name, main} = resultado;
        if(!name) return null;

        //Grados Kelvin
        const kelvin = 273.15
    return (
        <div className="contenedor-2">
            <h2>El clima de {name} es:</h2>
            <p>{parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span></p>
            <p>Temperatura Minima: {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span></p>
            <p>Temperatura Máxima:{parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span></p>
        </div>
    );
};

export default Clima;
import React, { useState, useEffect } from 'react';

export const InputEnteros = ({
    _valorPrevio,
    _label = 'label',
    _id = {_label},
    _name = {_label},
    _obligatorio = false,
    _placeholder,
    _info='Ayuda al usuario',
    _piso=1,
    _techo=9999999,
    _maxLength=10,
    onChange
}) => {
    const [value, setValue] = useState(_valorPrevio);
    const [campoObligatorioError, setCampoObligatorioError] = useState("");

    useEffect(() => {
        if (_valorPrevio !== "" && _valorPrevio !== null && _valorPrevio !== undefined) {
            setValue(_valorPrevio);
        }
    }, [_valorPrevio]);


    const handleChange = (ev) => {
         const newValue = ev.target.value.replace(/\D/g, ''); // Elimina todo lo que no sea número
         limitarRango(newValue);
        onChange(newValue,_label);//Devolver valor
    };

    const limitarRango = (newValue)=>{
        if (newValue === '' || (parseInt(newValue) >= _piso && parseInt(newValue) <= _techo)) {
            setValue(newValue);
        }
        
    }

    const campoObligatorio = () => {
        if (!value) {
            setCampoObligatorioError(`El campo ${_label} es obligatorio.`);
        } else {
            setCampoObligatorioError("");
        }
    };

  return (
    <div className="relative">
    <label
      htmlFor={value}
      className="text-label">
      <b>{_label}</b>
    </label>
    <input
      value={value}
      onChange={(ev) => handleChange(ev)}
      onBlur={() => {_obligatorio ? campoObligatorio():(console.log("No obligatorio"))}}
      placeholder={_placeholder}
      maxLength={_maxLength}
      pattern="[0-9]*\,?[0-9]?"
      type="text"
      id={_id._label}
      name={_name._label}
      className= {
        `w-full
      ${campoObligatorioError ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-300 focus:border-green-500 focus:ring-green-200'} 
        bg-gray-100 
        bg-opacity-50 rounded border 
        focus:border-yellow-500 
        focus:bg-white 
        focus:ring-2 
        focus:ring-yellow-200 
        text-base outline-none 
        text-gray-700 py-1 px-3 
        leading-8 
        transition-colors 
        duration-200 ease-in-out`
      }
      />
    
    { campoObligatorioError ==="" && (
                <p className="text-base">*{_info}</p>//Info
            )
    }

    {_obligatorio && (campoObligatorioError !=="") &&
        (
            <p className="text-error">{campoObligatorioError}</p>
        )
    }

  </div>
  )
}

//LLamada
//import { InputTerrenos } from "./../../components/shared/inputTerrenos.jsx";
// const [dato, setDato] = useState("");
// const [label, setLabel] = useState("");
// const [obligatorio, setObligatorio] = useState(true);

// const handleChange = (nuevoDato) => {
//    setDato(nuevoDato);
//    setNumero(nuevoDato);//Auxiliar para pruebas
// };

// <InputDinero _valorPrevio={dato} _label={label} _obligatorio={obligatorio} onChange={handleChange} />
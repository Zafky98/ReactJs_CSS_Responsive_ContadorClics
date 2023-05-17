import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import FreeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setnumClics] = useState(0);

  const manejarClic = () => {
    setnumClics(numClics + 1) ;
  };

  const reniciarContador = () =>{
    setnumClics(0);
  };

  return (
    <div className='App'>
      <div className='contenedor_logo'>
      <img 
        className='logo_freecode'
        src={FreeCodeCampLogo}
        alt='logo_freecode'
      />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics= {numClics} />
        <Boton 
          texto='Click'
          esBotonDeClic={true}
          manejarClic= {manejarClic}/>
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic= {reniciarContador}
        />

      </div>
      
    </div>
  );
}

export default App;

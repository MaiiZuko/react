import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';

function App() {

  const [campeao, setCampeao] = useState([])

  const aoNovoCampeaoAdicionado = (campeao) => {
    console.log(campeao)

  }
  return (
    <div className="App">
      <Banner/>
      <Formulario aoCampeaoCadastrado={campeao => aoNovoCampeaoAdicionado(campeao)}/>
    </div>
  );
}

export default App;

import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Time from './componentes/time';

function App() {

  const times = [
    {
      nome: 'Suporte',
      corPrimaria: '#bfdbbf',
      corSecundaria: '#abe7bd',
    },
    {
      nome: 'Mid',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Adc',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Jungle',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Top',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    }
  ]

  const [campeoes, setCampeao] = useState([])

  const aoNovoCampeaoAdicionado = (campeao) => {
    console.log(campeao)
    setCampeao([...campeoes, campeao])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCampeaoCadastrado={campeao => aoNovoCampeaoAdicionado(campeao)} />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria} 
        campeoes={campeoes.filter(campeao => campeao.time === time.nome)} />)}
    </div>
  );
}

export default App;

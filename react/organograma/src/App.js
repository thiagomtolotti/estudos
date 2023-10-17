import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const addColaborador = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
]

  return (
    <>
      <Banner />
      <Formulario aoCadastrarColaborador={colaborador => addColaborador(colaborador)} times={times}/>
      {times.map(time => <Time nome={time}/>)}
    </>
  );
}

export default App;

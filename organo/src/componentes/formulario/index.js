import './Formulario.css'
import CampoTexto from '../campoTexto/index'
import ListaSuspensa from '../listaSuspensa'

const Formulario = () => {

    const times = {
        'Suporte': 'Suporte',
        'Mid': 'Mid',
        'Adc': 'Adc',
        'Jungle': 'Jungle',
        'Top': 'Top',
    };

    const timesArray = Object.values(times);

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa itens={timesArray} />
            </form>
        </section>
    )
}

export default Formulario
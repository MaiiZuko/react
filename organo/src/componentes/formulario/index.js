import './Formulario.css'
import CampoTexto from '../campoTexto/index'
import ListaSuspensa from '../listaSuspensa'
import Botao from '../botao';

const Formulario = () => {

    const times = {
        'Suporte': 'Suporte',
        'Mid': 'Mid',
        'Adc': 'Adc',
        'Jungle': 'Jungle',
        'Top': 'Top',
    };

    const timesArray = Object.values(times);

    const aoSalvar = (evento) => {
        {/* previne o comportamento padrão - para a pagina n se recarregar e perder o submit */}
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            {/* on submit - quando alguem submeter vou chamar a função salva - quando o formulario for submetido essa é a função que quero executar */}
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={timesArray} />
                {/* <Botao texto="Criar Card"/> devolve o texto */}
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
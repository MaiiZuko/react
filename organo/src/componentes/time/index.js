import './Time.css'

const Time = (props) => {
    return(
        <selection className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
        </selection>
    )
}

export default Time
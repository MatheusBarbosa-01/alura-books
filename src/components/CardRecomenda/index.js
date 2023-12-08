export default function CardRecomenda({titulo, subtitulo, descricao, img}){
    return(
        <div>
                <h3>{titulo}</h3>
                <h4>{subtitulo}</h4>
                <p>{descricao}</p>
                <img>{img}</img>
                <button>Saiba mais</button>
            </div>
    )
}
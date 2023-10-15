import './style.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

export default function opcoesHeader() {
    return (
        <ul className='opcoes'>
            {textoOpcoes.map(texto => (
                <li className='opcao-li'><p>{texto}</p></li>
            ))}
        </ul>
    )
}
import styled from 'styled-components'

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
    padding: 0 5px 0 5px;
    min-width: 120px;
` 

const Opcoes = styled.ul`
    display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

export default function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map(texto => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    )
}
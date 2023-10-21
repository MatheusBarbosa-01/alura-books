import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`

    background-color: #fff;
    height: 8vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    box-shadow: 0px 2px 8px rgb(0, 0, 0);
`

export default function Header (){
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}
import './style.css'
import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'

const icones =[perfil, sacola]

export default function IconesHeader(){
    return(
        <ul className='icones'>
          {icones.map( icone => (
            <li className='icone'><img src={icone}></img></li>
          ))}
        </ul>
    )
}
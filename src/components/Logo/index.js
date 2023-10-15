import logo from '../../img/logo.svg'
import './style.css'

export default function Logo (){
    return(
        <div className='logo'>
          <img src={logo} alt='logo' className='logo-img'></img>
          <p><strong>Alura Books</strong></p>
        </div>
    )
}
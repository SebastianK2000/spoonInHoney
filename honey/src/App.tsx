import { Link } from 'react-router-dom'
import logo from '../src/assets/logo.svg'

const App = () => {
  return (
    <div>
      <div>
        <img className='main-logo-home' src={logo} />
      </div>
      <button><Link to="/Contact">Click me!</Link></button>
  
    </div>
  )
}

export default App

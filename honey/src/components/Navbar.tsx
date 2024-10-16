import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/Navbar.css';

const Navbar = () => {

  function showSidebar() {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.classList.toggle('active');
        
        if (sidebar.classList.contains('active')) {
            (sidebar as HTMLElement).style.display = 'flex';
        } else {
            (sidebar as HTMLElement).style.display = 'none';
        }
      }
  }

  function closeSidebar() {
      const sidebar = document.querySelector('.sidebar');
      if (sidebar && sidebar.classList.contains('active')) {
          sidebar.classList.remove('active');
          (sidebar as HTMLElement).style.display = 'none';
      }
  }

  return (
    <nav>
      <ul className='sidebar'>
        <li className='main-close-icon-div' onClick={showSidebar}><a><img className='main-close-icon' src={close}/></a></li>
        <li><Link to="/home" onClick={closeSidebar}><a className='menu-sidebar-li-element'>Home</a></Link></li>
        <li><Link to="/menu" onClick={closeSidebar}><a className='menu-sidebar-li-element'>Menu</a></Link></li>
        <li><Link to="/aboutus" onClick={closeSidebar}><a className='menu-sidebar-li-element'>About Us</a></Link></li>
        <li><Link to="/careers" onClick={closeSidebar}><a className='menu-sidebar-li-element'>Careers</a></Link></li>
        <li><Link to="/contact" onClick={closeSidebar}><a className='menu-sidebar-li-element'>Contact</a></Link></li>
      </ul>

      <ul className='navbar-list-logo'>
        <li><Link to="/home"><img className='navbar-logo' src={logo} alt="logo" /></Link></li>
        <li className='hide-on-mobile'><Link to="/home"><a>Home</a></Link></li>
        <li className='hide-on-mobile'><Link to="/menu"><a>Menu</a></Link></li>
        <li className='hide-on-mobile'><Link to="/aboutus"><a>About Us</a></Link></li>
        <li className='hide-on-mobile'><Link to="/careers"><a>Careers</a></Link></li>
        <li className='hide-on-mobile'><Link to="/contact"><a>Contact</a></Link></li>
        <li className='main-menu-icon-div' onClick={showSidebar}><a><img className='main-menu-icon' src={menu}/></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

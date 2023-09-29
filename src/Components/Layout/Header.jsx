import logo from "../../images/logo192.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (<div><MainHeader></MainHeader><NavBar/></div>)
  }
  
  function MainHeader() {
    return (
      <div className="pt-2 p-1 py-2 m-2 border-bottom">
        <span className='heading1'>React Course - RouteOpedia</span>
      </div>
    )
  }

  function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src={logo} alt="" className="px-2" style={{height : "35px"}}></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cryptodetail/BTC/10">Crypto Details</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/product">Product</Link></li>
            <li><Link className="dropdown-item" to="/product/create">Create Product</Link></li>
            <li><Link className="dropdown-item" to="/product/list">Product List</Link></li>
            <li><Link className="dropdown-item" to="/product/details">Product Details</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true" href="/">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
  }

  export default Header;
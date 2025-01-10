const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">ABOUT US</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">GUFF WEAR</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">SCHEDULE</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              GAMES
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">GTA V</a></li>
              <li><a className="dropdown-item" href="#">GTA GOLF</a></li>
              <li><a className="dropdown-item" href="#">TURBOGOLF</a></li>
            </ul>
          </li>
          <li>
          <button className="btn btn-outline-success" type="submit">Search</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
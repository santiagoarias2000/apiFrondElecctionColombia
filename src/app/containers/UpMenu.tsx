import { Link } from "react-router-dom";

export const UpMenu = () => {

  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Guia Electoral de Colombia
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="dropdown-center">
                  <button
                    className="btn btn-secondary dropdown-toggle btn-info"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Departamento
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to={"/home/amazonas/"} style={linkStyle}>
                        <a className="dropdown-item">
                          Amazonas
                        </a>
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Action two
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Action three
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

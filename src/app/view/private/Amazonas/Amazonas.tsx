import "../../../../assets/css/StyleBody.css";
import { useState, useEffect } from "react";
import AmazonasModel from "../../../models/Amazonas";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Link, useNavigate } from "react-router-dom";

export const Amazonas = () => {
  const [arrayAmazonas, setArrayAmazonas] = useState<AmazonasModel[]>([]);
  const regresar = useNavigate();
  let title = arrayAmazonas.find((data) => (data.idElection = 1));

  const getMeAmazonas = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.AMAZONAS_PRIVATE_VIEW
    );
    setArrayAmazonas(result);
  };

  useEffect(() => {
    getMeAmazonas();
  }, []);
  return (
    <div>
      <div className="container text-center">
        <div className="title">
          <h1>
            <span>Departamento: {title?.nombreDepartamento}</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="caja">
              <ul className="list-group">
                <li className="list-group-item" aria-current="true">
                  {" "}
                  <Link to={"/home/leticia"} style={{ textDecoration: "none" }}>
                    <a className="nav-link active" aria-current="page">
                      Leticia
                    </a>
                  </Link>
                </li>
                <li className="list-group-item">
                  {" "}
                  <Link to={"/home/leticia"} style={{ textDecoration: "none" }}>
                    <a className="nav-link active" aria-current="page">
                      El Encanto
                    </a>
                  </Link>
                </li>
                <li className="list-group-item">
                  {" "}
                  <Link to={"/home/leticia"} style={{ textDecoration: "none" }}>
                    <a className="nav-link active" aria-current="page">
                      La chorrera
                    </a>
                  </Link>
                </li>
                <li className="list-group-item">
                  {" "}
                  <Link to={"/home/leticia"} style={{ textDecoration: "none" }}>
                    <a className="nav-link active" aria-current="page">
                      La Pedrera
                    </a>
                  </Link>
                </li>
              </ul>
              <hr />
              <button
                onClick={() => regresar(-1)}
                className="btn btn-info btn-sm"
              >
                Regresar
              </button>
            </div>
          </div>
          <div className="col-8">
            <ScrollMenu>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Municipio</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Partido Politico</th>
                    <th scope="col">Nombre del Candidato</th>
                    <th scope="col">Votos</th>
                  </tr>
                </thead>
                <tbody>
                  {arrayAmazonas.map((myList, contador) => (
                    <tr key={contador}>
                      <td>{contador+1}</td>
                      <td>{myList.nombreMunicipio}</td>
                      <td>{myList.nombreCor}</td>
                      <td>{myList.nombrePartido}</td>
                      <td>{myList.nombreCandidato}</td>
                      <td>{myList.votos}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

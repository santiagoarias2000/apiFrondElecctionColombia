import "../../../../assets/css/StyleBody.css";
import { useState, useEffect } from "react";
import AmazonasModel from "../../../models/Amazonas";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Gobernador = () => {
  let {codeCor} = useParams();
  const [arrayAmazonas, setArrayAmazonas] = useState<AmazonasModel[]>([]);
  const regresar = useNavigate();
  const id = Number(codeCor);
  let title = arrayAmazonas.find((data) => (data.idElection = id));

  const getMeAmazonas = async () => {
    const urlCarge = ApiBack.AMAZONAS_PRIVATE_VIEWGOBERNADOR + "/"+ codeCor;
    const result = await ServicePrivate.petitionGET(
      urlCarge
    );
    setArrayAmazonas(result);
    console.log(result);
    
  };

  useEffect(() => {
    getMeAmazonas();
  }, []);
  return (
    <div>
      <div className="container text-center">
      <div className="title">
          <h1>
            <span>Cargo: {title?.nombreCor}</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-2">
          <div className="caja">
            <ul className="list-group">
              <li className="list-group-item" aria-current="true">
                {" "}
                <Link to={"/home/arcesio"} style={{ textDecoration: "none" }}>
                  <a className="nav-link active" aria-current="page">
                    ARCESIO RENDON GONZALEZ
                  </a>
                </Link>
              </li>
              <li className="list-group-item">
                {" "}
                <Link to={"/home/leticia"} style={{ textDecoration: "none" }}>
                  <a className="nav-link active" aria-current="page">
                    ERICK ALEJANDRO PELAEZ RAMIREZ
                  </a>
                </Link>
              </li>
              <li className="list-group-item">
                {" "}
                <Link to={"/home/leticia"} style={{ textDecoration: "none" }}>
                  <a className="nav-link active" aria-current="page">
                    JESUS GALDINO CEDEﾑO
                  </a>
                </Link>
              </li>
              <li className="list-group-item">
                {" "}
                <Link to={"/home/leticia"} style={{ textDecoration: "none" }}>
                  <a className="nav-link active" aria-current="page">
                    JHON ALEX BENJUMEA MORENO
                  </a>
                </Link>
              </li>
            </ul>
            <hr />
            <button onClick={() => regresar(-1)} className="btn btn-info btn-sm">
              
          Regresar
        </button>
        </div>
          </div>
          <div className="col-10">
            <ScrollMenu>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Partido</th>
                    <th scope="col">Candidato</th>
                    <th scope="col">Votos</th>
                  </tr>
                </thead>
                <tbody>
                  {arrayAmazonas.map((myList, contador) => (
                    <tr key={contador}>
                      <td>{contador+1}</td>
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

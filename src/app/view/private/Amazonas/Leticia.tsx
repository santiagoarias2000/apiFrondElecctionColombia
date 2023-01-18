import "../../../../assets/css/StyleBody.css";
import { useState, useEffect } from "react";
import AmazonasModel from "../../../models/Amazonas";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Link, useNavigate } from "react-router-dom";
import Cargo from "../../../models/Cargo";

export const Leticia = () => {
  //Const to array for util in models
  const [arrayAmazonas, setArrayAmazonas] = useState<AmazonasModel[]>([]);
  const [arrayCargo, setArrayCargo] = useState<Cargo[]>([]);
  //const to go back in the page
  const regresar = useNavigate();
  //
  let title = arrayAmazonas.find((data) => (data.idElection = 1));
  //Const to .... information for de apiBack
  const getMeAmazonas = async () => {
    const result = await ServicePrivate.petitionGET(
      ApiBack.AMAZONAS_PRIVATE_VIEWLETICIA
    );
    setArrayAmazonas(result);
  };
  const getMeCargo = async () => {
    const result = await ServicePrivate.petitionGET(ApiBack.CARGO_PRIVATE);
    setArrayCargo(result);
  };
  //hook use to const
  useEffect(() => {
    getMeAmazonas();
    getMeCargo();
  }, []);
  //4
  return (
    <div>
      <div className="container text-center">
        <div className="title">
          <h1>
            <span>Municipio: {title?.nombreMunicipio}</span>
          </h1>
        </div>
        <div className="row">
          <div className="col col-lg-2">
            <div className="caja">
              <ul className="list-group">
                {arrayCargo.map((myCargo, contador) => (
                  <li className="list-group-item" aria-current="true">
                    {" "}
                    <Link
                      to={"/home/gobernador/" + myCargo.codeCor}
                      style={{ textDecoration: "none" }}
                    >
                      <a className="nav-link active" aria-current="page">
                        {myCargo.nombreCor}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <button
              onClick={() => regresar(-1)}
              className="btn btn-info btn-sm"
            >
              Regresar
            </button>
          </div>
          <div className="col-10">
            <div>
              <ScrollMenu>
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Cargo</th>
                      <th scope="col">Partido</th>
                      <th scope="col">Candidato</th>
                      <th scope="col">Votos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arrayAmazonas.map((myList, contador) => (
                      <tr key={contador}>
                        <td>{contador+1}</td>
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
    </div>
  );
};

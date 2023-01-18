import "../../../../assets/css/StyleBody.css";
import { useState, useEffect } from "react";
import AmazonasModel from "../../../models/Amazonas";
import ServicePrivate from "../../../server/ServicePrivate";
import ApiBack from "../../../util/domins/ApiBack";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { Link, useNavigate } from "react-router-dom";

export const Arcesio = () => {
  const [arrayAmazonas, setArrayAmazonas] = useState<AmazonasModel[]>([]);
  const regresar = useNavigate();
  let title = arrayAmazonas.find((data) => (data.idElection = 1));

  const getMeAmazonas = async () => {
      const result = await ServicePrivate.petitionGET(
        ApiBack.AMAZONAS_PRIVATE_VIEWARCERSIO
    );
    setArrayAmazonas(result);
  };

  useEffect(() => {
    getMeAmazonas();
  }, []);
  return (
    <div>
        <div className="title">
          <h1>
            <span>Candidato: {title?.nombreCandidato}</span>
          </h1>
        </div>
      <div className="container text-justify table_candidato">
        <div className="row">
          <div className="col-12 ">
            <div>
              <ScrollMenu>
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Puesto de Votación</th>
                      <th scope="col">Nombre Partido</th>
                      <th scope="col">Votos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arrayAmazonas.map((myList, contador) => (
                      <tr key={contador}>
                        <td>{contador+1}</td>
                        <td>{myList.nombrePuesto}</td>
                        <td>{myList.nombrePartido}</td>
                        <td>{myList.votos}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollMenu>
              <hr />
              <button
                onClick={() => regresar(-1)}
                className="btn btn-info btn-sm"
              >
                Regresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

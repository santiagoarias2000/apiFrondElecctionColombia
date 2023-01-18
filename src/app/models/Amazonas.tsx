class AmazonasModel {
  public idElection: number;
  public codeDepartamento: number;
  public nombreDepartamento: string;
  public codeMunicipio: number;
  public nombreMunicipio: string;
  public zona: number;
  public puesto: number;
  public nombrePuesto: string;
  public mesa: number;
  public codeCor: number;
  public nombreCor: string;
  public codeCir: number;
  public nombreCir: string;
  public codePartido: number;
  public nombrePartido: string;
  public codeCandidato: number;
  public nombreCandidato: string;
  public votos: number;

  constructor(
    id: number,
    codDepar: number,
    namDepar: string,
    codMuni: number,
    namMun: string,
    zona: number,
    puesto: number,
    namPue: string,
    mesa:number,
    codCor:number,
    namCor:string,
    codCir:number,
    namCir:string,
    codPar:number,
    namePar:string,
    codCandi:number,
    namCand:string,
    votos:number
  ) {
    this.idElection = id;
    this.codeDepartamento = codDepar;
    this.nombreDepartamento = namDepar;
    this.codeMunicipio = codMuni;
    this.nombreMunicipio = namMun;
    this.zona = zona;
    this.puesto = puesto;
    this.nombrePuesto = namPue;
    this.mesa = mesa;
    this.codeCor = codCor;
    this.nombreCor = namCor;
    this.codeCir = codCir;
    this.nombreCir = namCir;
    this.codePartido = codPar;
    this.nombrePartido = namePar;
    this.codeCandidato = codCandi;
    this.nombreCandidato = namCand;
    this.votos = votos;
  }
}
export default AmazonasModel;

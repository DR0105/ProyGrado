import { Parametro } from './parametro';
import { Dependencia } from './dependencia';
import { Tercero } from './tercero';
export class Vinculacion  {
  Id: number;
	TerceroPrincipalId: Tercero;
	//TerceroRelacionadoId: Tercero;
	TipoVinculacionId: number;
	TipoVinculacion: Parametro;
	CargoId: number;
	DependenciaId: number;
	Dependencia: Dependencia;
	//PeriodoId: number;
  FechaInicioVinculacion: string;
  FechaFinVinculacion: string;

}

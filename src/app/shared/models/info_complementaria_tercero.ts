import { InfoComplementaria } from './info_complementaria';
export class InfoComplementariaTercero{
  Id: number;
	TerceroId: number;
	InfoComplementariaId: InfoComplementaria;
	Dato: string;
	Activo: boolean;
  InfoCompleTerceroPadreId: InfoComplementariaTercero;
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';


const opciones = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`,
  })
}
const baseUrl = environment.ESTUDIANTES;
@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private http: HttpClient) { }
getEstudiante(codigo){
  return this.http.get(baseUrl + 'datos_basicos_estudiante/'+ codigo, opciones);
}
getProyecto(codigop){
  return this.http.get(baseUrl + 'carrera/'+ codigop, opciones);
}

}

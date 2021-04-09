import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { DatosIdentificacion } from '../../../../shared/models/datos_identificacion';
import { InfoComplementariaTercero } from '../../../../shared/models/info_complementaria_tercero';
import { Tercero } from '../../../../shared/models/tercero';
import { Vinculacion } from '../../../../shared/models/vinculacion';
import { CargaAcademica } from '../../../../shared/models/carga_academica';
import { RequestManager } from '../../../../@core/managers/requestManager';
import Swal from 'sweetalert2';
import { UserService } from '../../../../@core/managers/userService';

@Component({
  selector: 'ngx-datos-basicos',
  templateUrl: './datos-basicos.component.html',
  styleUrls: ['../historia-clinica.component.css']
})
export class DatosBasicosComponent implements OnInit {
  tercero: Tercero;
  datosIdentificacion: DatosIdentificacion;
  datosGenero: InfoComplementariaTercero;
  datosLocalidad: InfoComplementariaTercero;
  datosEstadoCivil: InfoComplementariaTercero;
  cargaAcademica: CargaAcademica[];
  vinculacionesDocente: Vinculacion[];
  vinculacionesEstudiante: Vinculacion[];
  vinculacionesOtros: Vinculacion[];
  vinculaciones: Vinculacion[];
  edad: number;
  settings: any;
  datosBasicos: FormGroup = this.fb.group({
    vinculacion: ['', Validators.required],
    tipo: ['', Validators.required],
    situacionAcademica: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private request: RequestManager,private userService: UserService) { }
   public corregirFecha(fecha: string): Date {
    let fechaHora = new Date(fecha);
    fechaHora.setHours(fechaHora.getHours() + 5);
    return fechaHora;
  }
  public calcularEdad(fechaNaciemientoStr: string): number {
    if (fechaNaciemientoStr) {
      const actual = new Date();
      const fechaNacimiento = new Date(fechaNaciemientoStr);
      let edad = actual.getFullYear() - fechaNacimiento.getFullYear();
      const mes = actual.getMonth() - fechaNacimiento.getMonth();
      if (mes < 0 || (mes === 0 && actual.getDate() < fechaNacimiento.getDate())) {
        edad--;
      }
      return edad;
    } else {
      return null;
    }
  }
  public asignarVinculacion(vinculacion: Vinculacion) {
    let idRol: number = vinculacion.TipoVinculacion.Id;


    if (idRol != 293 && idRol != 294 && vinculacion.TipoVinculacion.ParametroPadreId != null) {
      vinculacion.TipoVinculacion.Nombre = vinculacion.TipoVinculacion.ParametroPadreId.Nombre;
    }

    if (idRol == 293 || idRol == 294 || (idRol >= 296 && idRol <= 299)) {
      let dateObj = new Date();
      let weekdayNumber = dateObj.getDay();
      this.vinculacionesDocente.push(vinculacion);
      this.request.get(environment.ACADEMICA_JBPM_SERVICE, `carga_academica/2021/1/${this.datosIdentificacion.Numero}/${weekdayNumber}`)
        .subscribe((carga: any) => {
          if (carga) {
            this.cargaAcademica = carga['carga_academica']['docente'];
            let datosCarga = this.cargaAcademica.map((carga) =>
              new Object({
                Vinculacion: `${carga.VINCULACION}`,
                Proyecto: `${carga.FACULTAD} - ${carga.PROYECTO}`,
                Horario: `${carga.SALON} - ${carga.DIA} - ${carga.HORA}`,
                Asignatura: `${carga.CODIGO_ASIGNATURA} - ${carga.ASIGNATURA} - GR ${carga.GRUPO}`,
              }))

          }
        }, (error) => {
          console.log(error);
          Swal.close();
        })

    } else if (vinculacion.TipoVinculacion.ParametroPadreId) {
      if (vinculacion.TipoVinculacion.ParametroPadreId.Id == 346) {
        this.vinculacionesEstudiante.push(vinculacion);
      } else {
        this.vinculacionesOtros.push(vinculacion);
      }
    } else if (vinculacion.TipoVinculacion.Id == 346) {
      this.vinculacionesEstudiante.push(vinculacion);
    } else {
      this.vinculacionesOtros.push(vinculacion);
    }
  }
  cargarCampos() {
    this.settings = {
      actions: false,
      mode: 'external',
      columns: {
        Vinculacion: {
          title: 'Vinculacion',
          filter: false,
          valuePrepareFunction: (value) => value,
        },
        Proyecto: {
          title: 'Proyecto',
          filter: false,
          valuePrepareFunction: (value) => value,
        },
        Horario: {
          title: 'Horario',
          filter: false,
          valuePrepareFunction: (value) => value,
        },
        Asignatura: {
          title: 'Asignatura',
          filter: false,
          valuePrepareFunction: (value) => value,
        },
      },
    };
  }
  ngOnInit(): void {
    this.cargarCampos();
    this.userService.user$.subscribe((data) => {
      this.request.get(environment.TERCEROS_SERVICE, `datos_identificacion/?query=Numero:` + data['userService']['documento'])
        .subscribe((datosInfoTercero: any) => {
          this.datosIdentificacion = {
            ...datosInfoTercero[0],
            ...{ FechaExpedicion: datosInfoTercero[0].FechaExpedicion ? this.corregirFecha(datosInfoTercero[0].FechaExpedicion) : '' }
          }
          this.tercero = this.datosIdentificacion.TerceroId;
          this.tercero.FechaNacimiento = this.corregirFecha(this.tercero.FechaNacimiento);
          this.edad = this.calcularEdad(this.tercero ? this.tercero.FechaNacimiento ? this.tercero.FechaNacimiento : null : null);
          this.request.get(environment.TERCEROS_SERVICE, `info_complementaria_tercero/?query=TerceroId.Id:${!!this.tercero ? this.tercero.Id ? this.tercero.Id : '' : ''}`
            + `,InfoComplementariaId.GrupoInfoComplementariaId.Id:6`)
            .subscribe((datosInfoGenero: any) => {
              this.datosGenero = datosInfoGenero[0];
            }, (error) => {
              console.log(error);
            })

          this.request.get(environment.TERCEROS_SERVICE, `info_complementaria_tercero/?query=TerceroId.Id:${!!this.tercero ? this.tercero.Id ? this.tercero.Id : '' : ''}`
            + `,InfoComplementariaId.GrupoInfoComplementariaId.Id:2`)
            .subscribe((datosInfoEstadoCivil: any) => {
              this.datosEstadoCivil = datosInfoEstadoCivil[0];
            }, (error) => {
              console.log(error);
            })

            this.request.get(environment.TERCEROS_SERVICE, `info_complementaria_tercero/?query=TerceroId.Id:${!!this.tercero ? this.tercero.Id ? this.tercero.Id : '' : ''}`
            + `,InfoComplementariaId.GrupoInfoComplementariaId.CodigoAbreviacion:LOCBOG`)
            .subscribe((datosInfoLocalidad: any) => {
              this.datosLocalidad = datosInfoLocalidad[0];
            }, (error) => {
              console.log(error);
            })
                  
          
          this.request.get(environment.TERCEROS_SERVICE, `vinculacion/?query=Activo:true,TerceroPrincipalId.Id:${!!this.tercero ? this.tercero.Id ? this.tercero.Id : '' : ''}`)
            .subscribe((datosInfoVinculaciones: any) => {
              this.vinculaciones = datosInfoVinculaciones;
              this.vinculacionesDocente = [];
              this.vinculacionesEstudiante = [];
              this.vinculacionesOtros = [];
              for (let i = 0; i < this.vinculaciones.length; i++) {
                this.vinculaciones[i] = {
                  ...datosInfoVinculaciones[i],
                  ...{ FechaInicioVinculacion: this.vinculaciones[i].FechaInicioVinculacion ? this.corregirFecha(this.vinculaciones[i].FechaInicioVinculacion) : '' },
                  ...{ FechaFinVinculacion: this.vinculaciones[i].FechaFinVinculacion ? this.corregirFecha(this.vinculaciones[i].FechaFinVinculacion) : '' }
                }
                if (JSON.stringify(this.vinculaciones[i]) !== '{}') {
                  this.request.get(environment.PARAMETROS_SERVICE, `parametro/?query=Id:` + this.vinculaciones[i].TipoVinculacionId)
                    .subscribe((vinculacion: any) => {
                      this.vinculaciones[i].TipoVinculacion = vinculacion['Data'][0];
                      if (this.vinculaciones[i].DependenciaId) {
                        this.request.get(environment.OIKOS_SERVICE, `dependencia/` + this.vinculaciones[i].DependenciaId)
                          .subscribe((dependencia: any) => {
                            this.vinculaciones[i].Dependencia = dependencia;
                          }, (error) => {
                            console.log(error);
                          })
                      }
                      this.asignarVinculacion(this.vinculaciones[i]);
                    })
                }
              }
            })
        }, (error) => {
          console.log(error);
          Swal.close();
        })
    })



  }
  
}



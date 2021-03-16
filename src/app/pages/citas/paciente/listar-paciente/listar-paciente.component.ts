import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../../../../shared/services/estudiantes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';
//import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'ngx-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.scss']
})
export class ListarPacienteComponent implements OnInit {
  nombre = '';
  carrera = '';
  codigo = '';
  estado = '';


  constructor(private estudianteService: EstudiantesService) { }
  miFormulario = new FormGroup({
    codigo: new FormControl(null, Validators.required),
  });
  buscarPaciente() {
    this.estudianteService.getEstudiante(this.miFormulario.value.codigo)
      .subscribe((data: any) => {
        console.log(data);
        var paciente = data.datosEstudianteCollection.datosBasicosEstudiante[0];
        this.nombre = paciente.nombre;
        this.codigo = paciente.codigo;
        this.estado = paciente.estado;
        this.estudianteService.getProyecto(paciente.carrera)
          .subscribe((data: any) => {
            this.carrera = data.carrerasCollection.carrera[0].nombre;
            // console.log(this.carrera);
          })
      })

  }
  ngOnInit() {
    this.buscarPaciente();
  }
  /*getUsuarios() {
    this._usuarioService.getUsuarios().subscribe(data => {
      this.usuarios=[];
      this.datasource = this.usuarios;
      data.forEach((element: any) => {
        this.usuarios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()

        })
      });

    })
  }
 
  eliminarUsuario(id: string) {
    this._usuarioService.eliminarUsuarios(id).then(() => {
      this.toastr.error('Empleado Eliminado', 'El empleado se eliminó con éxito');
    }).catch(error => {
      this.toastr.error('Error', 'No sé qué pasó xd');
    })
  }*/

}

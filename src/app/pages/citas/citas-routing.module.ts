import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarCitaComponent } from './cita/listar-cita/listar-cita.component';
import { CrearCitaComponent } from './cita/crear-cita/crear-cita.component';
import { HorariosComponent } from './especialista/horarios/horarios.component';
import { ListarPacienteComponent } from './paciente/listar-paciente/listar-paciente.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', children:[
    {
      path:'listarCita', component: ListarCitaComponent
    },
    {
      path:'crearCita', component: CrearCitaComponent
    },
    {
      path:'horarios', component: HorariosComponent
    },
    {
      path:'listarPaciente', component: ListarPacienteComponent
    },
    {
      path:'', component: HomeComponent
    },
    {
      path:'**', redirectTo: ''
    },
    
     ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }

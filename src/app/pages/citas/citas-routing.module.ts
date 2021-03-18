import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListarCitaComponent } from "./cita/listar-cita/listar-cita.component";
import { CrearCitaComponent } from "./cita/crear-cita/crear-cita.component";
import { HorariosComponent } from "./especialista/horarios/horarios.component";
import { ListarPacienteComponent } from "./paciente/listar-paciente/listar-paciente.component";
import { HomeComponent } from "./home/home.component";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { HistoriaClinicaComponent } from "./historia-clinica/historia-clinica.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "listarCita", component: ListarCitaComponent },
      { path: "crearCita", component: CrearCitaComponent },
      { path: "horarios", component: HorariosComponent },
      { path: "listarPaciente", component: ListarPacienteComponent },
      { path: "historiaClinica/:codigo", component: HistoriaClinicaComponent },
      { path: "", component: HomeComponent },
      { path: "**", redirectTo: "" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), NgxMaterialTimepickerModule],
  exports: [RouterModule],
})
export class CitasRoutingModule {}

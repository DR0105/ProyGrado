import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { ListarCitaComponent } from './cita/listar-cita/listar-cita.component';
import { CrearCitaComponent } from './cita/crear-cita/crear-cita.component';
import { HorariosComponent } from './especialista/horarios/horarios.component';
import { ListarPacienteComponent } from './paciente/listar-paciente/listar-paciente.component';
import { HomeComponent } from './home/home.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbProgressBarModule, NbRadioModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbUserModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { RadioSelectGenericoModule } from '../../shared/components/radio-select-generico/radio-select-generico.module';
import { ComboGenericoModule } from '../../shared/components/combo-generico/combo-generico.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';


@NgModule({
  declarations: [ListarCitaComponent, CrearCitaComponent, HorariosComponent, ListarPacienteComponent, HomeComponent, HistoriaClinicaComponent],
  imports: [
    CommonModule,
    CitasRoutingModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    NgxMaterialTimepickerModule,
    LeafletModule,
    NbStepperModule,
    NbInputModule,
    NbRadioModule,
    NbLayoutModule,
    NbAccordionModule,
    ComboGenericoModule,
    RadioSelectGenericoModule,
  ]
})
export class CitasModule { }

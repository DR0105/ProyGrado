import { NgModule } from '@angular/core';
import { NbMenuModule, NbSpinnerModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { InscripcionEstModule } from './inscripcion-estudiante/inscripcion-est.module';
import { RevisionInscModule } from './revision-insc/revision-insc.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ConfiguracionService } from '../@core/data/configuracion.service';
import { MenuService } from '../@core/data/menu.service';
import { SharedModule } from '../shared/shared.module';
import { NbIconModule } from '@nebular/theme';
import { HomeModule } from './home/home.module';
import { ApoyoAlimentarioComponent } from './apoyo-alimentario/apoyo-alimentario.component';
import { ApoyoAlimentarioModule } from './apoyo-alimentario/apoyo-alimentario.module';
import { MatFormFieldModule } from '@angular/material';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';



@NgModule({
  imports: [
    MatFormFieldModule,
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbIconModule,
    DashboardModule,
    SharedModule,
    InscripcionEstModule,
    ApoyoAlimentarioModule,
    HomeModule,
    RevisionInscModule,
    MiscellaneousModule,
    NbSpinnerModule,
    NgxMaterialTimepickerModule,
  ],
  declarations: [
    PagesComponent,
  ],
  providers: [
    ConfiguracionService,
    MenuService,
  ],
})
export class PagesModule {
}

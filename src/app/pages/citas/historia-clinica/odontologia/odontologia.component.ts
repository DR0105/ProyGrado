import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-odontologia',
  templateUrl: './odontologia.component.html',
  styleUrls: ['../historia-clinica.component.css']
})
export class OdontologiaComponent implements OnInit {
  nuevaEvolucionOdonto: FormControl = this.fb.control('', Validators.required);
  odontologiaForm: FormGroup = this.fb.group({
    motivoConsultaOdonto: ['', Validators.required],
    tratamientoMedico: ['', Validators.required],
    ingestionMedicamentos: ['', Validators.required],
    reaccionesAlergicas: ['', Validators.required],
    hemorragias: ['', Validators.required],
    irradiaciones: ['', Validators.required],
    sinusitis: ['', Validators.required],
    enfermedadesRespiratorias: ['', Validators.required],
    cardiopatias: ['', Validators.required],
    diabetes: ['', Validators.required],
    fiebreReumatica: ['', Validators.required],
    hepatitis: ['', Validators.required],
    hipertensionArterial: ['', Validators.required],
    otrasEnfermedades: ['', Validators.required],
    antecedentesFamiliares: ['', Validators.required],
    cepillado: ['', Validators.required],
    cepilladoCuantas: ['', Validators.required],
    sedaDental: ['', Validators.required],
    sedaDentalCuantas: ['', Validators.required],
    enjuague: ['', Validators.required],
    enjuagueCuantas: ['', Validators.required],
    dulces: ['', Validators.required],
    fuma: ['', Validators.required],
    chicles: ['', Validators.required],
    temperatura: ['', Validators.required],
    pulso: ['', Validators.required],
    tensionArterial: ['', Validators.required],
    respiracion: ['', Validators.required],
    articulacionTemporoMandibula: ['', Validators.required],
    labios: ['', Validators.required],
    lengua: ['', Validators.required],
    paladar: ['', Validators.required],
    pisoBoca: ['', Validators.required],
    carrillos: ['', Validators.required],
    glandulasSalivales: ['', Validators.required],
    maxilares: ['', Validators.required],
    senosMaxilares: ['', Validators.required],
    musculosMasticadores: ['', Validators.required],
    nerviosoOdontologia: ['', Validators.required],
    vascularOdontologia: ['', Validators.required],
    linfaticoRegionalOdontologia: ['', Validators.required],
    Supernumerarios: ['', Validators.required],
    abrasion: ['', Validators.required],
    manchas: ['', Validators.required],
    patologiaPulpar: ['', Validators.required],
    placaBlanda: ['', Validators.required],
    placaCalcificada: ['', Validators.required],
    oclusion: ['', Validators.required],
    otrosOdonto: ['', Validators.required],
    observaciones: ['', Validators.required],
    ultimaVisitaOdontologo: ['', Validators.required],
    evaluacionEstadoFinal: ['', Validators.required],
    indiceActualVestabular: ['', Validators.required],
    indiceAnteriorVestabular: ['', Validators.required],
    fechaPlacaVestabular: ['', Validators.required],
    indiceActualVestibular: ['', Validators.required],
    indiceAnteriorVestibular: ['', Validators.required],
    fechaPlacaVestibular: ['', Validators.required],
    observacionesVestibular: ['', Validators.required],
    diagnosticoOdonto: ['', Validators.required],
    pronosticoOdonto: ['', Validators.required],
    periapical1: ['', Validators.required],
    periapical2: ['', Validators.required],
    panoramica1: ['', Validators.required],
    panoramica2: ['', Validators.required],
    otra1: ['', Validators.required],
    otra2: ['', Validators.required],
    examenesLaboratorioOdonto1: ['', Validators.required],
    examenesLaboratorioOdonto2: ['', Validators.required],
    tp: ['', Validators.required],
    tpt: ['', Validators.required],
    coagulacion: ['', Validators.required],
    sangria: ['', Validators.required],
    otra: ['', Validators.required],
    evolucionOdonto: this.fb.array([]),
  });
  pruebaEspecialista = {
    nombre: 'NOMBRE1 APELLIDO1',
    especialidad: 'ESPECIALIDAD 1',
  }
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
  }
  get evolucionOdontoArr() {
    return this.odontologiaForm.get('evolucionOdonto') as FormArray;
  }
  agregarEvolucionOdonto() {
    if (this.nuevaEvolucionOdonto.invalid) {
      return
    }
    this.evolucionOdontoArr.push(new FormControl(this.nuevaEvolucionOdonto.value, Validators.required));
    this.nuevaEvolucionOdonto.reset();
  }
  borrarEvolucionOdonto(i: number) {
    this.evolucionOdontoArr.removeAt(i);
  }
  buscarEspecialista() {
    // TODO
  }
}

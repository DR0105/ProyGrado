import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-historia-clinica',
  templateUrl: './historia-clinica.component.html',
  styleUrls: ['./historia-clinica.component.css']
})
export class HistoriaClinicaComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  especialista = new FormGroup({
    codigo: new FormControl(null, Validators.required),
  });
  // Datos básicos
  datosBasicos: FormGroup = this.fb.group({
    vinculacion: ['', Validators.required],
    tipo: ['', Validators.required],
    situacionAcademica: ['', Validators.required],
  })
  // Medicina General
  nuevoAnalisis: FormControl = this.fb.control('', Validators.required);
  nuevaEvolucion: FormControl = this.fb.control('', Validators.required);
  medicinaForm: FormGroup = this.fb.group({
    motivoConsulta: ['', Validators.required],
    patologicos: ['', Validators.required],
    hospitalarios: ['', Validators.required],
    traumaticos: ['', Validators.required],
    quirurgicos: ['', Validators.required],
    genitoUrinarios: ['', Validators.required],
    alergicos: ['', Validators.required],
    farmacologicos: ['', Validators.required],
    familiares: ['', Validators.required],
    ocupacionales: ['', Validators.required],
    menarquia: ['', Validators.required],
    fur: ['', Validators.required],
    ciclos: ['', Validators.required],
    ias: ['', Validators.required],
    compañeros: ['', Validators.required],
    fo: ['', Validators.required],
    fup: ['', Validators.required],
    pp: ['', Validators.required],
    fuccv: ['', Validators.required],
    resultadoccv: ['', Validators.required],
    examenSeno: ['', Validators.required],
    resultadoSeno: ['', Validators.required],
    piel: ['', Validators.required],
    colageno: ['', Validators.required],
    linfatico: ['', Validators.required],
    oseo: ['', Validators.required],
    muscular: ['', Validators.required],
    articular: ['', Validators.required],
    digestivo: ['', Validators.required],
    urinario: ['', Validators.required],
    sentidos: ['', Validators.required],
    cardioVascular: ['', Validators.required],
    neurologico: ['', Validators.required],
    respiratorio: ['', Validators.required],
    examenes: ['', Validators.required],
    ta: ['', Validators.required],
    fc: ['', Validators.required],
    fr: ['', Validators.required],
    sao2: ['', Validators.required],
    peso: ['', Validators.required],
    imc: ['', Validators.required],
    talla: ['', Validators.required],
    tc: ['', Validators.required],
    estadoGeneral: ['', Validators.required],
    cabezaYCuello: ['', Validators.required],
    orl: ['', Validators.required],
    ojos: ['', Validators.required],
    torax: ['', Validators.required],
    ruidosRespiratorios: ['', Validators.required],
    ruidosCardiacos: ['', Validators.required],
    abdomen: ['', Validators.required],
    neurologicoE: ['', Validators.required],
    genital: ['', Validators.required],
    extremidades: ['', Validators.required],
    id1: ['', Validators.required],
    id2: ['', Validators.required],
    id3: ['', Validators.required],
    id4: ['', Validators.required],
    analisis: this.fb.array([]),
    evolucion: this.fb.array([]),
    planDeManejo: ['', Validators.required],
  });
  // Fisioterapia
  nuevaEvolucionFisio: FormControl = this.fb.control('', Validators.required);
  fisioterapiaForm: FormGroup = this.fb.group({
    motivoConsultaFisio: ['', Validators.required],
    valoracion: ['', Validators.required],
    planDeManejoFisio: ['', Validators.required],
    evolucionFisio: this.fb.array([]),
  })
  // Odontologoía
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
    tp: ['', Validators.required],
    tpt: ['', Validators.required],
    coagulacion: ['', Validators.required],
    sangria: ['', Validators.required],
    otra: ['', Validators.required],
    evolucionOdonto: this.fb.array([]),

  })
  // Psicología
  nuevaEvolucionPsico: FormControl = this.fb.control('', Validators.required);
  psicologiaForm: FormGroup = this.fb.group({
    viveCon: ['', Validators.required],
    difusos: ['', Validators.required],
    claros: ['', Validators.required],
    rigidos: ['', Validators.required],
    actualesFamiliares: ['', Validators.required],
    pasadosFamiliares: ['', Validators.required],
    actualesPersonales: ['', Validators.required],
    pasadosPersonales: ['', Validators.required],
    figurasDeAutoridad: ['', Validators.required],
    pares: ['', Validators.required],
    pareja: ['', Validators.required],
    relacionesSexuales: ['', Validators.required],
    satisfaccion: ['', Validators.required],
    metodoProteccion: ['', Validators.required],
    orientacionSexual: ['', Validators.required],
    economicos: ['', Validators.required],
    judiciales: ['', Validators.required],
    drogas: ['', Validators.required],
    motivoConsultaPsico: ['', Validators.required],
    problematicaActual: ['', Validators.required],
    estiloAfrontamiento: ['', Validators.required],
    comportamientoDuranteConsulta: ['', Validators.required],
    hipotesis: ['', Validators.required],
    acuerdos: ['', Validators.required],
    evolucionPsico: this.fb.array([]),
  })
  prueba = {
    nombre: 'Benito Suárez', codigo: 20212021021, documento: 2021202120, eps: 'Famisanar', fechaDeNacimiento: new Date(),
    lugarDeNacimiento: 'Bogotá', edad: 20, vinculacion: 'Docente', tipo: 'Otro', cualTipo: 'xxxxxx', dependencia: null, procedenteDe: null,
    facultad: 'Ingeniería', carrera: 'Ingeniería de Sistemas', direccion: 'Calle falsa 123', telefono: '2021202', contactoEmergencia: 'María Camelo',
    parentesco: 'Madre', direccionContacto: 'Calle falsa 123', telefonoContacto: '2021202', situacionAcademica: 'Otro', cualSituacion: 'xxxxxx'
  }
  pruebaEspecialista = {
    nombre: 'NOMBRE1 APELLIDO1',
    especialidad: 'ESPECIALIDAD 1',
  }
  ngOnInit() {
  }
  get analisisArr() {
    return this.medicinaForm.get('analisis') as FormArray;
  }
  get evolucionArr() {
    return this.medicinaForm.get('evolucion') as FormArray;
  }
  get evolucionFisioArr() {
    return this.fisioterapiaForm.get('evolucionFisio') as FormArray;
  }
  get evolucionPsicoArr() {
    return this.psicologiaForm.get('evolucionPsico') as FormArray;
  }
  get evolucionOdontoArr() {
    return this.odontologiaForm.get('evolucionOdonto') as FormArray;
  }
  agregarAnalisis() {
    if (this.nuevoAnalisis.invalid) {
      return
    }
    this.analisisArr.push(new FormControl(this.nuevoAnalisis.value, Validators.required));
    this.nuevoAnalisis.reset();
  }
  agregarEvolucion() {
    if (this.nuevaEvolucion.invalid) {
      return
    }
    this.evolucionArr.push(new FormControl(this.nuevaEvolucion.value, Validators.required));
    this.nuevaEvolucion.reset();
  }
  agregarEvolucionFisio() {
    if (this.nuevaEvolucionFisio.invalid) {
      return
    }
    this.evolucionFisioArr.push(new FormControl(this.nuevaEvolucionFisio.value, Validators.required));
    this.nuevaEvolucionFisio.reset();
  }
  agregarEvolucionPsico() {
    if (this.nuevaEvolucionPsico.invalid) {
      return
    }
    this.evolucionPsicoArr.push(new FormControl(this.nuevaEvolucionPsico.value, Validators.required));
    this.nuevaEvolucionPsico.reset();
  }
  agregarEvolucionOdonto() {
    if (this.nuevaEvolucionOdonto.invalid) {
      return
    }
    this.evolucionOdontoArr.push(new FormControl(this.nuevaEvolucionOdonto.value, Validators.required));
    this.nuevaEvolucionOdonto.reset();
  }
  borrarAnalisis(i: number) {
    this.analisisArr.removeAt(i);
  }
  borrarEvolucion(i: number) {
    this.evolucionArr.removeAt(i);
  }
  borrarEvolucionFisio(i: number) {
    this.evolucionFisioArr.removeAt(i);
  }
  borrarEvolucionPsico(i: number) {
    this.evolucionPsicoArr.removeAt(i);
  }
  borrarEvolucionOdonto(i: number) {
    this.evolucionOdontoArr.removeAt(i);
  }
  buscarEspecialista() {
    // TODO
  }
}

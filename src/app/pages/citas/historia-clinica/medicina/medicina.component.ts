import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-medicina',
  templateUrl: './medicina.component.html',
  styleUrls: ['../historia-clinica.component.css']
})
export class MedicinaComponent implements OnInit {
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
  pruebaEspecialista = {
    nombre: 'NOMBRE1 APELLIDO1',
    especialidad: 'ESPECIALIDAD 1',
  }
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
  }
  get analisisArr() {
    return this.medicinaForm.get('analisis') as FormArray;
  }
  get evolucionArr() {
    return this.medicinaForm.get('evolucion') as FormArray;
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
  borrarAnalisis(i: number) {
    this.analisisArr.removeAt(i);
  }
  borrarEvolucion(i: number) {
    this.evolucionArr.removeAt(i);
  }
  buscarEspecialista() {
    // TODO
  }
}

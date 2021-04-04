import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'ngx-psicologia',
  templateUrl: './psicologia.component.html',
  styleUrls: ['../historia-clinica.component.css']
})
export class PsicologiaComponent implements OnInit {
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
  pruebaEspecialista = {
    nombre: 'NOMBRE1 APELLIDO1',
    especialidad: 'ESPECIALIDAD 1',
  }
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
  }
  get evolucionPsicoArr() {
    return this.psicologiaForm.get('evolucionPsico') as FormArray;
  }
  agregarEvolucionPsico() {
    if (this.nuevaEvolucionPsico.invalid) {
      return
    }
    this.evolucionPsicoArr.push(new FormControl(this.nuevaEvolucionPsico.value, Validators.required));
    this.nuevaEvolucionPsico.reset();
  }
  borrarEvolucionPsico(i: number) {
    this.evolucionPsicoArr.removeAt(i);
  }
  buscarEspecialista() {
    // TODO
  }
}

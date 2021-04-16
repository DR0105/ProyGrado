import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EstudiantesService } from '../../../../shared/services/estudiantes.service';
@Component({
  selector: 'ngx-datos-basicos',
  templateUrl: './datos-basicos.component.html',
  styleUrls: ['../historia-clinica.component.css']
})
export class DatosBasicosComponent implements OnInit {
  edad: number;
  codigo!: string;
  datosBasicos: FormGroup = this.fb.group({
    vinculacion: ['', Validators.required],
    tipo: ['', Validators.required],
    situacionAcademica: ['', Validators.required],
  })
  constructor(private fb: FormBuilder, private estudianteService: EstudiantesService,private aRoute: ActivatedRoute) { }
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
  ngOnInit(): void {
    this.codigo=this.aRoute.snapshot.paramMap.get('codigo');
    console.log(this.codigo);
    this.estudianteService.getInfoPorCodigo(this.codigo).subscribe((data)=>{
      console.log(data);
    });
    
   }

}

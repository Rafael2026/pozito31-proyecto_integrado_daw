import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { LoginService } from '../../servicios/login.service';
import { Usuarios } from '../../interfaces/usuarios';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.sass']
})
export class RegistroComponent implements OnInit {
  RegistroFormulario: FormGroup;

  constructor(
    private router: Router,
    private LoginService: LoginService,
    ) {}

  ngOnInit(): void {
    this.RegistroFormulario = new FormGroup({
      'nombre': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'apellidos': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'usuario': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ])
    });
  }

  get nombre() { return this.RegistroFormulario.get('nombre') }
  get apellidos() { return this.RegistroFormulario.get('apellidos') }
  get usuario() { return this.RegistroFormulario.get('usuario') }
  get password() { return this.RegistroFormulario.get('password') }

  onSubmit() {   
    let model: Usuarios = {
      id_usuario: null,
      nombre: this.RegistroFormulario.get('nombre').value,
      apellidos: this.RegistroFormulario.get('apellidos').value,
      fecha_alta: '2020-02-02',
      usuario: this.RegistroFormulario.get('usuario').value,
      password: this.RegistroFormulario.get('password').value
    }

 this.LoginService.register(model).subscribe((val) => {
  console.log("usuario creado correctamente");
  }, error=>{
    console.log(error);
  }) 
  }

}

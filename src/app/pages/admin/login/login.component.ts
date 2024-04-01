import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DefautLoginLayoutComponent } from '../../../components/defaut-login-layout/defaut-login-layout.component';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { LoginService } from '../../../services/login.service';


interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefautLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
    console.log('Dentro do Submit', this.loginForm.value)
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.success("Deu bom"),
      error: () => this.toastService.error("Deu ruim")
    })

  }

  navigate() {
    console.log("Dentro do Navigate")
    this.router.navigate(["/signup"])
  }
}

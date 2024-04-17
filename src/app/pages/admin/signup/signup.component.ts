import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DefautLoginLayoutComponent } from '../../../components/defaut-login-layout/defaut-login-layout.component';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { LoginService } from '../../../services/login.service';
import { UsersService } from '../../../services/users.service';

interface SignupForm {
  name: FormControl,
  login: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefautLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  signupForm!: FormGroup<SignupForm>;

  constructor(
    private router: Router,
    private usersService: UsersService,
    private toastService: ToastrService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit() {
    console.log('Dentro do Submit', this.signupForm.value)
    this.usersService.signup(this.signupForm.value.name, this.signupForm.value.login, this.signupForm.value.password).subscribe({
      next: () => {
        this.toastService.success('Cadastro Realizado com sucesso!')

        setTimeout(() => {
          this.router.navigate(["/layout"])
        }, 1000);
      },
      error: () => this.toastService.error("Erro inesperado, tente novamente mais tarde")
    })
  }

  navigate() {
    this.router.navigate(["login"])
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DefautLoginLayoutComponent } from '../../../components/defaut-login-layout/defaut-login-layout.component';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { LoginService } from '../../../services/login.service';


interface LoginForm {
  login: FormControl,
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
    private toastService: ToastrService,
  ) {

    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

  }

  // ngOnInit() {

  // }

  submit() {
    console.log('Dentro do Submit', this.loginForm.value)
    this.loginService.login(this.loginForm.value.login!, this.loginForm.value.password!).subscribe({
      next: () => {
        const authToken = localStorage.getItem('auth-token');
        this.toastService.success("Bem vido ao Espaço Desapego!");
        console.log("Dentro do submit", authToken);
        // this.toastService.success("Seu tokem é: " + authToken?.toString)
        setTimeout(() => {
          this.router.navigate(["/layout"])
        }, 1000);

      },
      error: () => this.toastService.error("Não foi possível Fazer Login. Confira seus dados ou Faça o seu registro")
    })

  }

  navigate() {
    this.router.navigate(["/signup"])
  }
}

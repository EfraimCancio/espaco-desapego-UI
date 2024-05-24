import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})

export class UsersTableComponent {

  arrayUsers: any;

  constructor(
    private userService: UsersService
  ) { };

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers = () => {
    console.log('listar Categoras! ')
    this.userService.getAllUsers().subscribe({
      next: res => {
        this.arrayUsers = res
        console.log('Lista de Usuarios: ', this.arrayUsers);
      },
      error: err => {
        console.log('Erro na requisição', err);
      }
    })
  };

  registerUser = () => {
    console.log('registrar usuario');
  };
}

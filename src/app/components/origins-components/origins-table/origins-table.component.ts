import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { OriginsService } from '../../../services/origins.service';

@Component({
  selector: 'app-origins-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './origins-table.component.html',
  styleUrl: './origins-table.component.css'
})

export class OriginsTableComponent {

  arrayActiveOrigins: any;

  constructor(
    private originsService: OriginsService
  ) { };

  ngOnInit(): void {
    this.listActiveOrigins();
  }

  listActiveOrigins = () => {
    console.log('listar Origens! ')
    this.originsService.getActiveOrigins().subscribe({
      next: res => {
        this.arrayActiveOrigins = res
        console.log('Lista de tamanhos ativas', this.arrayActiveOrigins
        );
      },
      error: err => {
        console.log('Erro na requisição', err);
      }
    })
  };
  registerOrigin = () => {
    console.log('registrar Origem');
  };
}

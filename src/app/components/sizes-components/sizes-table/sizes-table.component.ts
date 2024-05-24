import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SizesService } from '../../../services/sizes.service';

@Component({
  selector: 'app-sizes-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './sizes-table.component.html',
  styleUrl: './sizes-table.component.css'
})
export class SizesTableComponent {
  arrayActiveSizes: any;

  constructor(
    private sisesService: SizesService,
  ) { };

  ngOnInit(): void {
    this.listActiveSizes();
  }

  listActiveSizes = () => {
    console.log('listar Categoras! ')
    this.sisesService.getActiveSizes().subscribe({
      next: res => {
        this.arrayActiveSizes = res
        console.log('Lista de tamanhos ativas', this.arrayActiveSizes
        );
      },
      error: err => {
        console.log('Erro na requisição', err);
      }
    })
  };

  registerSize = () => {
    console.log('Lista de Sizes: ', this.arrayActiveSizes)
  };
}

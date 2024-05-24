import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { BrandsService } from '../../../services/brands.service';

@Component({
  selector: 'app-brands-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './brands-table.component.html',
  styleUrl: './brands-table.component.css'
})

export class BrandsTableComponent {

  arrayActiveBrands: any;

  constructor(
    private brandsService: BrandsService,
  ) { };

  ngOnInit(): void {
    this.listActiveCategories();
  }

  listActiveCategories = () => {
    console.log('listar Categoras! ')
    this.brandsService.getActiveBrands().subscribe({
      next: res => {
        this.arrayActiveBrands = res
        console.log('Lista de categorias ativas', this.arrayActiveBrands);
      },
      error: err => {
        console.log('Erro na requisição', err);
      }
    })
  };

  registerBrand = () => {
    console.log('Lista de Marcas', this.arrayActiveBrands)
  };
}

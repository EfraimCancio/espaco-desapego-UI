import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-proucts-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './proucts-table.component.html',
  styleUrl: './proucts-table.component.css'
})

export class ProuctsTableComponent {

  arrayActiveProducts: any;

  constructor(
    private productsService: ProductsService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.listActiveProducts();
  }

  listActiveProducts = () => {
    console.log('listActiveProducts! ')

    this.productsService.getActiveProducts().subscribe({
      next: res => {
        this.arrayActiveProducts = res
        console.log('Lista de produtos ativos', this.arrayActiveProducts);
      },
      error: err => {
        console.log('Erro na requisição', err);
      }
    })
  };
}

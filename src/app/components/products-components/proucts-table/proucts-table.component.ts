import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-proucts-table',
  standalone: true,
  imports: [],
  templateUrl: './proucts-table.component.html',
  styleUrl: './proucts-table.component.css'
})

export class ProuctsTableComponent {

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
        console.log('Lista de produtos ativos', res);
      },
      error: err => {
        console.log('Erro na requisição', err);
      }
    })
  };
}

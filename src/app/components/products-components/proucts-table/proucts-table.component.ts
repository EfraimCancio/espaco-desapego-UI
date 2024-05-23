import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-proucts-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proucts-table.component.html',
  styleUrl: './proucts-table.component.css'
})

export class ProuctsTableComponent {

  arrayActiveProducts: any;

  lista: any = [
    {
      "id": 6,
      "descProduto": "camisa teste",
      "idCategoria": 1,
      "idMarca": 2,
      "idTamanho": null,
      "idOrigem": 5,
      "vlCusto": 70.0,
      "vlVenda": 80.0,
      "dtEntrada": "2024-02-16",
      "dtSaida": null,
      "status": true
    },
    {
      "id": 8,
      "descProduto": "Teste response",
      "idCategoria": 1,
      "idMarca": 2,
      "idTamanho": 4,
      "idOrigem": 5,
      "vlCusto": 70.0,
      "vlVenda": null,
      "dtEntrada": "2024-03-14",
      "dtSaida": null,
      "status": true
    },
    {
      "id": 9,
      "descProduto": "Teste Final",
      "idCategoria": 2,
      "idMarca": 3,
      "idTamanho": 6,
      "idOrigem": 5,
      "vlCusto": 70.0,
      "vlVenda": null,
      "dtEntrada": "2024-03-25",
      "dtSaida": null,
      "status": true
    }
  ];

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

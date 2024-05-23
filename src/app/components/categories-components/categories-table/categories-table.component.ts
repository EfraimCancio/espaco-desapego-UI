import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-categories-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule
  ],
  templateUrl: './categories-table.component.html',
  styleUrl: './categories-table.component.css'
})

export class CategoriesTableComponent {

  arrayActiveCategory: any;

  constructor(
    private categoriesService: CategoryService
  ) { }

  ngOnInit(): void {
    this.listActiveCategories();
  }

  listActiveCategories = () => {
    console.log('listar Categoras! ')

    this.categoriesService.getActiveCategories().subscribe({
      next: res => {
        this.arrayActiveCategory = res
        console.log('Lista de categorias ativas', this.arrayActiveCategory);
      },
      error: err => {
        console.log('Erro na requisição', err);
      }
    })
  };

  registerCategory = () => {
    console.log('Registrar Categorias');
  };
}

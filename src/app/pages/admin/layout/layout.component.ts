import { Component } from '@angular/core';
import { BrandsTableComponent } from "../../../components/brands-components/brands-table/brands-table.component";
import { CategoriesTableComponent } from "../../../components/categories-components/categories-table/categories-table.component";
import { DashboardMenuComponent } from "../../../components/dashboard-menu/dashboard-menu.component";
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { OriginsTableComponent } from "../../../components/origins-components/origins-table/origins-table.component";
import { ProuctsTableComponent } from "../../../components/products-components/proucts-table/proucts-table.component";
import { SizesTableComponent } from "../../../components/sizes-components/sizes-table/sizes-table.component";
import { UsersTableComponent } from "../../../components/users-components/users-table/users-table.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  imports: [DashboardMenuComponent, NavbarComponent, ProuctsTableComponent, CategoriesTableComponent, BrandsTableComponent, SizesTableComponent, OriginsTableComponent, UsersTableComponent]
})
export class LayoutComponent {
  tableChoice: string = '';
  onChildEvent(event: string) {
    this.tableChoice = event
    console.log('Evento recebido:', this.tableChoice);
  }
}

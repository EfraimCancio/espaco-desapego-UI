import { Component } from '@angular/core';
import { DashboardMenuComponent } from "../../../components/dashboard-menu/dashboard-menu.component";
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { ProuctsTableComponent } from "../../../components/products-components/proucts-table/proucts-table.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  imports: [DashboardMenuComponent, NavbarComponent, ProuctsTableComponent]
})
export class LayoutComponent {

}

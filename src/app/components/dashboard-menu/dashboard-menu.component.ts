import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-menu.component.html',
  styleUrl: './dashboard-menu.component.css'
})

export class DashboardMenuComponent {

  @Input() showTable: string = "";
  @Output() onClickEvent = new EventEmitter<string>();

  activeChoice: string = 'products';

  onClick = (table: string) => {
    this.activeChoice = table;
    this.showTable = table;
    this.onClickEvent.emit(this.showTable);
    console.log('PAssou o evento: ', this.showTable);
  };

  // activeProducts = () => {
  //   this.activeChoice = 'products';
  //   this.showTable = 'products';
  // }

  // activeCategory = () => {
  //   this.activeChoice = 'categories';
  //   this.showTable = 'categories';
  // };

  // activeBrands = () => {
  //   this.activeChoice = 'brands';
  //   this.showTable = 'brands';
  // };

  // activeSizes = () => {
  //   this.activeChoice = 'sizes';
  //   this.showTable = 'sizes';
  // };

  // activeOrigins = () => {
  //   this.activeChoice = 'origins';
  //   this.showTable = 'origins';
  // };

  // activeUsers = () => {
  //   this.activeChoice = 'users';
  //   this.showTable = 'users';
  // };
}

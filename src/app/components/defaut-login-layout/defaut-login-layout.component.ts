import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-defaut-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './defaut-login-layout.component.html',
  styleUrl: './defaut-login-layout.component.css'
})
export class DefautLoginLayoutComponent {

  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";

}
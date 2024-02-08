import { Component } from '@angular/core';
import {  RouterLink, RouterLinkActive } from '@angular/router';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MdbCollapseModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}

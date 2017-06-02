import { Component } from '@angular/core';

import {  } from '../routes/';

@Component({
  selector: 'route-expenses-config',
  templateUrl: './route-expenses-config.component.html',
  styleUrls: [ './route-expenses-config.component.css' ]
})
export class RouteExpensesConfigComponent {
  
  public kmPrice: number;
  public flatRate: number;
}
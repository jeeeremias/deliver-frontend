import { Component } from "@angular/core";
import { Subscription }   from 'rxjs/Subscription';

import { RouteInformation } from '../routes/route-information';
import { RouteService } from '../route.service';

@Component({
  selector: 'route-information',
  templateUrl: './route-information.component.html',
  styleUrls: [ './route-information.component.css' ]
})
export class RouteInformationComponent {

  private routeInfo: RouteInformation = new RouteInformation();
  subscription: Subscription;

  constructor(
    private routeService: RouteService
  ) {
    this.subscription = routeService.newRoute$.subscribe(
      r => this.routeInfo = r
    )
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
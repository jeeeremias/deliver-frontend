import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { RouteInformation } from './routes/route-information';

@Injectable()
export class RouteService {
    
    private routeInformationSource: Subject<RouteInformation> = new Subject<RouteInformation>();

    newRoute$ = this.routeInformationSource.asObservable();

    sendRouteInformation(route: RouteInformation): void {
        this.routeInformationSource.next(route);
    }
}
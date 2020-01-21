import { NgModule } from "@angular/core";

// Modulos
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';




@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,

    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    imports:[
        SharedModule,
        FormsModule,
        ChartsModule,
        PAGES_ROUTES
    ]

})

export class PageModule {}
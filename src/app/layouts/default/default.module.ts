import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from './default.component';
import {DashboardComponent} from 'src/app/modules/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {PostsComponent} from "../../modules/posts/posts.component";
import {SharedModule} from "../../shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
    declarations: [
        DefaultComponent,
        DashboardComponent,
        PostsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        MatSidenavModule
    ]
})
export class DefaultModule {
}

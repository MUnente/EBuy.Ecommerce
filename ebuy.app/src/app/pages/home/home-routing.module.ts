import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home-component/home.component";

const homeRouterConfig: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }
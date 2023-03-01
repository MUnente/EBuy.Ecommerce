import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found-component/page-not-found.component";

const pageNotFoundRouterConfig: Routes = [
    { path: '', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(pageNotFoundRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class PageNotFoundRoutingModule {}
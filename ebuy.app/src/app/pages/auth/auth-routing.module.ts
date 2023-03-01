import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth-component/auth.component";

const authRouterConfig: Routes = [
    { path: '', component: AuthComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(authRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {}
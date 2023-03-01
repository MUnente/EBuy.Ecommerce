import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";

const authenticationRouterConfig: Routes = [
    { path: '', component: AuthComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(authenticationRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthenticationRoutingModule {}
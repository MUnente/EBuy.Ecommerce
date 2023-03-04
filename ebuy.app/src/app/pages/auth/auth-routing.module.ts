import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login-component/login.component";
import { RegisterComponent } from "./register-component/register.component";

const authRouterConfig: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(authRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }
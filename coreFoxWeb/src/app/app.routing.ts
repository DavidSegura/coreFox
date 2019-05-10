import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/index";

const appRoutes:Routes = [
    { path: "", component: HomeComponent }
];

export const appRoutingProvider:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { CompareComponent } from '../pages/compare/compare.component';
import { CarsDataResolveService } from '../services/cars-data-resolve.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, resolve: { data: CarsDataResolveService}},
  { path: 'detail', component: DetailComponent },
  { path: 'compare', component: CompareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

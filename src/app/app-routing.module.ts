import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppDownloadComponent } from './app-download/app-download.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'appdownload', component: AppDownloadComponent },
  { path: '*', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

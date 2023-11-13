import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/Home/Home.component';
import { SafariComponent } from './page/safari/safari.component';
import { RegisterComponent } from './components/Register/Register.component';
import { Support_pageComponent } from './page/Support_page/Support_page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'safari', component: SafariComponent },
  { path: 'rejester', component: RegisterComponent },
  { path: 'suport', component: Support_pageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

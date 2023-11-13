import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './page/Home/Home.component';
import { Product_boxComponent } from './components/product_box/product_box.component';
import { Oder_serviceComponent } from './components/Oder_service/Oder_service.component';
import { BreakingNewsComponent } from './components/breakingNews/breakingNews.component';
import { App_alibabComponent } from './components/App_alibab/App_alibab.component';
import { Question_youComponent } from './components/question_you/question_you.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DiscriptionAlibabComponent } from './components/discriptionAlibab/discriptionAlibab.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterseviceComponent } from './components/Footersevice/Footersevice.component';
import { Support_pageComponent } from './page/Support_page/Support_page.component';
import { Main_suportComponent } from './components/main_suport/main_suport.component';
import { Main_suport_downComponent } from './components/main_suport_down/main_suport_down.component';
import { Suport_quickComponent } from './components/suport_quick/suport_quick.component';
import { Suport_tour_guideComponent } from './components/suport_tour_guide/suport_tour_guide.component';
import { SafariComponent } from './page/safari/safari.component';
import { RegisterComponent } from './components/Register/Register.component';
import { Register__subComponent } from './page/register__sub/register__sub.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Product_boxComponent,
    Oder_serviceComponent,
    BreakingNewsComponent,
    App_alibabComponent,
    Question_youComponent,
    DiscriptionAlibabComponent,
    FooterComponent,
    FooterseviceComponent,
    Support_pageComponent,
    Main_suportComponent,
    Main_suport_downComponent,
    Suport_quickComponent,
    Suport_tour_guideComponent,
    SafariComponent,
    RegisterComponent,
    Register__subComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

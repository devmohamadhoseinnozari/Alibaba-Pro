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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

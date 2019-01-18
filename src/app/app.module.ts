import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CompareComponent } from './pages/compare/compare.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarComponent } from './components/car/car.component';
import { ImageComponent } from './components/image/image.component';
import { MarkPipe } from './pipe/mark.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    CompareComponent,
    MenuComponent,
    CarComponent,
    ImageComponent,
    MarkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

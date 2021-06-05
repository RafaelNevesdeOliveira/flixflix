import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ApiTestsComponent } from './pages/api-tests/api-tests.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ObjToArrayPipe } from './pages/api-tests/obj-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApiTestsComponent,
    HomeComponent,
    ObjToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

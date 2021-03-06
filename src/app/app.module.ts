import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

//Router
import { APP_ROUTE } from './app.routes';

//Component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/loading/loadind.component';
import { NotFoundComponent } from './components/404/404.component';
import { ErrorComponent } from './components/error/error.component';

// Pipes
import { NoImagePipe } from './Pipes/noImage.pipe';
import { FilterList } from './Pipes/filterList.pipe';
import { UrlPipe } from './Pipes/url.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    LoadingComponent,
    NotFoundComponent,
    ErrorComponent,
    NoImagePipe,
    FilterList,
    UrlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTE, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

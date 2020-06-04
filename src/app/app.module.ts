import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/shared/menu/menu.component';
import { MainComponent } from './components/main/main.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import { ConnexionComponent } from './components/pages/connexion/connexion.component';
import { InscriptionComponent } from './components/pages/inscription/inscription.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { CommandeComponent } from './components/pages/commande/commande.component';
import { CookieService } from 'ngx-cookie-service';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    ConnexionComponent,
    InscriptionComponent,
    CommandeComponent

  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        NgxSpinnerModule,
        AppRoutingModule,
        HttpClientModule,
        MatFormFieldModule,


    ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

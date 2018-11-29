import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from '../directive/dropdown';
import { ShopComponent } from './shop/shop.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EulaComponent } from './eula/eula.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from "../service/auth";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ShopComponent,
    AboutUsComponent,
    ContactsComponent,
    EulaComponent,
    DataProtectionComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    UserService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

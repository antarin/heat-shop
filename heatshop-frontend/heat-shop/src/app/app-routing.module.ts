import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { EulaComponent } from './eula/eula.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'shop', component: ShopComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'data-protection', component: DataProtectionComponent},
  {path: 'eula', component: EulaComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

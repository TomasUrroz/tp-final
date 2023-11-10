import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { NavBarComponent } from './Components/Shared/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { LoginComponent } from './Components/login-Componentes/login/login.component';
import { RegistrarUsuarioComponent } from './Components/login-Componentes/registrar-usuario/registrar-usuario.component';
import { RecuperarPasswordComponent } from './Components/login-Componentes/recuperar-password/recuperar-password.component';
import { VerificarCorreoComponent } from './Components/login-Componentes/verificar-correo/verificar-correo.component';
import { SpinnerComponent } from './Components/Shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    ProfilePageComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    RecuperarPasswordComponent,
    VerificarCorreoComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

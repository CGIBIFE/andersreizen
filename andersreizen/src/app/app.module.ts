import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ButtonComponent } from './button/button.component';
import { SeparatorComponent } from './separator/separator.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PreLoginComponent } from './pre-login/pre-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { IntroComponent } from './intro/intro.component';
import { ContentPanelComponent } from './content-panel/content-panel.component';
import { TextareaComponent } from './textarea/textarea.component';
import { DataInvoerComponent } from './data-invoer/data-invoer.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { PanelComponent } from './panel/panel.component';
import { LineComponent } from './line/line.component';


@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    ButtonComponent,
    SeparatorComponent,
    LoginComponent,
    SignupComponent,
    PreLoginComponent,
    DashboardComponent,
    LeftNavComponent,
    IntroComponent,
    ContentPanelComponent,
    TextareaComponent,
    DataInvoerComponent,
    TabPanelComponent,
    PanelComponent,
    LineComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

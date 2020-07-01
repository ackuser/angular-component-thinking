import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BorderDirective } from './directives/border.directive';

@NgModule({
   imports: [
      BrowserModule,
      FormsModule
   ],
   declarations: [
      AppComponent,
      HeaderComponent,
      BorderDirective
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

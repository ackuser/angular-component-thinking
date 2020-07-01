import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BorderDirective } from './directives/border.directive';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { ScrollbarDetailComponent } from './scrollbar-detail/scrollbar-detail.component';

@NgModule({
   imports: [
      BrowserModule,
      FormsModule
   ],
   declarations: [
      AppComponent,
      HeaderComponent,
      BorderDirective,
      ScrollbarComponent,
      ScrollbarDetailComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

import { TooltipComponent } from './components/tooltip/tooltip.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BorderDirective } from './directives/border.directive';
import { HeaderComponent } from './components/header/header.component';
import { ScrollbarComponent } from './components/scrollbar/scrollbar.component';
import { ScrollbarDetailComponent } from './components/scrollbar-detail/scrollbar-detail.component';

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
      ScrollbarDetailComponent,
      TooltipComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

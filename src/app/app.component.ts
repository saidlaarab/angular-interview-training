import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, registerLocaleData, UpperCasePipe } from '@angular/common';
import { Component, inject, LOCALE_ID } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import localeFr from '@angular/common/locales/fr';
import { CustomCurrencyPipe } from './custom-currency.pipe';
import { TemplateDrivenForm } from './components/template-driven-form/template-driven-form.component';
import { PipeTrainingComponent } from './components/pipe-training/pipe-training.component';
import { FormsModule } from '@angular/forms';
import { ParsingTrainingComponent } from "./components/parsing-training/parsing-training.component";
import { HighlightDirective } from './components/directive-training/directives/highlight.directive';
import { DirectiveTrainingComponent } from './components/directive-training/directive-training.component';
import { DataBindingTrainingComponent } from './components/data-binding-training/data-binding-training.component';
import { RoutingTrainingComponent } from './components/routing-training/routing-training.component';
import { ReactiveFormTrainingComponent } from "./components/reactive-form-training/reactive-form-training.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomCurrencyPipe, TemplateDrivenForm, PipeTrainingComponent, ParsingTrainingComponent, DirectiveTrainingComponent, DataBindingTrainingComponent,
    RoutingTrainingComponent, RouterLink, RouterLinkActive, RouterOutlet, ReactiveFormTrainingComponent],
  providers: [DecimalPipe, {provide: LOCALE_ID, useValue: 'fr'}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Training';
  celsius: number | null = null; // (f - 32) * 5 / 9
  fernheit: number | null = null; // c * 9 / 5 + 32


  randomVal: number = 0;
  intNumber:number | null = 0;

  constructor(private decimalPipe:DecimalPipe){
    registerLocaleData(localeFr);
    
  }

  onCelsiusTyping(val:number){
    this.fernheit = val !== null ? this.transformNumber((val * 9 / 5) + 32) : null;
  }

  onFernheightTyping(val:number){
    this.celsius = val !== null ? this.transformNumber((val - 32) * 5/9) : null;

  }

  private transformNumber(value: number | null): number | null{
    const newNumberStr = this.decimalPipe.transform(value, '2.2-3', 'en-US');
    console.log("new string number : ", newNumberStr);
    return newNumberStr !== null ? parseFloat(newNumberStr) : null;
  }

  onRandowValTyping($event: any){
    const typedNumer = $event.target.value;
    this.randomVal = typedNumer != null ? parseFloat(typedNumer) : 0;
  }

}

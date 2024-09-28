import { Component } from '@angular/core';
import { HighlightDirective } from './directives/highlight.directive';

@Component({
  selector: 'app-directive-training',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './directive-training.component.html',
  styleUrl: './directive-training.component.css'
})
export class DirectiveTrainingComponent {

}

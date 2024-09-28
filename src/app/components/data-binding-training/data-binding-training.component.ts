import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding-training',
  standalone: true,
  imports: [],
  templateUrl: './data-binding-training.component.html',
  styleUrl: './data-binding-training.component.css'
})
export class DataBindingTrainingComponent {
  @Input() myValue!: string;

  onMouseEnter(){
    console.log('Mouse enter into block')
  }
}

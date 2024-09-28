import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second-destination',
  standalone: true,
  imports: [],
  templateUrl: './second-destination.component.html',
  styleUrl: './second-destination.component.css'
})
export class SecondDestinationComponent {
  @Input() id!: string;
}

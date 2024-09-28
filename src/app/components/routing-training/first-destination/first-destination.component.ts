import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';

@Component({
  selector: 'app-first-destination',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './first-destination.component.html',
  styleUrl: './first-destination.component.css'
})
export class FirstDestinationComponent {
  @Input('id') idString!: string;
}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FirstDestinationComponent } from './first-destination/first-destination.component';

@Component({
  selector: 'app-routing-training',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './routing-training.component.html',
  styleUrl: './routing-training.component.css'
})
export class RoutingTrainingComponent {

}

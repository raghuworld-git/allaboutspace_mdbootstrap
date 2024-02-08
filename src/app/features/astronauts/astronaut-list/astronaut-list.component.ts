import { Component } from '@angular/core';

@Component({
  selector: 'app-astronaut-list',
  standalone: true,
  imports: [],
  templateUrl: './astronaut-list.component.html',
  styleUrl: './astronaut-list.component.scss'
})
export class AstronautListComponent {
  sampleImage : string = 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20231220102117.png';
}

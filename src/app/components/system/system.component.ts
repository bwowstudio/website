import { Component } from '@angular/core';
import { ResolutionService } from 'src/app/services/resolution.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent {
  constructor(public resolutionService: ResolutionService) {}
}

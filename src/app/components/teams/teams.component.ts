import { Component } from '@angular/core';
import { ResolutionService } from 'src/app/services/resolution.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  constructor(public resolutionService: ResolutionService) {}
}

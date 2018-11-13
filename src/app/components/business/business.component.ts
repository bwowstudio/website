import { Component } from '@angular/core';
import { ResolutionService } from 'src/app/services/resolution.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})

export class BusinessComponent {
  constructor(public resolutionService: ResolutionService) {}
}

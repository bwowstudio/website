import { Component } from '@angular/core';
import { ResolutionService } from 'src/app/services/resolution.service';

@Component({
  selector: 'app-fixed-input',
  templateUrl: './fixed-input.component.html',
  styleUrls: ['./fixed-input.component.scss']
})
export class FixedInputComponent {
  constructor(
    public resolutionService: ResolutionService
  ) {}
}

import { Component } from '@angular/core';
import { ResolutionService } from 'src/app/services/resolution.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    public resolutionService: ResolutionService,
    public router: Router
  ) {}
}

import { Component, OnInit } from '@angular/core';
import { ResolutionService } from 'src/app/services/resolution.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  constructor(
    public resolutionService: ResolutionService
  ) {}

  ngOnInit() {}
}

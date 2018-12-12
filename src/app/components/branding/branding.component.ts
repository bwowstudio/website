import { Component, OnInit } from '@angular/core';
import { ResolutionService } from 'src/app/services/resolution.service';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss']
})
export class BrandingComponent implements OnInit {
  constructor(public resolutionService: ResolutionService) {}
  

  ngOnInit() {}
}

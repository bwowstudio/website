import { Component, OnInit } from '@angular/core';
import { ResolutionService } from 'src/app/services/resolution.service';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent implements OnInit {
  constructor(
    public resolutionService: ResolutionService
  ) {}
  ngOnInit() {
    console.log(this.resolutionService.getIsMobileResolution());
  }
}

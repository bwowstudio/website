import { Component, OnInit } from '@angular/core';
import { ResolutionService } from 'src/app/services/resolution.service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  constructor( 
    public resolutionService: ResolutionService,
  ) { 
   
  }

  ngOnInit() {
  }

}

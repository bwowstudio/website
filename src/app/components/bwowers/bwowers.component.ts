import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { ResolutionService } from 'src/app/services/resolution.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bwowers',
  templateUrl: './bwowers.component.html',
  styleUrls: ['./bwowers.component.scss']
})
export class BwowersComponent implements OnInit {
  constructor(
    public resolutionService: ResolutionService,
  ) {}
  ngOnInit() {}
}

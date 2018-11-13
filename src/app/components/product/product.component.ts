import { Component } from '@angular/core';
import { ResolutionService } from 'src/app/services/resolution.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(public resolutionService: ResolutionService) {}
}

import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-test-layout',
  standalone: true,
  imports: [MatSlideToggleModule],
  template: `
  <div>123123123</div>
    <mat-slide-toggle>Toggle ME!</mat-slide-toggle>
  `,
  styleUrl: './test-layout.component.css'
})
export class TestLayoutComponent {

}

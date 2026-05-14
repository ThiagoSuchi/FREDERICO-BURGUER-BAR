import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-heading.component.html',
  styles: []
})
export class SectionHeadingComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() className = '';
}

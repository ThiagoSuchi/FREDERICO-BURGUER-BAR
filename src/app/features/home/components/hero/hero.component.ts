import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent {
  scrollToMatchups() {
    const element = document.getElementById('match-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

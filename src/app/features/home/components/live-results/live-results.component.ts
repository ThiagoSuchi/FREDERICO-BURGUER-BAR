import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';

interface Result {
  name: string;
  flag: string;
  votes: number;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-live-results',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  templateUrl: './live-results.component.html',
  styles: []
})
export class LiveResultsComponent {
  results: Result[] = [
    {
      name: 'O Brabo',
      flag: '🇧🇷',
      votes: 15420,
      percentage: 65,
      color: 'bg-frederico-yellow',
    },
    {
      name: 'El Pibe',
      flag: '🇦🇷',
      votes: 8304,
      percentage: 35,
      color: 'bg-frederico-red',
    },
  ];
}

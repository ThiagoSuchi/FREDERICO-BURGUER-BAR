import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';

interface RankingItem {
  rank: number;
  name: string;
  burgerName: string;
  image: string;
  color: string;
  borderColor: string;
  height: string;
  order: number;
}

@Component({
  selector: 'app-ranking-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  templateUrl: './ranking-section.component.html',
  styles: [`
    .shadow-glow {
      text-shadow: 0 0 15px rgba(255, 214, 10, 0.6);
    }
  `]
})
export class RankingSectionComponent {
  ranking: RankingItem[] = [
    {
      rank: 2,
      name: 'Itália',
      burgerName: 'Mafia Cheese',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
      color: 'border-gray-400',
      borderColor: 'border-gray-400',
      height: 'h-64',
      order: 1
    },
    {
      rank: 1,
      name: 'Brasil',
      burgerName: 'Picanha Master',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
      color: 'border-frederico-yellow',
      borderColor: 'border-frederico-yellow',
      height: 'h-80',
      order: 2
    },
    {
      rank: 3,
      name: 'México',
      burgerName: 'Spicy Azteca',
      image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
      color: 'border-orange-600',
      borderColor: 'border-orange-600',
      height: 'h-48',
      order: 3
    },
  ];

  get sortedRanking() {
    return [...this.ranking].sort((a, b) => a.order - b.order);
  }
}

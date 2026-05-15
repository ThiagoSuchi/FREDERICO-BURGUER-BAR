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
      name: 'França',
      burgerName: 'Top 2',
      image: 'assets/images/hambgurgers/França.jpg',
      color: 'border-gray-400',
      borderColor: 'border-gray-400',
      height: 'h-64',
      order: 1
    },
    {
      rank: 1,
      name: 'Brasil',
      burgerName: 'Top 1',
      image: 'assets/images/hambgurgers/Brasil.jpeg',
      color: 'border-frederico-yellow',
      borderColor: 'border-frederico-yellow',
      height: 'h-80',
      order: 2
    },
    {
      rank: 3,
      name: 'Japão',
      burgerName: 'Top 3',
      image: 'assets/images/hambgurgers/Japao.jpeg',
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

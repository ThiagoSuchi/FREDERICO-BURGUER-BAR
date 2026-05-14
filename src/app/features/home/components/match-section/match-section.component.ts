import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { ButtonComponent } from '../../../../shared/components/ui/button/button.component';

interface Team {
  name: string;
  country: string;
  flag: string;
  img: string;
}

interface Match {
  id: number;
  team1: Team;
  team2: Team;
  status: 'live' | 'upcoming';
}

@Component({
  selector: 'app-match-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, ButtonComponent],
  templateUrl: './match-section.component.html',
  styles: []
})
export class MatchSectionComponent {
  matches: Match[] = [
    {
      id: 1,
      team1: {
        name: 'La Mamma',
        country: 'IT',
        flag: '🇮🇹',
        img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
      },
      team2: {
        name: 'Le Bleu',
        country: 'FR',
        flag: '🇫🇷',
        img: 'https://images.unsplash.com/photo-1594212691516-436f8f6c268c?auto=format&fit=crop&w=600&q=80',
      },
      status: 'live',
    },
    {
      id: 2,
      team1: {
        name: 'Blitzkrieg',
        country: 'DE',
        flag: '🇩🇪',
        img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80',
      },
      team2: {
        name: 'Toro',
        country: 'ES',
        flag: '🇪🇸',
        img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80',
      },
      status: 'upcoming',
    },
  ];
}

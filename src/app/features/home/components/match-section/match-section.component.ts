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
        name: 'Brasil',
        country: 'BR',
        flag: '🇧🇷',
        img: 'assets/images/hambgurgers/Brasil.jpeg',
      },
      team2: {
        name: 'Argentina',
        country: 'AR',
        flag: '🇦🇷',
        img: 'assets/images/hambgurgers/Argentina.jpeg',
      },
      status: 'live',
    },
    {
      id: 2,
      team1: {
        name: 'EUA',
        country: 'US',
        flag: '🇺🇸',
        img: 'assets/images/hambgurgers/Eua.jpeg',
      },
      team2: {
        name: 'Japão',
        country: 'JP',
        flag: '🇯🇵',
        img: 'assets/images/hambgurgers/Japao.jpeg',
      },
      status: 'upcoming',
    },
  ];
}

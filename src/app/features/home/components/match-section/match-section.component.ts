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

  votedState: { [matchId: number]: { team: 1 | 2; percent1: number; percent2: number } } = {};

  vote(match: Match, team: 1 | 2) {
    if (match.status !== 'live' || this.votedState[match.id]) return;
    
    // Animação/sensação pseudo-aleatória realista de voto computado
    const baseWin = 55 + Math.floor(Math.random() * 20); // 55% a 75%
    const percent1 = team === 1 ? baseWin : 100 - baseWin;
    const percent2 = 100 - percent1;
    
    this.votedState[match.id] = {
      team,
      percent1,
      percent2
    };
  }

  hasVoted(match: Match): boolean {
    return !!this.votedState[match.id];
  }

  getVotedTeam(match: Match): 1 | 2 | null {
    return this.votedState[match.id]?.team || null;
  }

  getPercent(match: Match, team: 1 | 2): number {
    if (!this.votedState[match.id]) return 0;
    return team === 1 ? this.votedState[match.id].percent1 : this.votedState[match.id].percent2;
  }
}

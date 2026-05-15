import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';
import { LucideAngularModule } from 'lucide-angular';
import { TeamRowComponent } from '../../../../shared/components/ui/team-row/team-row.component';

interface Team {
  name: string;
  flag: string;
  img: string;
}

interface Match {
  id: string;
  team1: Team | null;
  team2: Team | null;
  team3: Team | null;
  winner?: 1 | 2;
}

@Component({
  selector: 'app-bracket-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, LucideAngularModule, TeamRowComponent],
  templateUrl: './bracket-section.component.html',
  styles: []
})
export class BracketSectionComponent {
  r4: Match[] = [
    { id: 'r16-1', team1: { name: 'Brasil', flag: '🇧🇷', img: 'assets/images/hambgurgers/Brasil.jpeg' }, team2: { name: 'EUA', flag: '🇺🇸', img: 'assets/images/hambgurgers/Eua.jpeg' }, team3: { name: 'França', flag: '🇫🇷', img: 'assets/images/hambgurgers/França.jpg' }, winner: 1 },
    { id: 'r16-2', team1: { name: 'Argentina', flag: '🇦🇷', img: 'assets/images/hambgurgers/Argentina.jpeg' }, team2: { name: 'Japão', flag: '🇯🇵', img: 'assets/images/hambgurgers/Japao.jpeg' }, team3: { name: 'Brasil', flag: '🇧🇷', img: 'assets/images/hambgurgers/Brasil.jpeg' }, winner: 1 },
  ];

  sf: Match[] = [
    { id: 'qf-1', team1: { name: 'Brasil', flag: '🇧🇷', img: 'assets/images/hambgurgers/Brasil.jpeg' }, team2: { name: 'França', flag: '🇫🇷', img: 'assets/images/hambgurgers/França.jpg' }, team3: null, winner: 1 },
    { id: 'qf-2', team1: { name: 'Argentina', flag: '🇦🇷', img: 'assets/images/hambgurgers/Argentina.jpeg' }, team2: { name: 'Japão', flag: '🇯🇵', img: 'assets/images/hambgurgers/Japao.jpeg' }, team3: null, winner: 1 },
  ];

  final: Match[] = [
    { id: 'final', team1: { name: 'Brasil', flag: '🇧🇷', img: 'assets/images/hambgurgers/Brasil.jpeg' }, team2: { name: 'Argentina', flag: '🇦🇷', img: 'assets/images/hambgurgers/Argentina.jpeg' }, team3: null },
  ];
}

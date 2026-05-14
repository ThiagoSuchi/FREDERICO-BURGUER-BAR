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
  r16: Match[] = [
    { id: 'r16-1', team1: { name: 'O Brabo', flag: '🇧🇷', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'Tico', flag: '🇨🇷', img: 'https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?auto=format&fit=crop&w=400&q=80' }, winner: 1 },
    { id: 'r16-2', team1: { name: 'Chivito', flag: '🇺🇾', img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'Cafetero', flag: '🇨🇴', img: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3a99?auto=format&fit=crop&w=400&q=80' }, winner: 1 },
    { id: 'r16-3', team1: { name: 'El Pibe', flag: '🇦🇷', img: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'Completo', flag: '🇨🇱', img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=400&q=80' }, winner: 1 },
    { id: 'r16-4', team1: { name: 'Mr. USA', flag: '🇺🇸', img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'Azteca', flag: '🇲🇽', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400&q=80' }, winner: 2 },
    { id: 'r16-5', team1: { name: 'La Mamma', flag: '🇮🇹', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'O Lusitano', flag: '🇵🇹', img: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=400&q=80' }, winner: 1 },
    { id: 'r16-6', team1: { name: 'Toro', flag: '🇪🇸', img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'Oranje', flag: '🇳🇱', img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80' }, winner: 2 },
    { id: 'r16-7', team1: { name: 'Blitzkrieg', flag: '🇩🇪', img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'The Pub', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', img: 'https://images.unsplash.com/photo-1610614091716-e3a0bb122b22?auto=format&fit=crop&w=400&q=80' }, winner: 1 },
    { id: 'r16-8', team1: { name: 'Le Bleu', flag: '🇫🇷', img: 'https://images.unsplash.com/photo-1594212691516-436f8f6c268c?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'Croata', flag: '🇭🇷', img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=400&q=80' }, winner: 1 },
  ];

  qf: Match[] = [
    { id: 'qf-1', team1: { name: 'O Brabo', flag: '🇧🇷', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'Chivito', flag: '🇺🇾', img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=400&q=80' }, winner: 1 },
    { id: 'qf-2', team1: { name: 'El Pibe', flag: '🇦🇷', img: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'Azteca', flag: '🇲🇽', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400&q=80' }, winner: 1 },
    { id: 'qf-3', team1: { name: 'La Mamma', flag: '🇮🇹', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'Oranje', flag: '🇳🇱', img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80' }, winner: 1 },
    { id: 'qf-4', team1: { name: 'Blitzkrieg', flag: '🇩🇪', img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'Le Bleu', flag: '🇫🇷', img: 'https://images.unsplash.com/photo-1594212691516-436f8f6c268c?auto=format&fit=crop&w=400&q=80' }, winner: 2 },
  ];

  sf: Match[] = [
    { id: 'sf-1', team1: { name: 'O Brabo', flag: '🇧🇷', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'El Pibe', flag: '🇦🇷', img: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=400&q=80' }, winner: 1 },
    { id: 'sf-2', team1: { name: 'La Mamma', flag: '🇮🇹', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80' }, team2: { name: 'Le Bleu', flag: '🇫🇷', img: 'https://images.unsplash.com/photo-1594212691516-436f8f6c268c?auto=format&fit=crop&w=400&q=80' } },
  ];

  final: Match[] = [
    { id: 'final', team1: { name: 'O Brabo', flag: '🇧🇷', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' }, team2: null },
  ];
}

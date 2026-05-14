import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Team {
  name: string;
  flag: string;
  img: string;
}

@Component({
  selector: 'app-team-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-row.component.html',
  styles: []
})
export class TeamRowComponent {
  @Input() team: Team | null = null;
  @Input() isWinner = false;
  @Input() isLoser = false;
}

import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class LiveResultsComponent implements OnInit, OnDestroy {
  results: Result[] = [
    {
      name: 'Brasil',
      flag: '🇧🇷',
      votes: 15420,
      percentage: 65.0,
      color: 'bg-frederico-yellow',
    },
    {
      name: 'Argentina',
      flag: '🇦🇷',
      votes: 8304,
      percentage: 35.0,
      color: 'bg-frederico-red',
    },
  ];

  totalVotes: number = 0;
  leaderText: string = 'BRASIL ASSUME A LIDERANÇA';
  private updateInterval: any;

  ngOnInit() {
    this.calculateTotals();
    
    // Simula a contagem animada na tela para passar vibe de transmissão "Ao Vivo"
    this.updateInterval = setInterval(() => {
      // Votos aleatórios simulados
      const plusBr = Math.floor(Math.random() * 5);
      const plusAr = Math.floor(Math.random() * 3);
      
      this.results[0].votes += plusBr;
      this.results[1].votes += plusAr;
      
      this.calculateTotals();
    }, 2500);
  }

  ngOnDestroy() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
    }
  }

  calculateTotals() {
    this.totalVotes = this.results.reduce((acc, curr) => acc + curr.votes, 0);
    
    this.results.forEach(res => {
      res.percentage = Number(((res.votes / this.totalVotes) * 100).toFixed(1));
    });

    const isBrasilLeading = this.results[0].votes > this.results[1].votes;
    
    if (Math.abs(this.results[0].percentage - this.results[1].percentage) < 5) {
      this.leaderText = 'DISPUTA ACIRRADA! VOTO A VOTO';
    } else {
      this.leaderText = isBrasilLeading 
        ? 'BRASIL MANTÉM FORTE LIDERANÇA' 
        : 'ARGENTINA ASSUME A LIDERANÇA';
    }
  }

  getLeader(): Result {
    return this.results[0].votes > this.results[1].votes ? this.results[0] : this.results[1];
  }
}

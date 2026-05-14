import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/ui/section-heading/section-heading.component';

interface Step {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent],
  templateUrl: './how-it-works.component.html',
  styles: []
})
export class HowItWorksComponent {
  steps: Step[] = [
    {
      icon: 'users',
      title: 'Escolha seu lado',
      desc: 'Cada hambúrguer representa um país. Analise os ingredientes e escolha seu favorito.',
    },
    {
      icon: 'check',
      title: 'Vote no confronto',
      desc: 'Participe das disputas diárias. Seu voto decide quem avança na chave.',
    },
    {
      icon: 'fire',
      title: 'Acompanhe ao vivo',
      desc: 'Veja os resultados em tempo real. A tensão aumenta a cada minuto.',
    },
    {
      icon: 'trophy',
      title: 'A Grande Final',
      desc: 'O hambúrguer campeão entra para o cardápio oficial do Frederico Burger.',
    },
  ];
}

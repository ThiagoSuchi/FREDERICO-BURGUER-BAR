import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundEffectsComponent } from '../../../../shared/components/layout/background-effects/background-effects.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { MatchSectionComponent } from '../../components/match-section/match-section.component';
import { LiveResultsComponent } from '../../components/live-results/live-results.component';
import { RankingSectionComponent } from '../../components/ranking-section/ranking-section.component';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import { FooterComponent } from '../../../../shared/components/layout/footer/footer.component';
import { BracketSectionComponent } from '../../components/bracket-section/bracket-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundEffectsComponent,
    HeroComponent,
    MatchSectionComponent,
    LiveResultsComponent,
    BracketSectionComponent,
    RankingSectionComponent,
    HowItWorksComponent,
    FooterComponent,
  ],
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomeComponent {}

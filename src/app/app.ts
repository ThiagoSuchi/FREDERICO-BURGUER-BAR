import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  isPlaying = false;

  toggleMusic() {
    const audio = this.audioPlayer.nativeElement;
    
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.volume = 0.2; // Volume suave para música de fundo
      audio.loop = true; // Garante que a música toque repetidas vezes sem fim
      audio.play().catch(err => console.log('Autoplay prevented by browser:', err));
    }
    
    this.isPlaying = !this.isPlaying;
  }
}

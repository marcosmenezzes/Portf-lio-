import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @ViewChild('favoriteSong') private favoriteSong?: ElementRef<HTMLAudioElement>;

  readonly waveBars = Array.from({ length: 18 });
  isPlaying = false;
  currentTime = 0;
  duration = 0;

  toggleSong(): void {
    const audio = this.favoriteSong?.nativeElement;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => this.isPlaying = false);
    } else {
      audio.pause();
    }
  }

  updateProgress(audio: HTMLAudioElement): void {
    this.currentTime = audio.currentTime;
    this.duration = Number.isFinite(audio.duration) ? audio.duration : 0;
  }

  finishSong(audio: HTMLAudioElement): void {
    this.isPlaying = false;
    this.updateProgress(audio);
  }
}

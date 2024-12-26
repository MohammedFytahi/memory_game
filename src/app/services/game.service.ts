import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private colors: string[] = environment.gameSettings.colors;

  generateSequence(): string[] {
    return [this.getRandomColor()];
  }

  generateNextStep(sequence: string[]): string[] {
    return [...sequence, this.getRandomColor()];
  }

  isSequenceCorrect(userInputs: string[], sequence: string[]): boolean {
    for (let i = 0; i < userInputs.length; i++) {
      if (userInputs[i] !== sequence[i]) {
        return false;
      }
    }
    return true;
  }

  private getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }
}

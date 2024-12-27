
import { CommonModule } from '@angular/common';
import { ScoreComponent } from '../score/score.component';
import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, ScoreComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  sequence: string[] = [];
  userResponse: string[] = [];
  isGameActive = false;
  showSequence = false;
  score = 0;
  timer = 10;
  timerInterval: any;
  buttonOrder: string[] = [];

  constructor(public gameService: GameService) {}

  startGame(): void {
    this.isGameActive = true;
    this.gameService.resetGame();
    this.score = 0;
    this.gameService.generateSequence();
    this.nextLevel();
  }

  nextLevel(): void {
    this.showSequence = true;
    this.timer = 10;
    clearInterval(this.timerInterval);
    this.gameService.addColor();
    this.sequence = this.gameService.getSequence();
    this.userResponse = [];
    this.buttonOrder = this.shuffle([...new Set(this.sequence)]);

    setTimeout(() => {
      this.showSequence = false;
      this.startTimer();
    }, 15000);
  }

  addUserResponse(color: string): void {
    this.userResponse.push(color);

    if (this.userResponse.length === this.sequence.length) {
      clearInterval(this.timerInterval);
      this.checkResponse();
    }
  }

  checkResponse(): void {
    const isCorrect = this.gameService.verifyResponse(this.userResponse);

    if (isCorrect) {
      alert('Correct! Proceeding to the next level.');
      this.score++;
      this.nextLevel();
    } else {
      alert('Incorrect! Game over.');
      this.endGame();
    }
  }

  startTimer(): void {
    this.timerInterval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.timerInterval);
        alert('Time’s up! Game over.');
        this.endGame();
      }
    }, 1000);
  }

  endGame(): void {
    clearInterval(this.timerInterval);
    this.isGameActive = false;
  }

  shuffle(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
  }
}
